import { skills } from '../content';
import Section from './Section';

const groups = [
  { title: 'Research', items: skills.research },
  { title: 'Languages', items: skills.languages },
  { title: 'Systems & Tools', items: skills.systems },
];

const Skills = () => {
  return (
    <Section id="skills" kicker="05" title="Skills">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="font-serif text-lg font-semibold text-ink">{group.title}</h3>
            <ul className="mt-4 space-y-2.5 text-[0.97rem] leading-relaxed text-ink-muted">
              {group.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
