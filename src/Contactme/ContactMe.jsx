import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { profile, socials } from '../Data';
import PageHeader from '../components/PageHeader';
import SocialIcon from '../components/SocialIcon';

function ContactMe() {
  const direct = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: EnvelopeIcon },
    { label: 'Phone', value: profile.phone, href: profile.phoneHref, Icon: PhoneIcon },
    { label: 'Location', value: profile.location, Icon: MapPinIcon },
  ];

  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's work together">
        <p>
          Building an AI product, need an agent wired into your workflow, or just want to talk shop? Email is the
          fastest way to reach me.
        </p>
      </PageHeader>

      <section className="container-page grid gap-6 md:grid-cols-2">
        <div className="card p-6 sm:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Direct</h2>
          <ul className="mt-6 space-y-5">
            {direct.map(({ label, value, href, Icon }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-ink-muted">{label}</p>
                  {href ? (
                    <a href={href} className="font-medium hover:text-accent">{value}</a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <a href={`mailto:${profile.email}`} className="btn-primary mt-8">Send an email</a>
        </div>

        <div className="card p-6 sm:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Elsewhere</h2>
          <ul className="mt-6 divide-y divide-line">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 font-medium transition-colors hover:text-accent"
                >
                  <span className="flex items-center gap-3">
                    <SocialIcon name={s.name} />
                    {s.name}
                  </span>
                  <span aria-hidden="true" className="text-ink-muted">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ContactMe;
