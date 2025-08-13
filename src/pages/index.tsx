import * as React from "react";
import type { GetStaticProps, NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import ContactMe from "../components/ContactMe";
import { Container } from "react-bootstrap";
import Portfolio from "../components/Portfolio/Portfolio";
import { PortfolioModel } from "../models/portfolio";
import SEO from "../components/SEO";

export type IndexPageProps = {
  logoUrl: string;
  aboutImages: string[];
  portfolio: PortfolioModel;
};

const IndexPage: NextPage<IndexPageProps> = ({ logoUrl, aboutImages, portfolio }) => {
  const date = new Date();
  const copyrightText =
    "Copyright &copy; " + date.getFullYear() + " - Art Monkey Creative Studio";
  return (
    <>
      <SEO />
      <Header logo={logoUrl}></Header>
      <Hero></Hero>
      <About></About>
      <Services images={aboutImages}></Services>
      <Portfolio portfolio={portfolio}></Portfolio>
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

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  // TODO: Optionally wire up Contentful GraphQL/CDA here. For now provide safe defaults.
  const portfolioData: PortfolioModel = {
    id: "",
    portfolioItems: [],
  };

  const placeholderImages = new Array(6).fill("");

  return {
    props: {
      logoUrl: "",
      aboutImages: placeholderImages,
      portfolio: portfolioData,
    },
    revalidate: 3600,
  };
};

export default IndexPage;
