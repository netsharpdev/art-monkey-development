import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const ContactMe = () => {
  return (
    <section className="page-section bg-dark" id="contact">
      <Container>
        <Row className="justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mt-0 text-muted">Skontaktuj się ze mną!</h2>
            <hr className="divider my-4" />
            <p className="text-muted mb-5">
              Jeśli masz pytania, potrzebujesz fachowej porady, lub chcesz
              omówić warunki współpracy - zadzwoń lub napisz wiadomość.
            </p>
          </div>
        </Row>
        <Row className="justify-content-center">
          <Col lg={4} className="ml-auto text-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="fa-3x mb-3 text-muted"
            ></FontAwesomeIcon>
            <a
              className="d-block"
              style={{ textDecoration: "none" }}
              href="tel:+48 501 869 124"
            >
              +48 501 869 124
            </a>
          </Col>
          <Col lg={4} className="mr-auto text-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="fa-3x mb-3 text-muted"
            ></FontAwesomeIcon>
            <a
              style={{ textDecoration: "none" }}
              className="d-block"
              href="mailto:studio@artmonkey.pl"
            >
              studio@artmonkey.pl
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactMe;
