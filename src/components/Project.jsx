import PropTypes from 'prop-types';

function Project({ project }) {
  return (
    <div className="project-div">
      <div className="top">
        <img src={project.image} alt="" />
      </div>
      <div className="bottom">
        <div className="project-info">
          <div className="project-title">{project.title}</div>
          <div className="project-links">
            <a href={project.githubLink}>
              <img src="/icons/github.svg" alt="" />
            </a>
            <a href={project.liveLink}>
              <img src="/icons/open.svg" alt="" />
            </a>
          </div>
        </div>
        <p>{project.description}</p>
        <p className="tech">{project.tech}</p>
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object,
};

export default Project;
