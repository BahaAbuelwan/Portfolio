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
import { SiMongodb } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiMsqlServer } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

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
          <a>
            <AiFillHtml5 />
          </a>

          <h5>HTML</h5>
        </div>
        <div
          className="cards"
          data-aos="flip-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <a>
            <FaCss3Alt />
          </a>

          <h5>CSS</h5>
        </div>
        <div
          className="cards"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <a>
            <SiJavascript />
          </a>

          <h5>JavaScript</h5>
        </div>
        <div
          className="cards"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <a>
            <SiJquery />
          </a>

          <h5>JQuery</h5>
        </div>
        <div
          className="cards"
          data-aos="flip-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <a>
            <FaNodeJs />
          </a>

          <h5>Node.JS</h5>
        </div>
        <div
          className="cards"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <a>
            <SiExpress />
          </a>

          <h5>Express.JS</h5>
        </div>
        <div
          className="cards"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <a>
            <SiSocketdotio />
          </a>

          <h5>Socket.IO</h5>
        </div>
        <div
          className="cards"
          data-aos="flip-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <a>
            <DiMysql />
          </a>

          <h5>MySQL</h5>
        </div>
        <div
          className="cards"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <a>
            <SiMongodb />
          </a>

          <h5>MongoDB</h5>
        </div>
        <div
          className="cards"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <a>
            <DiMsqlServer />
          </a>

          <h5>SQLServer</h5>
        </div>
        <div
          className="cards"
          data-aos="flip-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <a>
            <DiReact />
          </a>

          <h5>React.JS</h5>
        </div>
        <div
          className="cards"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <a>
            <SiRedux />
          </a>

          <h5>Redux</h5>
        </div>
        <div
          className="cards"
          data-aos="flip-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <a>
            <AiFillGithub />
          </a>

          <h5>Git and GitHub</h5>
        </div>
      </section>
    </div>
  );
};

export default Skills;
