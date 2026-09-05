import { profile } from '../content';

const Footer = () => {
  return (
    <footer className="border-t border-rule/80 py-10">
      <div className="flex flex-col gap-4 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={`mailto:${profile.email}`} className="hover:text-ink">
            {profile.email}
          </a>
          <a
            href={profile.cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            CV (PDF)
          </a>
          <a href={profile.site} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            {profile.siteLabel}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
