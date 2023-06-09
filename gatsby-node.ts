// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;
//   const typeDefs = `
//     type Image implements Node {
//         url: String!
//     }
//     type PortfolioItem implements Node {
//       id: String!
//       title: String!
//       Images: [Image!]!
//     }

//     union PortfolioItemUnion = PortfolioItem | Image
//   `;
//   createTypes(typeDefs);
// };
