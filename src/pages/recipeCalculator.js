import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Header from "../components/layout/header"
import PageTitle from "../components/layout/pageTitle"
import CalculatorForm from "../components/recipeCalculator/calculatorForm"

export default ({ data }) => (
  <Layout>
    <Header />
    <PageTitle> {data.site.siteMetadata.title} Calculator</PageTitle>
    <CalculatorForm />
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
