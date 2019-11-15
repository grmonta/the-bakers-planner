import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Header from "../components/layout/header"
import PageTitle from "../components/layout/pageTitle"
import PageContent from "../components/layout/pageContent"

export default ({ data }) => (
  <Layout>
    <Header />
    <PageTitle>About {data.site.siteMetadata.title}</PageTitle>
    <PageContent>
      {" "}
      I needed something to help me schedule start and to eating times for
      complicated bread recipes. I wanted to be able to adjust it based on what
      time I wanted to eat. And so I made it. <input type="text"></input>
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
  }
`
