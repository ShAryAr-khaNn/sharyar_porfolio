import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import PageHeader from './PageHeader';

function DocumentGallery({ title, subtitle, images }) {
  return (
    <>
      <div className="container-page pt-10">
        <Link to="/academia" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink">
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          Education
        </Link>
      </div>
      <PageHeader eyebrow="Documents" title={title} compact>
        {subtitle && <p>{subtitle}</p>}
      </PageHeader>
      <section className="container-page">
        <div className="max-w-3xl space-y-8">
          {images.map((img) => (
            <a
              key={img.src}
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
              className="card block overflow-hidden p-2 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(29,36,51,0.18)] sm:p-3"
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full rounded-xl" />
            </a>
          ))}
          <p className="text-sm text-ink-muted">Click a document to open it at full size.</p>
        </div>
      </section>
    </>
  );
}

export default DocumentGallery;
