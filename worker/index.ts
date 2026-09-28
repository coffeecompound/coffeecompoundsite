// Cloudflare Worker entry. Static pages come from ./out (the Next.js export) through the ASSETS binding.
// Only /api/* reaches this code (see run_worker_first in wrangler.toml).
import { handleContact, type Env as ContactEnv } from "./contact";

interface Env extends ContactEnv {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/contact" || pathname === "/api/contact/") {
      if (request.method !== "POST") return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } });
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
