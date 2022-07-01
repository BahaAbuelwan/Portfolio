import "./style.css"


const HeroSection = () => {
  return (
    <section class="home" id="home">
      <div class="content">
        <span data-aos="fade-up" data-aos-delay="150">
          Hi, I'am <span className="Name">Baha'</span>
        </span>
        <h3 id="titlesss" data-aos="fade-up" data-aos-delay="300">
          Full Stack Web Developer
        </h3>
    
        {/* <p data-aos="fade-up" data-aos-delay="450">
          {" "}
          I change my career from civil engineer to Full-stack developer because I find myself in this field, I love challenges and always look forward
          to learning new skills
        </p> */}
        
        <ul class="social-icons">
          {/* <li>
            <a href="mailto:baha.abuellwan@gmail.com" target="_blank">
            <i class="fa fa-envelope"></i>
            </a>
          </li> */}
          <li>
            <a href="https://github.com/BahaAbuelwan" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bahaabuelwan/" target="_blank">
            <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/baha_abuelwan/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <a data-aos="fade-up" data-aos-delay="600" href="mailto:baha.abuellwan@gmail.com" class="btn" id="btn1" target="_blank">
          Contact
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
