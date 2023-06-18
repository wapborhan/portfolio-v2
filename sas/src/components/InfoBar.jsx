import React from "react";
import Img from "./../assets/img/face-1.jpg";

const InfoBar = () => {
  return (
    <div className="art-info-bar">
      <div className="art-info-bar-frame">
        <div className="art-info-bar-header">
          <div className="art-info-bar-btn">
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>

        <div className="art-header">
          <div className="art-avatar">
            <a
              data-fancybox="avatar"
              data-no-swup
              href={Img}
              className="art-avatar-curtain"
            >
              <img src={Img} alt="avatar" />
              <i className="fas fa-expand"></i>
            </a>
            <div className="art-lamp-light">
              {/* <!-- add className 'art-not-available' if not available--> */}
              <div className="art-available-lamp"></div>
            </div>
          </div>
          <h5 className="art-name mb-10">
            <a href="home.html">Borhan Uddin</a>
          </h5>
          <div className="art-sm-text">
            Front-end Deweloper <br />
            Ui/UX Designer,{" "}
          </div>
        </div>

        <div id="scrollbar2" className="art-scroll-frame">
          <div className="art-table p-15-15">
            <ul>
              <li>
                <h6>Residence:</h6>
                <span>Canada</span>
              </li>
              <li>
                <h6>City:</h6>
                <span>Toronto</span>
              </li>
              <li>
                <h6>Age:</h6>
                <span>26</span>
              </li>
            </ul>
          </div>

          <div className="art-ls-divider"></div>

          <div className="art-lang-skills p-30-15">
            <div className="art-lang-skills-item">
              <div id="circleprog1" className="art-cirkle-progress"></div>
              <h6>French</h6>
            </div>

            <div className="art-lang-skills-item">
              <div id="circleprog2" className="art-cirkle-progress"></div>
              <h6>English</h6>
            </div>

            <div className="art-lang-skills-item">
              <div id="circleprog3" className="art-cirkle-progress"></div>
              <h6>Spanish</h6>
            </div>
          </div>

          <div className="art-ls-divider"></div>

          <div className="art-hard-skills p-30-15">
            <div className="art-hard-skills-item">
              <div className="art-skill-heading">
                <h6>html</h6>
              </div>
              <div className="art-line-progress">
                <div id="lineprog1"></div>
              </div>
            </div>

            <div className="art-hard-skills-item">
              <div className="art-skill-heading">
                <h6>CSS</h6>
              </div>
              <div className="art-line-progress">
                <div id="lineprog2"></div>
              </div>
            </div>

            <div className="art-hard-skills-item">
              <div className="art-skill-heading">
                <h6>Js</h6>
              </div>
              <div className="art-line-progress">
                <div id="lineprog3"></div>
              </div>
            </div>

            <div className="art-hard-skills-item">
              <div className="art-skill-heading">
                <h6>PHP</h6>
              </div>
              <div className="art-line-progress">
                <div id="lineprog4"></div>
              </div>
            </div>

            <div className="art-hard-skills-item">
              <div className="art-skill-heading">
                <h6>Wordpress</h6>
              </div>
              {/* <!-- progressbar frame --> */}
              <div className="art-line-progress">
                {/* <!-- progressbar --> */}
                <div id="lineprog5"></div>
              </div>
              {/* <!-- progressbar frame end --> */}
            </div>
            {/* <!-- skill end --> */}
          </div>
          {/* <!-- language skills end --> */}

          {/* <!-- divider --> */}
          <div className="art-ls-divider"></div>

          {/* <!-- knowledge list --> */}
          <ul className="art-knowledge-list p-15-0">
            {/* <!-- list item --> */}
            <li>Bootstrap, Materialize</li>
            {/* <!-- list item --> */}
            <li>Stylus, Sass, Less</li>
            {/* <!-- list item --> */}
            <li>Gulp, Webpack, Grunt</li>
            {/* <!-- list item --> */}
            <li>GIT knowledge</li>
          </ul>
          {/* <!-- knowledge list end --> */}

          {/* <!-- divider --> */}
          <div className="art-ls-divider"></div>

          {/* <!-- links frame --> */}
          <div className="art-links-frame p-15-15">
            {/* <!-- download cv button --> */}
            <a href="files/cv.txt" className="art-link" download data-no-swup>
              Download cv <i className="fas fa-download"></i>
            </a>
          </div>
          {/* <!-- links frame end --> */}
        </div>
        {/* <!-- scroll frame end --> */}

        {/* <!-- sidebar social --> */}
        <div className="art-ls-social">
          {/* <!-- social link --> */}
          <a href="#." target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
          {/* <!-- social link --> */}
          <a href="#." target="_blank">
            <i className="fab fa-dribbble"></i>
          </a>
          {/* <!-- social link --> */}
          <a href="#." target="_blank">
            <i className="fab fa-behance"></i>
          </a>
          {/* <!-- social link --> */}
          <a href="#." target="_blank">
            <i className="fab fa-github"></i>
          </a>
          {/* <!-- social link --> */}
          <a href="#." target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        {/* <!-- sidebar social end --> */}
      </div>
      {/* <!-- menu bar frame end --> */}
    </div>
  );
};

export default InfoBar;
