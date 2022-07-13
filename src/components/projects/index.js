import { DiCode } from "react-icons/di";
import ecmaImage from "./images/ECMASHOP.png";
import BahaMoves from "./images/BahaMoves.png";
import DevaImage from "./images/DevaImage.jpg";



import "./style.css";
const Project = () => {
  return (
    <section class="projects" id="projects">
      <div class="heading">
        {/* <span>Projects</span> */}
        <h1>Projects Done With JavaScript</h1>
      </div>

      <div class="box-container">
        <div class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
            <img src={ecmaImage} alt="ecmaImage" />
          </div>
          <div class="content">
            <h3>ECMA SHOP E-COMMERCE</h3>
            <p><span className="Arrow" ><DiCode/></span>
              A website that allows people to buy and sell physical goods over
              the internet rather than at a brick-and-mortar location.
              <br /><span className="Arrow" ><DiCode/></span>
              Technologies: React.js, Node.js, Redux, MySQL, and Express.JS
              framework.
            </p>
            <ul class="social-icons">
              <li>
                <a href="https://github.com/ECMA-Team/MERAKI_Academy_Project_5" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
              <a href="https://ecmashop.netlify.app/" target="_blank">
                  <i class="fa fa-globe"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
            <img src={DevaImage} alt="devaImage" />
          </div>
          <div class="content">
            <h3>DEVA SHOP E-COMMERCE</h3>
            <p><span className="Arrow" ><DiCode/></span>
              A website that allows people to buy and sell physical goods over
              the internet rather than at a brick-and-mortar location.
              <br /><span className="Arrow" ><DiCode/></span>
              Technologies: React.js, Node.js, MongoDB, and Express.JS
              framework.
            </p>
            <ul class="social-icons">
              <li>
                <a href="https://github.com/C5-BahaAbuelwan/MERAKI_Academy_Project_4" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-globe"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
            <img src={BahaMoves} alt="moves image" />
          </div>
          <div class="content">
            <h3>Baha' MOVIES</h3>
            <p><span className="Arrow" ><DiCode/></span>
              Website to review and evaluate world films.
              <br /><span className="Arrow" ><DiCode/></span>Technologies: HTML, CSS, JS (ES6) and jQuery
            </p>
            <ul class="social-icons">
              <li>
                <a href="https://github.com/C5-BahaAbuelwan/MERAKI_Academy_Project_2" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://bahaa-movies.netlify.app/" target="_blank">
                  <i class="fa fa-globe"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Project;

/*  <ul class="social-icons">
          <li>
            <a href="#">
              <i class="fab fa-whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-snapchat"></i>
            </a>
          </li>
        </ul> */