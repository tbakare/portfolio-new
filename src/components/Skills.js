import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <div className='skills-container'>
                <div className='skills-column'>
                  <h3>Front-end </h3>
                  <ul className='skills-list'>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>React.js</li>
                    <li>Responsive Web Design</li>
                  </ul>
                </div>

                <div className='skills-column'>
                  <h3>Back-end </h3>
                  <ul className='skills-list'>
                    <li>Node.js</li>
                    <li>Spring</li>
                    <li>RESTful APIs</li>
                    <li>Database Design</li>
                    <li>Server Management</li>
                  </ul>
                </div>

                <div className='skills-column'>
                  <h3>Database</h3>
                  <ul className='skills-list'>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>Database Optimization</li>
                    <li>Data Modeling</li>
                  </ul>
                </div>

                <div className='skills-column'>
                  <h3>Programming Languages</h3>
                  <ul className='skills-list'>
                    <li>Java</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li></li>
                  </ul>
                </div>
              </div>

              <Carousel
                responsive={responsive}
                infinite={true}
                className='owl-carousel owl-theme skill-slider'>
                <div className='item'>
                  <img src={meter1} alt='Image' />
                  <h5>Web Development</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt='Image' />
                  <h5>DevOps</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='Image' />
                  <h5>Data Engineering</h5>
                </div>
                {/* <div className='item'>
                  <img src={meter1} alt='Image' />
                  <h5>Web Development</h5>
                </div> */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  );
};
