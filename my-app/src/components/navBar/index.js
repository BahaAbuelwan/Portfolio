import Button from 'react-bootstrap/Button'
import "./style.css"
const NavBar=()=>{

    return(
        <header class="header">

        <div id="menu-btn" class="fas fa-bars"></div>
        
        <a data-aos="zoom-in-left" data-aos-delay="150" href="#" class="logo"> <i class="fas fa-paper-plane"></i>Baha' Abu-Elwan</a>
        
        <nav class="navbar">
            <a data-aos="zoom-in-left" data-aos-delay="300" href="#home">home</a>
            <a data-aos="zoom-in-left" data-aos-delay="450" href="#about">about</a>
            <a data-aos="zoom-in-left" data-aos-delay="600" href="#skills">Skills</a>
            <a data-aos="zoom-in-left" data-aos-delay="750" href="#projects">Projects</a>
            <a data-aos="zoom-in-left" data-aos-delay="900" href="#Footer">Contact</a>
            <Button className='Resume' variant="outline-primary"  data-aos="zoom-in-left" 
            href='https://onedrive.live.com/?cid=512061AFF0E92985&id=512061AFF0E92985%21123&parId=root&o=OneUp' 
            target="_blank"
            data-aos-delay="900">Resume</Button>{' '}
            
            
        </nav>
        
        </header>
    )
}

export default NavBar