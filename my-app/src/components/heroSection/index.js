
const HeroSection = () => {
  return (
    <section class="home" id="home">
      <div class="content">
        <span data-aos="fade-up" data-aos-delay="150">
          Hi, I'am <span className="Name">Baha'</span>
        </span>
        <h3 data-aos="fade-up" data-aos-delay="300">
          Full Stack Web Developer
        </h3>
    
        {/* <p data-aos="fade-up" data-aos-delay="450">
          {" "}
          I change my career from civil engineer to Full-stack developer because I find myself in this field, I love challenges and always look forward
          to learning new skills
        </p> */}
        <a data-aos="fade-up" data-aos-delay="600" href="#" class="btn" id="btn1">
          Contact
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
