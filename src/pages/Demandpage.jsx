
import React from "react";
import { Container, Row, Col } from "reactstrap";
import SideImage from "../assets/images/sideImage.jpg";
import '../Styles/demandPage.css';

const DemandPage = () => {
  return (
    <div className="demand__container" id="demandPage">
      <Container fluid>
        <Row>
          <Col xl={6} lg={6} md={6} xs={12} sm={12} className="side-image-col">
            <div className="side-image">
              <img
                src={SideImage}
                alt="YourImage"
                className="demand-img"
              />
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} xs={12} sm={12} className="content-col">
            <div className="demand-content">
              <p>Demand more from your website</p>
              <p>and social media</p>
              <div className="description">
                Because they can and will do more for your company. All you need
                is the right digital marketing specialist to unlock your
                website's full potential.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DemandPage;
