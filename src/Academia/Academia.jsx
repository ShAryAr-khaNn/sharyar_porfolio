import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { educationInfo } from '../Data';
import PageHeader from '../components/PageHeader';

function Academia() {
  return (
    <>
      <PageHeader eyebrow="Education" title="Where I learned">
        <p>
          A grounding in electrical technology, followed by a degree in computer science — and a habit of
          learning something new every week.
        </p>
      </PageHeader>

      <section className="container-page">
        <ol className="relative max-w-3xl border-l border-line">
          {educationInfo.map((item) => (
            <li key={item.title} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
              <span
                className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-accent ring-4 ring-paper"
                aria-hidden="true"
              />
              {item.year && <p className="text-sm font-medium text-ink-muted">{item.year}</p>}
              <h2 className="mt-1 text-xl font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-1 text-ink-soft">
                {item.institutionUrl ? (
                  <a href={item.institutionUrl} target="_blank" rel="noopener noreferrer" className="link font-normal">
                    {item.institution}
                  </a>
                ) : (
                  item.institution
                )}
              </p>
              {item.detail && <p className="mt-2 text-ink-soft">{item.detail}</p>}
              {item.url && (
                <Link
                  to={item.url}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent"
                >
                  View documents
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

export default Academia;
