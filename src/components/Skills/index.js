import githubimage from "./images/30_github.c0a4dde53e.png";
import reduxImage from "./images/redux.svg";
import ReactImage from "./images/react-original.svg";
import mysqlImage from "./images/mysql.svg";
import html5Image from "./images/html5.svg";
import CSSImage from "./images/css.svg";
import JavaScriptImage from "./images/javascript.svg";
import JQueryImage from "./images/jquery-original.svg";
import NodeJSiMAGE from "./images/Node.js_logo.svg";
import SocketIo from "./images/Socket-io.svg";
import SqlImage from "./images/microsoft-sql-server-logo-svgrepo-com.svg";

import "./style.css";
const Skills = () => {
  return (
    <div className="skills">
      <h2
        className="Title"
        data-aos="zoom-out"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        Skills
      </h2>
      <section class="skills_container" id="skills">
        <div
          className="cards"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <img
            src={html5Image}
            style={{ backgroundColor: "white" }}
            alt="image"
            className="program_image"
          />

          <h5>HTML</h5>
        </div>
        <div
          className="cards"
          data-aos="flip-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <img
            src={CSSImage}
            style={{ backgroundColor: "white" }}
            alt="image"
            className="program_image"
          />

          <h5>CSS</h5>
        </div>
        <div
          className="cards"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <img src={JavaScriptImage} alt="image" className="program_image" />

          <h5>JavaScript</h5>
        </div>
        <div
          className="cards"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <img src={JQueryImage} alt="image" className="program_image" />

          <h5>JQuery</h5>
        </div>
        <div
          className="cards"
          data-aos="flip-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <img
            src={NodeJSiMAGE}
            style={{ backgroundColor: "white" }}
            alt="image"
            className="program_image"
          />

          <h5>Node.JS</h5>
        </div>
        <div
          className="cards"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <img
            src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
            style={{ backgroundColor: "white" }}
            alt="image"
            className="program_image"
          />

          <h5>Express.JS</h5>
        </div>
        <div
          className="cards"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <img src={SocketIo} alt="image" className="program_image" />

          <h5>Socket.IO</h5>
        </div>
        <div
          className="cards"
          data-aos="flip-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <img src={mysqlImage} alt="image" className="program_image" />

          <h5>MySQL</h5>
        </div>
        <div
          className="cards"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <img
            src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"
            alt="image"
            style={{ backgroundColor: "white" }}
            className="program_image"
          />

          <h5>MongoDB</h5>
        </div>
        <div
          className="cards"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <img src={SqlImage} alt="image" className="program_image" 
            style={{ backgroundColor: "white" }}
            />
          

          <h5>SQLServer</h5>
        </div>
        <div
          className="cards"
          data-aos="flip-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <img src={ReactImage} className="program_image" />

          <h5>React.JS</h5>
        </div>
        <div
          className="cards"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <img src={reduxImage} alt="image" className="program_image" />

          <h5>Redux</h5>
        </div>
        <div
          className="cards"
          data-aos="flip-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <img src={githubimage} alt="image" className="program_image" />

          <h5>Git and GitHub</h5>
        </div>
      </section>
    </div>
  );
};

export default Skills;
