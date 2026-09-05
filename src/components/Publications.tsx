import { publications } from '../content';
import Section from './Section';

const Publications = () => {
  return (
    <Section id="publications" kicker="01" title="Publications">
      <ol className="space-y-0">
        {publications.map((pub) => (
          <li
            key={pub.doi ?? pub.title}
            className="grid gap-4 border-b border-rule/70 py-7 first:pt-0 last:border-b-0 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-8"
          >
            <p className="font-serif text-lg text-ink-faint sm:pt-1">{pub.year}</p>
            <div>
              <h3 className="font-serif text-xl font-semibold leading-snug text-ink sm:text-[1.35rem]">
                {pub.title}
              </h3>
              {pub.authors && (
                <p className="mt-2 text-[0.95rem] text-ink-muted">{pub.authors}</p>
              )}
              <p className="mt-1 text-[0.95rem] italic text-ink-muted">{pub.venue}</p>
              {pub.doi && (
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link mt-3 inline-block text-sm"
                >
                  DOI: {pub.doi}
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Publications;
