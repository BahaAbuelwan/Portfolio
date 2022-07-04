import image1 from "./images/kyle-sung-oQuP_XBjOMY-unsplash.jpg";

import personalPhoto from "./images/20220427_132425.jpg"

const About = () => {
  return (
    // <>
    // <div>
    //    <h1>About Baha'</h1> 
    // </div>
    
    
    
    
    <section class="about" id="about">
      <div class="video-container" data-aos="fade-right" data-aos-delay="300">
        <img src={personalPhoto} style={{aspectRatio:"1/0.7"}} alt="personalPhoto"/>

        {/* <img
          src="D:\MERAKI_Academy\Projects\PortFolio\Portfolio\my-app\image\kyle-sung-oQuP_XBjOMY-unsplash.jpg"
          class="video"
        ></img>
        <div class="controls">
          <span
            class="control-btn"
            data-src="../image/emile-perron-xrVDYZRGdw4-unsplash.jpg"
          ></span>
          <span class="control-btn" data-src="images/about-vid-2.mp4"></span>
          <span class="control-btn" data-src="images/about-vid-3.mp4"></span>
        </div>*/}
      </div>

      <div class="content" data-aos="fade-left" data-aos-delay="600">
        <span>About Baha'</span>
        {/* <h3>Nature's Majesty Awaits You</h3> */}
        <p>
          Because I believe that What you aim at determines what you see, I am
          eager to join a creative, problem-solving team that gives me the
          chance to turn ideas into something tangible.I love to see my ideas
          turn into web pages. It is an indescribably wonderful feeling. I like
          those web pages. I'm still enthusiastically grabbing onto any other
          programming languages, frameworks, or principles I can be added to my
          skills.
        </p>
      </div>
    </section>
    // </>
  );
};

export default About;
