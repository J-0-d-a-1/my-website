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
    <section id="projects" className="max-w-5xl mx-auto px-10 pt-12">
      <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-white/[0.08]">
        <span className="section-label">{t("section_label")}</span>
        <h2 className="font-serif text-2xl">{t("section_title")}</h2>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {projectList.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            type={t(`items.${project.slug}.type`)}
            description={t(`items.${project.slug}.description`)}
            liveLabel={t("live")}
            githubLabel={t("github")}
          />
        ))}
      </div>
    </section>
  );
}
