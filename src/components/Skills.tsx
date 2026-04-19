import { useTranslations } from "next-intl";

const skillGroups = [
  {
    key: "languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Ruby", "HTML5 / CSS3"],
  },
  {
    key: "frameworks",
    skills: [
      "React / Next.js",
      "Node.js / Express",
      "Ruby on Rails",
      "Tailwind / SCSS",
    ],
  },
  { key: "databases", skills: ["PostgreSQL", "Supabase", "SQL"] },
  {
    key: "tools",
    skills: ["Git / GitHub", "Vercel / CI/CD", "Jest / Cypress", "REST APIs"],
  },
] as const;

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="max-w-5xl mx-auto px-10 pt-12">
      <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-white/[0.08]">
        <span className="section-label">{t("section_label")}</span>
        <h2 className="font-serif text-2xl">{t("section_title")}</h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.key}
            className="bg-bg-2 border border-white/[0.08] rounded-[4px] p-5"
          >
            <p className="text-[0.68rem] font-mono tracking-[0.15em] uppercase text-accent-gold mb-3">
              {t(`groups.${group.key}`)}
            </p>
            <ul>
              {group.skills.map((skill, i) => (
                <li
                  key={skill}
                  className={`text-[0.8rem] text-muted py-1.5 ${i < group.skills.length - 1 ? "border-b border-white/[0.08]" : ""}`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
