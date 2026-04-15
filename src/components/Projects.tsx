import { useTranslations } from "next-intl";
import ProjectCard from "@/components/ProjectCard";

const projectList = [
  {
    slug: "menucraft",
    name: "MenuCraft",
    stack: ["React", "Node.js", "Supabase", "Tailwind", "Vercel"],
    liveUrl: "https://restaurant-menu-eight-topaz.vercel.app/",
    githubUrl: "https://github.com/J-0-d-a-1/restaurant-menu",
    dotColor: "bg-accent-gold",
    featured: true,
  },
  {
    slug: "musubiya",
    name: "Musubiya",
    stack: ["React", "CSS", "Vercel"],
    liveUrl: "https://mu-subiya.com",
    dotColor: "bg-[#a899d0]",
  },
  {
    slug: "munchmatch",
    name: "MunchMatch",
    stack: ["React", "Ruby on Rails", "PostgreSQL", "SCSS"],
    githubUrl: "https://github.com/J-0-d-a-1",
    dotColor: "bg-accent-teal",
  },
] as const;

export default function Project() {
  const t = useTranslations("projects");

  return (
    <section id="projects">
      <div>
        <span>{t("section_label")}</span>
        <h2>{t("section_title")}</h2>
      </div>
      <div>
        {projectList.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            type={t(`items.${project.slug}.type`)}
            description={t(`items.${project.slug}.descrioption`)}
            liveLabel={t("live")}
            githubLabel={t("github")}
          />
        ))}
      </div>
    </section>
  );
}
