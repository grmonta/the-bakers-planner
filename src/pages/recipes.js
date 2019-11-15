import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Header from "../components/layout/header"
import PageTitle from "../components/layout/pageTitle"
import PageContent from "../components/layout/pageContent"
import LinkButton from "../components/shared/linkButton"
import Recipe from "../components/recipesPage/recipeLayout"
import RecipesPageIntro from "../components/recipesPage/recipesPageIntro"

export default ({ data }) => (
  <Layout>
    <Header></Header>

    <PageTitle>Recipes</PageTitle>
    <PageContent>
      <RecipesPageIntro />
      <LinkButton to="/recipeCalculator">Calculator</LinkButton>
      {/* <h3> {data.allMarkdownRemark.totalCount} Recipes and counting test</h3> */}

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={node.fields.slug}>
          <Recipe
            key={node.id}
            title={node.frontmatter.title}
            datePublished={node.frontmatter.date}
            description={node.frontmatter.description}
            excerpt={node.excerpt}
          />{" "}
        </Link>
      ))}
    </PageContent>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
