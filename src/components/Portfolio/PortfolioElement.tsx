import React from "react";
import { PortfolioItem } from "../../models/portfolio";
import { Anchor, Col, Image } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
interface PortfolioElementProps {
  portfolioItem: PortfolioItem;
}
const PortfolioElement = ({ portfolioItem }: PortfolioElementProps) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleClick = () => {
    setIsModalVisible(true);
  };
  return (
    <>
      <Col lg={4} sm={6}>
        <Anchor className="portfolio-box" onClick={() => handleClick()}>
          <Image className="img-fluid" src={portfolioItem.mainImage} alt="" />
          <div className="portfolio-box-caption">
            <div className="project-category text-white-50">WNĘTRZA</div>
            <div className="project-name">{portfolioItem.title}</div>
          </div>
        </Anchor>
      </Col>
      <Lightbox
        open={isModalVisible}
        plugins={[Thumbnails]}
        close={() => setIsModalVisible(false)}
        slides={portfolioItem.images.map((image) => {
          return {
            src: image,
          };
        })}
      ></Lightbox>
    </>
  );
};

export default PortfolioElement;
