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

const query = graphql`
  {
    gcms {
      portfolio(where: { id: "clhns7346neye0bw5yu9ocz7y" }) {
        items {
          __typename
          ... on PortfolioItem {
            id
            title
            images {
              url
            }
          }
        }
      }
    }
  }
`;

const IndexPage: React.FC<PageProps> = () => {
  const {
    gcms: { portfolio },
  } = useStaticQuery(query);

  console.log(portfolio);
  const date = new Date();
  const copyrightText =
    "Copyright &copy; " + date.getFullYear() + " - Art Monkey Creative Studio";
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Portfolio></Portfolio>
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
