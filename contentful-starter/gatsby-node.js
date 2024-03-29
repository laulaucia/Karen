const path = require('path')


exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for review post
  const reviewPost = path.resolve('./src/templates/single-review.js')

  const result = await graphql(
    `
      {
        allContentfulReviews {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulReviews.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousReviewsSlug = index === 0 ? null : posts[index - 1].slug
      const nextReviewsSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/reviews/${post.slug}/`,
        component: reviewPost,
        context: {
          slug: post.slug,
          previousReviewsSlug,
          nextReviewsSlug,
        },
      })
    })
  }
}
