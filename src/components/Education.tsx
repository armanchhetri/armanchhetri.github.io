import { education } from '../content';
import Section from './Section';

const Education = () => {
  return (
    <Section id="education" kicker="02" title="Education">
      <div className="space-y-10">
        {education.map((edu) => (
          <article key={edu.degree} className="grid gap-3 md:grid-cols-[13.5rem_minmax(0,1fr)] md:gap-10">
            <p className="text-sm font-medium text-ink-muted md:pt-1">{edu.period}</p>
            <div>
              <h3 className="font-serif text-xl font-semibold text-ink">{edu.degree}</h3>
              <p className="mt-1 text-[0.95rem] text-ink-muted">{edu.institution}</p>
              <p className="text-sm text-ink-faint">{edu.location}</p>
              <ul className="mt-4 space-y-2 text-[0.97rem] leading-relaxed text-ink-muted">
                {edu.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.55rem] h-1 w-1 flex-shrink-0 rounded-full bg-ink-faint" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Education;
