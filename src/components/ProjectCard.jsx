import { ArrowUpRightIcon, LockClosedIcon } from '@heroicons/react/24/outline';

// Drawn cover for projects that have no screenshot.
function Cover({ cover, tags }) {
  const Icon = cover.icon;
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden bg-accent-tint">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(#d5dbe8 1px, transparent 1px), linear-gradient(90deg, #d5dbe8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-line transition-transform duration-500 group-hover:scale-105">
        <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
      </div>
      <div className="relative text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{cover.label}</p>
        <p className="mt-1 text-xs text-ink-muted">{tags.slice(0, 3).join(' · ')}</p>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const contain = project.imageFit === 'contain';
  const media = project.image ? (
    <img
      src={project.image}
      alt=""
      loading="lazy"
      className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${
        contain ? 'object-contain p-8' : 'object-cover'
      }`}
    />
  ) : (
    <Cover cover={project.cover} tags={project.tags} />
  );
  const mediaClass = 'block aspect-[16/10] overflow-hidden border-b border-line bg-[#f3f0eb]';

  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_30px_-12px_rgba(29,36,51,0.18)]">
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className={mediaClass} tabIndex={-1} aria-hidden="true">
          {media}
        </a>
      ) : (
        <div className={mediaClass} aria-hidden="true">{media}</div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">{tag}</li>
          ))}
        </ul>
        {project.link ? (
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
        ) : (
          <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted">
            <LockClosedIcon className="h-4 w-4" aria-hidden="true" />
            {project.linkLabel}
          </p>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
