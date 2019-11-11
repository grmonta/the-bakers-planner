import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Header from "../components/layout/header"
import PageTitle from "../components/layout/pageTitle"
import PageContent from "../components/layout/pageContent"
import Recipe from "../components/layout/recipe"

export default ({ data }) => (
  <Layout>
    <Header></Header>

    <PageTitle>Recipes for {data.site.siteMetadata.title}</PageTitle>
    <PageContent>
      <h1>Pick your recipes! Add your own! Add a list here </h1>
      <h3> {data.allMarkdownRemark.totalCount} Recipes and counting </h3>

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
