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
            <img src={ecmaImage} alt="ecmaImage" onClick={()=>{
               window.open("https://ecmashop.netlify.app/");
            }} />
          </div>
          <div class="content">
            <h3>ECMA SHOP E-COMMERCE</h3>
            <p><span className="Arrow" ><DiCode/></span>
            An online store for selling home appliances.
Developed to enhance the online shopping experience
with a user-friendly interface, where users can easily
browse items, add them to a shopping cart, select the
payment method, and evaluate the products. Also, it
has an attractive admin dashboard to manage the
entire website
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
            <img src={DevaImage} alt="devaImage" onClick={()=>{
               window.open("https://deva-shop.netlify.app/");
            }}/>
          </div>
          <div class="content">
            <h3>DEVA SHOP E-COMMERCE</h3>
            <p><span className="Arrow" ><DiCode/></span>
            An online computer store offering a variety of
computer systems and accessories.
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
                <a href="https://deva-shop.netlify.app/" target="_blank">
                  <i class="fa fa-globe"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
            <img src={BahaMoves} alt="moves image" onClick={()=>{
               window.open("https://bahaa-movies.netlify.app/");
            }}/>
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