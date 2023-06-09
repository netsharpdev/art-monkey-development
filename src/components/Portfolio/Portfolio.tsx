import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const Portfolio = () => {
  const handleClick = (portfolioItemId: string) => {
    // TODO: Open modal with portfolio item
  };

  return (
    <section id="portfolio">
      <Container className="fluid p-0">
        <h2 className="text-center mt-0">PORTFOLIO</h2>
        <hr className="divider my-4" />
        <Row className="no-gutters">
          <Col lg={4} sm={6}>
            <a
              className="portfolio-box"
              data-toggle="modal"
              href="#portfolioModal1"
            >
              <Image
                className="img-fluid"
                src="Image/portfolio/thumbnails/gabinet_b.jpg"
                onClick={() => handleClick("gabinet_b")}
                alt=""
              />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">WNĘTRZA</div>
                <div className="project-name">
                  Projekt gabinetu w domu jednorodzinnym na Śląsku
                </div>
              </div>
            </a>
          </Col>
          <Col lg={4} sm={6}>
            <a
              className="portfolio-box"
              data-toggle="modal"
              href="#portfolioModal2"
            >
              <Image
                className="img-fluid"
                src="Image/portfolio/thumbnails/m3_salon.jpg"
                alt=""
              />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">WNĘTRZA</div>
                <div className="project-name">Salon z aneksem - M3 Kraków</div>
              </div>
            </a>
          </Col>
          <Col lg={4} sm={6}>
            <a
              className="portfolio-box"
              data-toggle="modal"
              href="#portfolioModal3"
            >
              <Image
                className="img-fluid"
                src="Image/portfolio/thumbnails/m3_lazienka.jpg"
                alt=""
              />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">WNĘTRZA</div>
                <div className="project-name">Łazienka - M3 Kraków</div>
              </div>
            </a>
          </Col>
          <Col lg={4} sm={6}>
            <a
              className="portfolio-box"
              data-toggle="modal"
              href="#portfolioModal4"
            >
              <Image
                className="img-fluid"
                src="Image/portfolio/thumbnails/salon_01.jpg"
                alt=""
              />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">WNĘTRZA</div>
                <div className="project-name">Salon - Warszawa</div>
              </div>
            </a>
          </Col>
          <Col lg={4} sm={6}>
            <a
              className="portfolio-box"
              data-toggle="modal"
              href="#portfolioModal5"
            >
              <Image
                className="img-fluid"
                src="Image/portfolio/thumbnails/biuro_02.jpg"
                alt=""
              />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">WNĘTRZA</div>
                <div className="project-name">Gabinet - Warszawa</div>
              </div>
            </a>
          </Col>
          <Col lg={4} sm={6}>
            <a
              className="portfolio-box"
              data-toggle="modal"
              href="#portfolioModal6"
            >
              <Image
                className="img-fluid"
                src="Image/portfolio/thumbnails/laz_d.jpg"
                alt=""
              />
              <div className="portfolio-box-caption p-3">
                <div className="project-category text-white-50">WNĘTRZA</div>
                <div className="project-name">Łazienka - Warszawa</div>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
