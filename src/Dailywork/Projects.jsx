import { projects, socials } from '../Data';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const github = socials.find((s) => s.name === 'GitHub');

  return (
    <>
      <PageHeader eyebrow="Projects" title="Things I've built">
        <p>
          A mix of AI agents, machine learning and hardware projects. More experiments live on{' '}
          <a href={github.href} target="_blank" rel="noopener noreferrer" className="link">GitHub</a>.
        </p>
      </PageHeader>
      <section className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </>
  );
}

export default Projects;
