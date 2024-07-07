import Fancybox from "../Templates/Fancybox/Fancybox";

export default function ProjectCard(props) {
  return (
    <div className={"art-grid-item" + (props.class || "")}>
      {/* project image */}
      <Fancybox>
        <a
          data-fancybox="projects"
          // href={process.env.PUBLIC_URL + props.project.images[0]}
          href={props.project.images[0]}
          className={"art-a art-portfolio-item-frame art-square"}
        >
          {/* <img src={process.env.PUBLIC_URL + props.project.images[0]} alt='item'></img> */}
          <img src={props.project.images[0]} alt="item"></img>
          <span className="art-item-hover">
            <i className="fas fa-expand"></i>
          </span>
        </a>
      </Fancybox>
      {/* project description */}
      <div className="art-item-description">
        {/* title */}
        <h5 className="mb-15">{props.project.title}</h5>
        {/* overview */}
        <div className="mb-15">{props.project.overview}</div>
        {/* tags */}
        <div className="mb-15">
          {props.project.tags.map((t) => (
            <p key={t} className="art-tag">
              {t}
            </p>
          ))}
        </div>

        {/* link */}
        <a
          href={props.project.url}
          className="art-link art-color-link art-w-chevron"
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
