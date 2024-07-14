import Fancybox from "../Templates/Fancybox/Fancybox";

export default function ProjectCard(props) {
  return (
    <div className={"art-grid-item" + (props.class || "")}>
      {/* project image */}
      <Fancybox>
        <a
          data-fancybox="projects"
          href={props.project.images}
          className={"art-a art-portfolio-item-frame art-square"}
        >
          <img src={props.project.images} alt="item"></img>
          <span className="art-item-hover">
            <i className="fas fa-expand"></i>
          </span>
        </a>
      </Fancybox>
      <div className="art-item-description">
        <div className="d-flex gap-5 justify-content-between">
          <h5 className="mb-15">{props.project.title}</h5>
          <a
            href={props.project.url}
            className="art-link art-color-link art-w-chevron"
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        </div>
        {/* <div className="mb-15">{props.project.overview}</div> */}
        <div className="mb-0">
          {props.project.tags.map((t) => (
            <p key={t} className="art-tag">
              {t}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
