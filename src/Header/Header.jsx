import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import photo from './sharyarimage.png';
import { profile } from '../Data';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/project' },
  { name: 'Education', href: '/academia' },
  { name: 'Contact', href: '/contactme' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
      isActive ? 'bg-accent-tint text-accent' : 'text-ink-soft hover:text-ink'
    }`;

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-paper/85 backdrop-blur-md transition-colors ${
        scrolled || open ? 'border-line' : 'border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Main">
        <Link to="/" className="flex items-center gap-3">
          <img src={photo} alt="" className="h-9 w-9 rounded-full object-cover object-top ring-1 ring-line" />
          <span className="font-display text-lg font-medium tracking-tight">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <NavLink key={item.href} to={item.href} end={item.href === '/'} className={linkClass}>
              {item.name}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="-mr-2 rounded-full p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-medium ${
                    isActive ? 'bg-accent-tint text-accent' : 'text-ink'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
