import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <section className="page-section bg-primary" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="text-white mt-0">KIM JEST ART MONKEY?</h2>
            <hr className="divider light my-4" />
            <p className="text-white mb-4">
              Witaj! Nazywam się Robert Pindel i prowadzę autorską pracownię
              projektową Art Monkey Creative Studio. Zanim do tego doszło,
              zdobywałem doświadczenie w biurach architektonicznych przy
              projektach małych i dużych - od domów jednorodzinnych po galerie
              handlowe, a także jako konstruktor mebli w zakładach stolarskich.
              Pracownia Art Monkey powstała z miłości do funkcjonalnych
              przestrzeni, pięknych form i urzekających detali. Projektuję
              wnętrza, meble i małą architekturę. Dzięki współpracy ze
              specjalistami róznych branż mogę zaoferować szeroki wachlarz usług
              i doradztwa w zakresie projektowania przestrzeni mieszkalnych,
              biurowych oraz usługowych.
            </p>

            <p className="text-white mb-4">
              Wykorzystując swoją wiedzę i doświadczenie pomogę Ci przejść bez
              nerwów i stresu przez cały proces projektowania wnętrza od
              pierwszego szkicu po wykończenie.
            </p>

            <p className="text-white mb-4">Zapraszam do współpracy!</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
