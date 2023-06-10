import React from "react";
import { PortfolioItem } from "../../models/portfolio";
import { Anchor, Col, Image } from "react-bootstrap";
import PortfolioModal from "./PortfolioModal";
interface PortfolioElementProps {
    portfolioItem: PortfolioItem;
}
const PortfolioElement = ({portfolioItem}: PortfolioElementProps) => {
 const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleClick = () => {
    setIsModalVisible(true);
  };
  return (
    <Col lg={4} sm={6}>
      <Anchor className="portfolio-box">
        <Image
          className="img-fluid"
          src={portfolioItem.mainImage}
          onClick={() => handleClick()}
          alt=""
        />
        <div className="portfolio-box-caption">
          <div className="project-category text-white-50">WNĘTRZA</div>
          <div className="project-name">
            Projekt gabinetu w domu jednorodzinnym na Śląsku
          </div>
        </div>
      </Anchor>
      <PortfolioModal portfolio={portfolioItem} show={isModalVisible} />
    </Col>
  );
};

export default PortfolioElement;
