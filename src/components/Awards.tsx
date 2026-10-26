import { awards } from '../content';
import Section from './Section';

const Awards = () => {
  return (
    <Section id="awards" kicker="02" title="Awards & Honors">
      <ul className="space-y-0">
        {awards.map((award) => (
          <li
            key={`${award.title}-${award.date}`}
            className="grid gap-4 border-b border-rule/70 py-7 first:pt-0 last:border-b-0 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-8"
          >
            <p className="font-serif text-lg text-ink-faint sm:pt-1">{award.date}</p>
            <div>
              <h3 className="font-serif text-xl font-semibold leading-snug text-ink sm:text-[1.35rem]">
                {award.title}
              </h3>
              <p className="mt-1 text-[0.95rem] italic text-ink-muted">{award.venue}</p>
              <p className="mt-2 text-[0.95rem] text-ink-muted">{award.details}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Awards;
