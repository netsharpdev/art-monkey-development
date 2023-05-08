import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Hero from "../components/Hero";
import "../styles/creative.scss";
const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header></Header>
      <Hero></Hero>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Art Monkey Creative Studio | Projektowanie wnętrz i mebli</title>
);
