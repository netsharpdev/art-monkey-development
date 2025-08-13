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
  const spaceId = process.env.CONTENTFUL_SPACE_ID as string | undefined;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string | undefined;
  const environment = (process.env.CONTENTFUL_ENVIRONMENT as string | undefined) || "master";

  const fallbackPortfolio: PortfolioModel = { id: "", portfolioItems: [] };
  const fallbackAboutImages: string[] = new Array(6).fill("");

  if (!spaceId || !accessToken) {
    return {
      props: {
        logoUrl: "",
        aboutImages: fallbackAboutImages,
        portfolio: fallbackPortfolio,
      },
      revalidate: 3600,
    };
  }

  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`;
  const portfolioId = "2fb9b556-4ec4-56f5-bbdd-98dc437446fb";

  const query = /* GraphQL */ `
    query IndexPage($portfolioId: String!) {
      portfolio(id: $portfolioId) {
        sys { id }
        portfolioItemsCollection(limit: 100) {
          items {
            sys { id }
            title
            mainImage { url }
            imagesCollection(limit: 50) { items { url } }
          }
        }
      }
      pageDataCollection(limit: 1) {
        items {
          logo { url }
          aboutImagesCollection(limit: 10) { items { url } }
        }
      }
    }
  `;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ query, variables: { portfolioId } }),
    });

    if (!res.ok) {
      console.error("Contentful GraphQL request failed", res.status, await res.text());
      return {
        props: {
          logoUrl: "",
          aboutImages: fallbackAboutImages,
          portfolio: fallbackPortfolio,
        },
        revalidate: 3600,
      };
    }

    const json = (await res.json()) as any;
    const data = json.data || {};

    const pageData = data.pageDataCollection?.items?.[0] || {};
    const logoUrl: string = pageData?.logo?.url || "";
    const aboutImages: string[] = (pageData?.aboutImagesCollection?.items || [])
      .map((it: any) => it?.url)
      .filter(Boolean);

    const portfolioEntry = data.portfolio || {};
    const portfolio: PortfolioModel = {
      id: portfolioEntry?.sys?.id || portfolioId,
      portfolioItems: (portfolioEntry?.portfolioItemsCollection?.items || [])
        .filter(Boolean)
        .map((item: any) => ({
          id: item?.sys?.id || "",
          title: item?.title || "",
          mainImage: item?.mainImage?.url || "",
          images: (item?.imagesCollection?.items || [])
            .map((img: any) => img?.url)
            .filter(Boolean),
        })),
    };

    return {
      props: {
        logoUrl,
        aboutImages: aboutImages.length ? aboutImages : fallbackAboutImages,
        portfolio,
      },
      revalidate: 3600,
    };
  } catch (err) {
    console.error("Contentful fetch error", err);
    return {
      props: {
        logoUrl: "",
        aboutImages: fallbackAboutImages,
        portfolio: fallbackPortfolio,
      },
      revalidate: 3600,
    };
  }
};

export default IndexPage;
