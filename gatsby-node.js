const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogArticleTemplate = path.resolve(
    `src/components/templates/ArticleTemplate.jsx`
  );

  const { data } = await graphql(`
    query Projects {
      allDatoCmsArticle {
        nodes {
          slug
        }
      }
    }
  `);

  data.allDatoCmsArticle.nodes.forEach((node) => {
    createPage({
      path: `${`/blog/` + node.slug}`,
      component: blogArticleTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};
