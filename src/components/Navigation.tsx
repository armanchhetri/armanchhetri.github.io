import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, profile } from '../content';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule/70 bg-paper/90 backdrop-blur-md">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-sm">
        Skip to content
      </a>
      <nav className="page-wrap" aria-label="Primary">
        <div className="flex h-[4.25rem] items-center justify-between gap-4">
          <a href="#top" className="focus-ring font-serif text-lg font-semibold tracking-tight text-ink">
            {profile.name}
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`focus-ring rounded-sm px-2.5 py-1.5 text-[0.8rem] tracking-wide ${
                    isActive
                      ? 'font-semibold text-ink'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={profile.cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring ml-2 border border-navy px-3 py-1.5 text-[0.8rem] font-semibold tracking-wide text-navy hover:bg-navy hover:text-paper"
            >
              CV
            </a>
          </div>

          <button
            type="button"
            className="focus-ring -mr-1 p-2 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="border-t border-rule/80 pb-5 pt-2 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring block py-2.5 text-base text-ink-muted hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-3 inline-block border border-navy px-3 py-1.5 text-sm font-semibold text-navy"
            >
              CV (PDF)
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
