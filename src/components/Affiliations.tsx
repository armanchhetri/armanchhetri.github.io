import { affiliations } from '../content';
import Section from './Section';

const Affiliations = () => {
  return (
    <Section id="affiliations" kicker="07" title="Affiliations">
      <ul className="space-y-8">
        {affiliations.map((affiliation) => (
          <li key={affiliation.organization} className="grid gap-1 sm:grid-cols-[13.5rem_minmax(0,1fr)] sm:gap-10">
            <p className="text-sm font-medium text-ink-muted">
              {affiliation.year
                ? String(affiliation.year)
                : affiliation.period ?? ''}
            </p>
            <div>
              <h3 className="font-serif text-xl font-semibold text-ink">
                {affiliation.organization}
              </h3>
              {affiliation.roles && (
                <ul className="mt-2 space-y-1 text-[0.97rem] text-ink-muted">
                  {affiliation.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Affiliations;
