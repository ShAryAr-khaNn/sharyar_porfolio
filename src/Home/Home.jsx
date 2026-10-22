import { Link } from 'react-router-dom';
import { ArrowRightIcon, MapPinIcon } from '@heroicons/react/24/outline';
import photo from '../Header/sharyarimage.png';
import { homeInfo, profile, projects, skillGroups } from '../Data';
import ProjectCard from '../components/ProjectCard';

function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="container-page grid items-center gap-12 pb-20 pt-12 sm:pt-20 md:grid-cols-[1.25fr_1fr] md:gap-16">
        <div className="order-2 md:order-1">
          <p className="eyebrow">{profile.role}</p>
          <h1 className="mt-4 font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            {homeInfo.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{homeInfo.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/project" className="btn-primary">
              See my work
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/contactme" className="btn-ghost">Get in touch</Link>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-ink-muted">
            <MapPinIcon className="h-4 w-4" aria-hidden="true" />
            {profile.location}
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative mx-auto max-w-[17rem] md:max-w-none">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-accent-tint" aria-hidden="true" />
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={photo}
                alt={`Portrait of ${profile.name}`}
                className="aspect-[4/5] w-full scale-[1.04] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Focus strip */}
      <section className="border-y border-line bg-white/60">
        <ul className="container-page grid grid-cols-2 gap-px py-6 text-center text-sm font-medium text-ink-soft sm:grid-cols-4">
          {homeInfo.focus.map((item) => (
            <li key={item} className="py-2">{item}</li>
          ))}
        </ul>
      </section>

      {/* Featured projects */}
      <section className="container-page pt-20 sm:pt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="heading mt-3">Featured projects</h2>
          </div>
          <Link to="/project" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent">
            All projects
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="container-page pt-20 sm:pt-24">
        <p className="eyebrow">Toolkit</p>
        <h2 className="heading mt-3">What I work with</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="card p-6">
              <h3 className="text-sm font-semibold text-ink">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-[15px] text-ink-soft">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
