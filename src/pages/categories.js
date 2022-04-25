import React from "react"
import Layout from "../components/Layout"
import GenreTags from "../components/GenreTags"
import { graphql } from "gatsby"

const categories = () => {
  return (
    <Layout>
      <section className="page">
        <GenreTags />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    example {
      data {
        genre
      }
    }
  }
`

export default categories
