type Props = {
  project: {
    slug: string;
    name: string;
    stack: readonly string[];
    liveUrl?: string;
    githubUrl?: string;
    dotColor: string;
    featured?: boolean;
  };
  type: string;
  description: string;
  liveLabel: string;
  githubLabel: string;
};

export default function ProjectCard({
  project,
  type,
  description,
  liveLabel,
  githubLabel,
}: Props) {
  return (
    <div
      className={`bg-bg-2 border rounded-[4px] p-6 flex flex-col gap-4 transition-colors duration-200 hover:border-accent-gold/30`}
    >
      <div className={`w-2.5 h-2.5 rounded-full ${project.dotColor}`} />

      <div>
        <p className="text-[0.68rem] font-mono tracking-[0.12em] uppercase text-muted mb-1">
          {type}
        </p>
        <h3 className="font-serif text-lg text-[#f0ede6]">{project.name}</h3>
      </div>

      <p className="text-[0.82rem] text-muted leading-[1.7] flex-1">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[0.65rem] font-mono px-2 py-0.5 bg-bg-3 border border-white/[0.08] rounded-sm text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.72rem] font-mono tracking-[0.08em] text-accent-gold border-b border-accent-gold/30 hover:border-accent-gold transition-colors"
          >
            {liveLabel}
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.72rem] font-mono tracking-[0.08em] text-accent-gold border-b border-accent-gold/30 hover:border-accent-gold transition-colors"
          >
            {githubLabel}
          </a>
        )}
      </div>
    </div>
  );
}
