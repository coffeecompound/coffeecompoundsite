// Contact form handler: POST /api/contact
// Emails contact-form submissions to the shop through Resend (https://resend.com).
// Set these in the Cloudflare dashboard (Worker > Settings > Variables and Secrets) or with `npx wrangler secret put NAME`:
//   RESEND_API_KEY    Resend API key
//   CONTACT_TO_EMAIL  inbox that receives messages, e.g. coffee@thecoffeecompound.com
//   CONTACT_FROM_EMAIL (optional) verified sender, e.g. "Website <web@thecoffeecompound.com>"

export interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}



const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

const clean = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export async function handleContact(request: Request, env: Env): Promise<Response> {
  let data: Record<string, unknown>;
  const type = request.headers.get("Content-Type") || "";
  try {
    data = type.includes("application/json")
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());
  } catch {
    return json({ ok: false, error: "Invalid request" }, 400);
  }

  // Honeypot: bots fill the hidden "company" field. Pretend success.
  if (clean(data.company, 200)) return json({ ok: true });

  const name = clean(data.name, 120);
  const email = clean(data.email, 200);
  const topic = clean(data.topic, 80) || "General question";
  const message = clean(data.message, 5000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: "Please fill in your name, a valid email, and a message." }, 422);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL) {
    return json({ ok: false, error: "Contact form is not configured yet." }, 503);
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL || "The Coffee Compound Website <onboarding@resend.dev>",
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `Website message: ${topic} — ${name}`,
      html: `<p><strong>Name:</strong> ${esc(name)}<br><strong>Email:</strong> ${esc(email)}<br><strong>Topic:</strong> ${esc(topic)}</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
      text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
    }),
  });

  if (!res.ok) return json({ ok: false, error: "Could not send message." }, 502);
  return json({ ok: true });
}

