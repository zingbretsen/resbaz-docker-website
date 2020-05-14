const path = require('path');
const _ = require('lodash');

// Remove trailing slash
exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;

    return new Promise((resolve, reject) => {
        // Remove trailing slash
        const newPage = Object.assign({}, page, {
            path: page.path === `/` ? page.path : page.path.replace(/\/$/, ``),
        });

        if (newPage.path !== page.path) {
            // Remove the old page
            deletePage(page);
            // Add the new page
            createPage(newPage);
        }

        resolve();
    });
};

// Create pages from markdown nodes
exports.createPages = ({ actions, createContentDigest, createNodeId, graphql }) => {
    const { createPage, createNode } = actions;
    const slideTemplate = path.resolve(`src/templates/slide.js`);
    const exerciseTemplate = path.resolve(`src/templates/exercise.js`);

    return graphql(`
    {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          pagetype
          title
        }
        fileAbsolutePath
        html
      }
    }
  }
}
  `).then(result => {
      if (result.errors) {
          return Promise.reject(result.errors);
      }

      // Separates markdown files into exercises and slides
      // Sorts both by filename
      const slides = result.data.allMarkdownRemark.edges.filter(n => n.node.frontmatter.pagetype == 'slide');
      slides.sort((a, b) => a.node.fileAbsolutePath > b.node.fileAbsolutePath ? 1 : -1);

      // Splits slides apart by hr (---)
      const nodes = slides.flatMap((s) => s.node.html.split('<hr>').map((html) => ({
          node: s.node, html
      })));

      // Create nodes and pages for SLIDES
      nodes.forEach(({ node, html }, index) => {
          createNode({
              id: createNodeId(`${node.id}_${index + 1} >>> Slide`),
              parent: node.id,
              children: [],
              internal: {
                  type: `Slide`,
                  contentDigest: createContentDigest(html),
              },
              html: html,
              index: index + 1,
          });
      });

      nodes.forEach((slide, index) => {
          createPage({
              path: `/${index + 1}`,
              component: slideTemplate,
              context: {
                  index: index + 1,
                  absolutePath: process.cwd() + `/src/slides#${index + 1}`,
              },
          });
      });


      // Create nodes and pages for EXERCISES
      const exercises = result.data.allMarkdownRemark.edges.filter(n => n.node.frontmatter.pagetype == 'exercise');
      exercises.sort((a, b) => a.node.fileAbsolutePath > b.node.fileAbsolutePath ? 1 : -1);

      const ex_nodes = exercises.flatMap((s) => s.node.html.split('<hr>').map((html) => ({
          node: s.node, html
      })));

      ex_nodes.forEach(({ node, html }, index) => {
          return createNode({
              id: createNodeId(`${node.id}_${index} >>> Exercise`),
              parent: node.id,
              children: [],
              internal: {
                  type: `Exercise`,
                  contentDigest: createContentDigest(html),
              },
              html: html,
              index: index,
              title: "Exercise",
          });
      });

      ex_nodes.forEach((exercise, index) => {
          createPage({
              path: `/exercises/${index}`,
              component: exerciseTemplate,
              context: {
                  index: index,
                  absolutePath: process.cwd() + `/src/exercises#${index}`,
              },
          });
      });
  });
};

exports.sourceNodes = ({ actions }) => {
    actions.createTypes(`
    type Slide implements Node {
      html: String
      index: Int
    }
  `);
    actions.createTypes(`
    type Exercise implements Node {
      html: String
      index: Int
      title: String
    }
  `);
};

