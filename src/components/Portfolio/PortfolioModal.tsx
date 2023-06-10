import React from "react";
import { Col, Modal, Row, Image } from "react-bootstrap";
import { PortfolioItem } from "../../models/portfolio";
import LightGallery from 'lightgallery/react';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
type PortfolioModalProps = {
  show: boolean;
  portfolio: PortfolioItem;
};
const PortfolioModal = ({ portfolio, show }: PortfolioModalProps) => {
  return (
    <Modal show={show}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
             <LightGallery >
              <a href={portfolio.mainImage}><img src={portfolio.mainImage} height="200px" width="250px"></img></a>
              {portfolio.images.map((image)=>{ return <a href={image}></a>})}
             </LightGallery>
            </Col>
          </Row>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

export default PortfolioModal;
