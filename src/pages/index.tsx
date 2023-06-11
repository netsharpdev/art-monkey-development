import * as React from "react";
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby";
import Header from "../components/Header";
import Hero from "../components/Hero";
import "../styles/artmonkey.scss";
import About from "../components/About";
import Services from "../components/Services";
import ContactMe from "../components/ContactMe";
import { Container } from "react-bootstrap";
import Portfolio from "../components/Portfolio/Portfolio";
import { PortfolioModel } from "../models/portfolio";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const query = graphql`
  query portfolios {
    contentfulPortfolio(id: { eq: "2fb9b556-4ec4-56f5-bbdd-98dc437446fb" }) {
      portfolioItems {
        title
        id
        mainImage {
          url
        }
        images {
          url
        }
      }
    }
    contentfulPageData {
      logo {
        url
      }
    }
  }
`;

const IndexPage: React.FC<PageProps> = () => {
  const { contentfulPortfolio, contentfulPageData } = useStaticQuery(query);
  const portfolioData = new PortfolioModel();
  portfolioData.portfolioItems = contentfulPortfolio.portfolioItems.map(
    (item: any) => {
      return {
        id: item.id,
        title: item.title,
        mainImage: item.mainImage.url,
        images: item.images.map((image: any) => image.url),
      };
    }
  );
  const date = new Date();
  const copyrightText =
    "Copyright &copy; " + date.getFullYear() + " - Art Monkey Creative Studio";
  return (
    <>
      <Header logo={contentfulPageData.logo.url}></Header>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Portfolio portfolio={portfolioData}></Portfolio>
      <ContactMe></ContactMe>
      <footer className="bg-light py-5">
        <Container>
          <div
            className="small text-center text-muted"
            id="copyRightText"
            dangerouslySetInnerHTML={{ __html: copyrightText }}
          ></div>
        </Container>
      </footer>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Art Monkey Creative Studio | Projektowanie wnętrz i mebli</title>
);
