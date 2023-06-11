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
  <>
    <title>Art Monkey Creative Studio | Projektowanie wnętrz i mebli</title>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta
      name="description"
      content="Art Monkey Creative Studio, to pracownia projektowa działająca w obszarze projektowania wnętrz oraz mebli i małej architektury."
    />
    <meta name="author" content="Art Monkey Creative Studio" />

    <meta
      property="og:image"
      content="https://images.ctfassets.net/1ebvt041pe6t/1fAOPWNDsd2oayrxcjObFg/229f41a7d7f634a7a431c58782f335b2/logo_1.png"
    />

    <meta
      name="facebook-domain-verification"
      content="6yjwr3a9q2q4l5hpqe9v6ras7dwae2"
    />
    <link
      rel="icon"
      type="image/x-icon"
      href="https://assets.ctfassets.net/1ebvt041pe6t/4qJ2O0DUgzxyiIe5FJjSKj/edb3ee5ca9f5272f97bcfb79dd42cc71/favicon.ico"
    />
  </>
);
