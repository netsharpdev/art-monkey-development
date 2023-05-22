import React from "react";
import { Col, Modal, Row, Image } from "react-bootstrap";
type PortfolioModalProps = {
  show: boolean;
  portfolio: PortfolioItem;
};
type PortfolioItem = {
  id: string;
  title: string;
  description: string;
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
            <Col lg={4} md={12}>
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <Image
                  src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                  className="w-100"
                />
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

export default PortfolioModal;
