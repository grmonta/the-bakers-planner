import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"

import Header from "../components/layout/header"
import PageTitle from "../components/layout/pageTitle"
import PageContent from "../components/layout/pageContent"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Header></Header>
      <PageTitle>{post.frontmatter.title}</PageTitle>
      <PageContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </PageContent>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
