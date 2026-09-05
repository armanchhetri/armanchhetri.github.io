import { FileText, Github, Globe, Linkedin, Mail } from 'lucide-react';
import { profile } from '../content';

const Header = () => {
  const contacts = [
    { href: profile.site, label: profile.siteLabel, icon: Globe, external: true },
    { href: `mailto:${profile.email}`, label: profile.email, icon: Mail, external: false },
    { href: profile.linkedin, label: 'LinkedIn', icon: Linkedin, external: true },
    { href: profile.github, label: 'GitHub', icon: Github, external: true },
    { href: profile.cvHref, label: 'CV (PDF)', icon: FileText, external: true },
  ];

  return (
    <section className="border-b border-rule/80 py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:gap-16">
        <div>
          <p className="section-kicker">Rochester Institute of Technology</p>
          <h1 className="font-serif text-[2.65rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-lg text-ink sm:text-xl">{profile.role}</p>
          <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-ink-muted">
            {profile.affiliation}
          </p>
        </div>

        <div className="border-t border-rule/80 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <p className="section-kicker">Research</p>
          <p className="max-w-xl font-serif text-xl leading-snug text-ink sm:text-[1.35rem]">
            {profile.research}
          </p>
          <p className="mt-5 text-sm text-ink-muted">Advisor: {profile.advisor}</p>
        </div>
      </div>

      <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-rule/80 pt-6 text-sm text-ink-muted">
        {contacts.map(({ href, label, icon: Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              className="focus-ring inline-flex items-center gap-2 hover:text-ink"
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Icon size={16} strokeWidth={1.6} aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Header;
