import * as React from "react";
import { useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
const Header = () => {
  const [isNavbarWhite, setIsNavbarWhite] = useState(false);
  const imageStyle = {
    height: "50px",
    marginRight: "10px",
  };

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setIsNavbarWhite(true);
    } else {
      setIsNavbarWhite(false);
    }
  };
  React.useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <Navbar
      id="mainNav"
      expand="lg"
      fixed="top"
      className={
        isNavbarWhite
          ? "py-3 navbar-light navbar-scrolled"
          : "py-3 navbar-light"
      }
    >
      <Container>
        <Navbar.Brand href="#page-top">
          <Image
            style={imageStyle}
            src="https://artmonkey.pl/img/1x/logo_1.png"
            alt="Art Monkey logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end" id="navbarResponsive">
          <Nav as="ul" className="ml-auto my-2 my-lg-0">
            <Nav.Item as="li">
              <Nav.Link href="#about">O mnie</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#services">Oferta</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#contact">Kontakt</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
