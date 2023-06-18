import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} />
        <div className='proj-txtx'>
          <h5>{title}</h5>
          <span>{description}</span>
          <div>
            <a href='https://www.google.com' target='_blank'>
              link to project
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
