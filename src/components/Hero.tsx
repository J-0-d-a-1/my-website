import { useTranslations } from "use-intl";

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
        {t("headding1")}
        <br />
        <em className="italic text-accent-gold">{t("headding2")}</em>
        {t("heading3")}
      </h1>

      <p className="text-base text-muted leading-[1.8] max-w-xl mb-8">
        {t("bio")}
      </p>

      <div>
        <span>{t("tag_bilingual")}</span>
        {techTags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="flex gap-4">
        <a href="#projects">{t("cta_work")}</a>
        <a href="/Jumpei_Oda_Resume.pdf" download>
          {t("cta_resume")}
        </a>
      </div>
    </section>
  );
}
