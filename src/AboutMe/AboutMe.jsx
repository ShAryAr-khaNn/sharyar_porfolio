import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import photo from '../Header/sharyarimage.png';
import { aboutInfo, experience, profile, skillGroups } from '../Data';
import PageHeader from '../components/PageHeader';

function AboutMe() {
  return (
    <>
      <PageHeader eyebrow="About" title="From circuits to AI and full-stack software" />

      <section className="container-page grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <div>
          <div className="max-w-sm overflow-hidden rounded-2xl">
            <img
              src={photo}
              alt={`Portrait of ${profile.name}`}
              className="aspect-square w-full scale-[1.04] object-cover object-top"
            />
          </div>
          <dl className="mt-8 max-w-sm divide-y divide-line border-y border-line text-sm">
            <div className="flex justify-between py-3">
              <dt className="text-ink-muted">Based in</dt>
              <dd className="font-medium">{profile.location}</dd>
            </div>
            <div className="flex justify-between py-3">
              <dt className="text-ink-muted">Focus</dt>
              <dd className="font-medium">AI & full-stack apps</dd>
            </div>
            <div className="flex justify-between py-3">
              <dt className="text-ink-muted">Degree</dt>
              <dd className="font-medium">BS Computer Science</dd>
            </div>
          </dl>
        </div>

        <div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            {aboutInfo.story.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <h2 className="heading mt-16 text-2xl sm:text-3xl">Experience</h2>
          <ol className="mt-8 space-y-6">
            {experience.map((job) => (
              <li key={`${job.company}-${job.role}`} className="grid gap-2 border-t border-line pt-6 sm:grid-cols-[10rem_1fr]">
                <p className="text-sm text-ink-muted">{job.period}</p>
                <div>
                  <h3 className="font-semibold">
                    {job.role} <span className="font-normal text-ink-muted">· {job.company}, {job.location}</span>
                  </h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-ink-soft">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="heading mt-16 text-2xl sm:text-3xl">Skills</h2>
          <div className="mt-8 space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title} className="grid gap-3 border-t border-line pt-6 sm:grid-cols-[10rem_1fr]">
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="tag">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link to="/project" className="btn-primary">
              See my projects
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/academia" className="btn-ghost">Education</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
