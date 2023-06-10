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
      <Container className="fluid p-0">
        <h2 className="text-center mt-0">PORTFOLIO</h2>
        <hr className="divider my-4" />
        <Row className="no-gutters">
          {portfolio.portfolioItems.slice(0, 6).map((item) => {
            return <PortfolioElement portfolioItem={item} />;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
