import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

function ProjectCard({ project }) {
  const contain = project.imageFit === 'contain';
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_30px_-12px_rgba(29,36,51,0.18)]">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-[16/10] overflow-hidden border-b border-line bg-[#f3f0eb]"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${
            contain ? 'object-contain p-8' : 'object-cover'
          }`}
        />
      </a>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">{tag}</li>
          ))}
        </ul>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
        >
          {project.linkLabel}
          <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">— {project.title}</span>
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
