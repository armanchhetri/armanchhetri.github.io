import { projects } from '../content';
import Section from './Section';

const Projects = () => {
  return (
    <Section id="projects" kicker="04" title="Projects">
      <div className="space-y-10">
        {projects.map((project) => (
          <article key={project.title} className="max-w-3xl">
            <h3 className="font-serif text-xl font-semibold text-ink">{project.title}</h3>
            <ul className="mt-4 space-y-2 text-[0.97rem] leading-relaxed text-ink-muted">
              {project.description.map((desc) => (
                <li key={desc} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.55rem] h-1 w-1 flex-shrink-0 rounded-full bg-ink-faint" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
