import { certifications } from '../content';
import Section from './Section';

const Certifications = () => {
  return (
    <Section id="certifications" kicker="06" title="Certifications">
      <ul className="divide-y divide-rule/80 border-y border-rule/80">
        {certifications.map((cert) => (
          <li key={cert} className="py-3.5 text-[0.97rem] text-ink">
            {cert}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Certifications;
