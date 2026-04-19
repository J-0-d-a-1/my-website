import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

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

        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder={t("form_name")}
            className="bg-bg-2 border border-white/[0.08] rounded-sm px-4 py-3 text-sm text-[#f0ede6] placeholder:text-muted outline-none focus:border-white/2- transition-colors"
          />
          <input
            type="email"
            placeholder={t("form_email")}
            className="bg-bg-2 border border-white/[0.08] rounded-sm px-4 py-3 text-sm text-[#f0ede6] placeholder:text-muted outline-none focus:border-white/20 transition-colors"
          />
          <textarea
            placeholder={t("form_message")}
            rows={4}
            className="bg-bg-2 border border-white/[0.08] rounded-sm px-4 py-3 text-sm text-[#f0ede6] placeholder:text-muted outline-none focus:border-white/20 transition-colors resize-none"
          ></textarea>
          <button
            type="submit"
            className="py-3 bg-accent-gold text-bg text-sm font-medium tracking-wide rounded-sm hover:opacity-90 transition-opacity"
          >
            {t("form_submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
