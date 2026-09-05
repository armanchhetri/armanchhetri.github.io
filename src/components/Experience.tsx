import { experiences } from '../content';
import Section from './Section';

const Experience = () => {
  return (
    <Section id="experience" kicker="03" title="Experience">
      <ol>
        {experiences.map((exp, index) => (
          <li
            key={`${exp.company}-${exp.role}-${exp.period}`}
            className="grid gap-2 py-8 first:pt-0 last:pb-0 md:grid-cols-[13.5rem_1.25rem_minmax(0,1fr)] md:gap-0"
          >
            <div className="md:pr-8 md:pt-0.5">
              <p className="text-sm font-medium text-ink-muted">{exp.period}</p>
              <p className="mt-1 text-sm text-ink-faint md:hidden">
                {exp.company} · {exp.location}
              </p>
            </div>

            <div
              aria-hidden="true"
              className="relative hidden md:flex md:flex-col md:items-center"
            >
              <span className="mt-1.5 h-2 w-2 rounded-full border border-navy bg-paper" />
              {index < experiences.length - 1 && (
                <span className="mt-2 w-px flex-1 bg-rule" />
              )}
            </div>

            <div className="md:pl-8">
              <h3 className="font-serif text-xl font-semibold text-ink">{exp.role}</h3>
              <p className="mt-1 hidden text-[0.95rem] text-ink-muted md:block">
                {exp.company} · {exp.location}
              </p>
              <ul className="mt-4 space-y-2 text-[0.97rem] leading-relaxed text-ink-muted">
                {exp.description.map((desc) => (
                  <li key={desc} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.55rem] h-1 w-1 flex-shrink-0 rounded-full bg-ink-faint" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
