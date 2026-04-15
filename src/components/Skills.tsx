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
    <section id="skills">
      <div>
        <span>{t("section_label")}</span>
        <h2>{t("section_title")}</h2>
      </div>
      <div>
        {skillGroups.map((group) => (
          <div key={group.key}>
            <p>{t(`groups.${group.key}`)}</p>
            <ul>
              {group.skills.map((skill, i) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
