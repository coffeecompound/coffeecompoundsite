"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";
import { Icon } from "./ui";

const INPUT =
  "w-full px-space-md py-3 rounded-lg bg-surface-container-low text-espresso-dark font-body-md border border-outline-variant/60 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm";
const LABEL = "block font-label-md text-label-md text-espresso-dark mb-1";

/** Posts to the Cloudflare Pages Function at /api/contact and shows the design's success / error banners. */
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <form action={SITE.formEndpoint} className="flex flex-col gap-space-md" method="POST" onSubmit={onSubmit}>
        <p className="hidden" aria-hidden="true">
          <label>
            Leave this empty <input name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        <div>
          <label className={LABEL} htmlFor="contact-name">
            Your Name
          </label>
          <input autoComplete="name" className={INPUT} id="contact-name" name="name" placeholder="Your name" required type="text" />
        </div>
        <div>
          <label className={LABEL} htmlFor="contact-email">
            Email Address
          </label>
          <input autoComplete="email" className={INPUT} id="contact-email" name="email" placeholder="you@example.com" required type="email" />
        </div>
        <div>
          <label className={LABEL} htmlFor="contact-topic">
            Topic
          </label>
          <select className={INPUT} id="contact-topic" name="topic" defaultValue="General question">
            <option>General question</option>
            <option>Conference room</option>
            <option>Catering or large order</option>
            <option>Private gathering</option>
            <option>Feedback</option>
          </select>
        </div>
        <div>
          <label className={LABEL} htmlFor="contact-message">
            Message
          </label>
          <textarea className={INPUT} id="contact-message" name="message" placeholder="Let us know how we can help..." required rows={4} />
        </div>
        <button
          className="w-full sm:w-auto self-start px-space-xl py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-[#D32F23] hover:shadow-lg transition-all duration-200 disabled:opacity-60"
          disabled={status === "sending"}
          type="submit"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
      </form>
      <div aria-live="polite">
        {status === "ok" && (
          <div className="mt-space-md p-space-md bg-secondary-container text-secondary rounded-lg flex items-center gap-space-sm shadow-sm border border-secondary/30">
            <Icon name="check_circle" className="text-primary" />
            <span className="font-body-md text-body-md font-semibold">Thank you! Your submission has been received!</span>
          </div>
        )}
        {status === "error" && (
          <div className="mt-space-md p-space-md bg-error-container text-on-error-container rounded-lg flex items-center gap-space-sm shadow-sm">
            <Icon name="error" className="text-error" />
            <span className="font-body-md text-body-md font-medium">
              Oops! Something went wrong while submitting the form. Please call{" "}
              <a className="underline" href={SITE.phoneHref}>
                {SITE.phone}
              </a>{" "}
              or email{" "}
              <a className="underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              .
            </span>
          </div>
        )}
      </div>
    </>
  );
}
