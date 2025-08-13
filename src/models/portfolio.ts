export type PortfolioModel = {
    id: string;
    portfolioItems: PortfolioItem[];
}

export type PortfolioItem = {
    id: string;
    title: string;
    mainImage: string;
    images: string[];
};