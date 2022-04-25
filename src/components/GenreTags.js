import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const GenreTags = () => {
  const {
    example: { data },
  } = useStaticQuery(query)

  const filteredData = [
    ...new Set(
      data.map(item => {
        return item.genre
      })
    ),
  ]
  console.log(filteredData)

  return (
    <section>
      {filteredData.map(genre => {
        return <button>{genre}</button>
      })}
    </section>
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

export default GenreTags
