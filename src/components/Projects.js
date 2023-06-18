import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import mytest from "../assets/img/mytest.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Gamezz",
      description:
        "Recreating rawg.io's landing page with React, TypeScript, and Chakra UI, showcasing a visually appealing interface and dynamic game data.",
      imgUrl: mytest,
    },
    {
      title: "TOPE",
      description:
        "share social media posts across multiple platforms with 1 click. Created with python, flask, mySql",
      imgUrl: projImg2,
    },
    {
      title: "UpVotes",
      description:
        "An application that allows Users to suggest new features for a product offering, upvote, and downvote other features suggested by other users for other products",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <h2>Projects</h2>
                  <p>
                    My projects and the different tech stacks for each project
                    are displayed below. Each project opens in a new window
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  );
};
