import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Header from "../components/layout/header"
import PageTitle from "../components/layout/pageTitle"
import PageContent from "../components/layout/pageContent"

export default ({ data }) => (
  <Layout>
    <Header></Header>

    <PageTitle>Recipes for {data.site.siteMetadata.title}</PageTitle>
    <PageContent>
      Pick your recipes! Add your own! Add a list here
      <h4>{data.allMarkdownRemark.totalCount}</h4>
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
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
