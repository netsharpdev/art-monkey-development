import React from "react";
import { Container, Row } from "react-bootstrap";
import { PortfolioModel } from "../../models/portfolio";
import PortfolioElement from "./PortfolioElement";
interface PortfolioProps {
  portfolio: PortfolioModel;
}
const Portfolio = ({ portfolio }: PortfolioProps) => {
  return (
    <section id="portfolio">
      <Container fluid className="p-0" style={{ maxWidth: "1920px" }}>
        <h2 className="text-center mt-0">PORTFOLIO</h2>
        <hr className="divider my-4" />
        <Row className="g-0">
          {portfolio.portfolioItems.slice(0, 6).map((item) => {
            return <PortfolioElement portfolioItem={item} />;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
