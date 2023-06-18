import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full-Stack Developer", "Data Engineer", "DevOps Engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='aligh-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <span className='tagline'>Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Temi`} <br />
                    <span
                      className='txt-rotate'
                      dataperiod='1000'
                      data-rotate='[ "Full-Stack Developer", "Data Engineer", "DevOps Engineer" ]'>
                      <span className='wrap'>{text}</span>
                    </span>
                  </h1>
                  <div>
                    <h3>Welcome to My Portfolio</h3>
                    <p>
                      Hi, I'm Temi, a passionate and skilled Full Stack
                      Web Developer. With a strong foundation in both front-end
                      and back-end development, I specialize in creating
                      interactive and user-friendly web applications.
                    </p>
                    <p>
                      I have experience working with modern technologies and
                      frameworks such as HTML5, CSS3, JavaScript, React.js,
                      Node.js, and Spring. I am also proficient in database
                      management using SQL and MongoDB.
                    </p>
                    <p>
                      Throughout my career, I have successfully delivered
                      high-quality projects, collaborating with cross-functional
                      teams to bring innovative ideas to life. My goal is to
                      create impactful and efficient web solutions that meet
                      client needs and provide an exceptional user experience.
                    </p>
                    <p>
                      In addition to my technical skills, I possess excellent
                      problem-solving abilities, strong attention to detail, and
                      effective communication skills. I thrive in fast-paced
                      environments and continuously stay updated with the latest
                      industry trends and best practices.
                    </p>
                    <p>
                      Take a look at my portfolio below to explore some of the
                      projects I've worked on. If you have any questions or
                      would like to discuss potential collaborations, please
                      feel free to get in touch.
                    </p>
                  </div>

                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }>
                  <img src={headerImg} alt='Header Img' />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
