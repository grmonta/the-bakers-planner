import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Header from "../components/layout/header"
import PageTitle from "../components/layout/pageTitle"
import PageContent from "../components/layout/pageContent"
import CalculatorApp from "../components/recipeCalculator/calculatorApp"

export default ({ data }) => (
  <Layout>
    <Header />
    <PageTitle> Calculator</PageTitle>
    <PageContent>
      <CalculatorApp></CalculatorApp>
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
