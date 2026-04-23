"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

export default function Contact() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    const result = await sendEmail(formData);
    if (result.success) {
      setStatus("success");
      formRef.current?.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="max-w-5xl mx-auto px-10 pt-12">
      <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-white/[0.08]">
        <span className="section-label">{t("section_label")}</span>
        <h2 className="font-serif text-2xl">{t("section_title")}</h2>
      </div>
      <div className="grid grid-cols-2 gap-8 items-start">
        <div>
          <p className="text-base text-muted leading-[1.9] mb-6">{t("bio")}</p>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-[0.68rem] font-mono tracking-[0.12em] uppercase text-muted w-20">
              {t("github")}
            </span>
            <a
              href="https://github.com/J-0-d-a-1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-gold hover:opacity-80 transition-opacity"
            >
              github.com/J-0-d-a-1
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-[0.68rem] font-mono tracking-[0.12em] uppercase text-muted w-20">
              {t("linkedin")}
            </span>
            <a
              href="https://linkedin.com/in/jumpei-oda"
              className="text-accent-gold hover:opacity-80 transition-opacity"
            >
              linkedin.com/in/jumpei-oda
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-[0.68rem] font-mono tracking-[0.12em] uppercase text-muted w-20">
              {t("location")}
            </span>
            <span className="text-muted">{t("location_value")}</span>
          </div>
        </div>

        <form
          ref={formRef}
          action={handleSubmit}
          className="flex flex-col gap-3"
        >
          <input
            type="text"
            name="name"
            placeholder={t("form_name")}
            className="bg-bg-2 border border-white/[0.08] rounded-sm px-4 py-3 text-sm text-[#f0ede6] placeholder:text-muted outline-none focus:border-white/20 transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder={t("form_email")}
            className="bg-bg-2 border border-white/[0.08] rounded-sm px-4 py-3 text-sm text-[#f0ede6] placeholder:text-muted outline-none focus:border-white/20 transition-colors"
          />
          <textarea
            name="message"
            placeholder={t("form_message")}
            rows={4}
            className="bg-bg-2 border border-white/[0.08] rounded-sm px-4 py-3 text-sm text-[#f0ede6] placeholder:text-muted outline-none focus:border-white/20 transition-colors resize-none"
          ></textarea>
          <button
            type="submit"
            disabled={status === "loading"}
            className="py-3 bg-accent-gold text-bg text-sm font-medium tracking-wide rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {t("form_submit")}
          </button>

          {status === "success" && (
            <p className="text-sm text-accent-teal text-center">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
