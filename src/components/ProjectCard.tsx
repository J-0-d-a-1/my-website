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
    <div>
      <div />
      <div>
        <p>{type}</p>
        <h3>{project.name}</h3>
      </div>

      <p>{description}</p>

      <div>
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            {liveLabel}
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            {githubLabel}
          </a>
        )}
      </div>
    </div>
  );
}
