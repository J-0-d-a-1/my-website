import { useTranslations } from "next-intl";

const techTags = [
  "React",
  "JavaScript",
  "Node.js",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
];

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="max-w-5xl mx-auto px-10 pt-20 pb-16">
      <p className="text-[0.72rem] font-mono tracking-[0.2em] uppercase text-accent-gold mb-5">
        {t("label")}
      </p>

      <h1 className="font-serif text-[claamp(2.8rem,5vw,4.5rem)] leading-[1.05] mb-4">
        {t("heading1")}
        <br />
        <em className="italic text-accent-gold">{t("heading2")}</em>
        {t("heading3")}
      </h1>

      <p className="text-base text-muted leading-[1.8] max-w-xl mb-8">
        {t("bio")}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        <span className="text-[0.7rem] font-mono px-3 py-1.5 rounded-full border border-accent-gold text-accent-gold tracking-[0.05em]">
          {t("tag_bilingual")}
        </span>
        {techTags.map((tag) => (
          <span
            key={tag}
            className="text-[0.7rem] font-mono px-3 py-1.5 rounded-full border border-white/[0.08] text-muted tracking-[0.05em]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-2.5 bg-accent-gold text-bg text-sm font-medium tracking-wide rounded-sm hover:opacity-90 transition-opacity"
        >
          {t("cta_work")}
        </a>
        <a
          href="/Jumpei_Oda_Resume.pdf"
          download
          className="px-6 py-2.5 bg-transparent text-[#f0ede6] text-sm border border-white/[0.08] rounded-sm hover:border-white/20 transition-colors"
        >
          {t("cta_resume")}
        </a>
      </div>
    </section>
  );
}
