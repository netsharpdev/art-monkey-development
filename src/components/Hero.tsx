import * as React from "react";
import { Anchor, Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <header className="masthead">
      <Container className="h-100">
        <Row className="h-100 align-items-center justify-content-center text-center">
          <Col lg={10} className="align-self-end">
            <h1 className="h1 text-uppercase text-white font-weight-bold text-center">
              PROJEKTY WNĘTRZ
            </h1>
            <h1 className="h1 text-uppercase text-white font-weight-bold">
              FOTOREALISTYCZNE WIZUALIZACJE
            </h1>
            <h1 className="h1 text-uppercase text-white font-weight-bold">
              PROJEKTY MEBLI
            </h1>
            <hr className="divider my-4" />
          </Col>
          <Col lg={8} className="align-self-baseline">
            <p className="text-white-75 font-weight-light mb-5">
              <i>"Wolność pochodzi z wnętrza"</i> - Frank Lloyd Wright
            </p>
            <Anchor className="btn btn-primary btn-xl" href="#about">
              Dowiedz się więcej!
            </Anchor>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
export default Hero;
