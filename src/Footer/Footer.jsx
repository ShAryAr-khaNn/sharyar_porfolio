import { Link } from 'react-router-dom';
import { profile, socials } from '../Data';
import SocialIcon from '../components/SocialIcon';

function Footer() {
  return (
    <footer className="mt-24 bg-ink text-paper/80">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display text-2xl text-paper">Have a project in mind?</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed">
            I&apos;m open to freelance work, collaborations and full-time roles in AI engineering.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-5 inline-block text-sm font-medium text-paper underline decoration-paper/30 underline-offset-4 hover:decoration-paper"
          >
            {profile.email}
          </a>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <ul className="flex gap-2">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 transition-colors hover:border-paper/50 hover:text-paper"
                >
                  <SocialIcon name={s.name} />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm">{profile.location}</p>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-paper/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <Link to="/contactme" className="hover:text-paper">Get in touch</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
