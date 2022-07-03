import "./style.css"
const Footer = () => {
  return (
    <section class="Footer" id="Footer">
      <h2
        className="Title"
        data-aos="zoom-out"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        Contact 
      </h2>
      <br/>
      <br/>
      <div className="Contact_holder">
        <div className="Contact_div" 
        data-aos="zoom-out"
        data-aos-delay="200"
        data-aos-duration="1500">
        <a href="https://www.freeiconspng.com/img/106" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/communication-email-2-icon-7.png" width="150" alt="Communication email 2 icon" /></a>
            <p className="title_Footer">bahaa.buellwan@gmail</p>
            <a data-aos="fade-up" data-aos-delay="600" href="mailto:baha.abuellwan@gmail.com" class="btn" id="btn1" target="_blank">
          Contact
        </a>
        </div>


        <div className="Contact_div" data-aos="zoom-out"
        data-aos-delay="200"
        data-aos-duration="1500">
        <a href="https://www.freeiconspng.com/img/18717" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/aquicon-linkedin-icon-10.png" width="150" alt="aquicon linkedin icon" /></a>
            <p className="title_Footer">linkedin.com/in/bahaabuelwan/</p>
            <a data-aos="fade-up" data-aos-delay="600" href="https://www.linkedin.com/in/bahaabuelwan/" class="btn" id="btn1" target="_blank">
          Visit
        </a>
        </div>


        <div className="Contact_div" data-aos="zoom-out"
        data-aos-delay="200"
        data-aos-duration="1500">
        <a href="https://www.freeiconspng.com/img/31" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/logo-facebook-30.png" width="150" alt="logo facebook" /></a>
            <p className="title_Footer">Baha AbuElwan</p>
            <a data-aos="fade-up" data-aos-delay="600" href="https://www.facebook.com/bahaa.abuelwan" class="btn" id="btn1" target="_blank">
            Visit
        </a>
        </div>

        <div className="Contact_div" data-aos="zoom-out"
        data-aos-delay="200"
        data-aos-duration="1500">
       <a href="https://www.freeiconspng.com/img/931" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/chat-phone-icon--stark-iconset--fruityth1ng-10.png" width="150" alt="Chat Phone Icon | Stark Iconset | fruityth1ng" /></a>
            <p className="title_Footer">+962 791311532</p>
            <a data-aos="fade-up" data-aos-delay="600" href="https://www.linkedin.com/in/bahaabuelwan/" class="btn" id="btn1" target="_blank">
          Contact
        </a>
        </div>


      </div>
    </section>
  );
};


export default Footer