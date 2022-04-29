const fetch = require("node-fetch")

const NODE_TYPE = "games"

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions
  const response = await fetch("  https://www.freetogame.com/api/games")
  const json = await response.json()
  const gameCollection = ([] = json)

  gameCollection.forEach((node, index) => {
    createNode({
      ...node,
      id: createNodeId(`${NODE_TYPE}-${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      },
    })
  })
  //   const games = await Promise.all(
  //     results.map(async result => {
  //       const { url } = result
  //       const gameResponse = await fetch(url)
  //       return await gameResponse.json()
  //     })
  //   )
}

// const fetch = (...args) =>
//   import(`node-fetch`).then(({ default: fetch }) => fetch(...args))
// exports.sourceNodes = async ({
//   actions: { createNode },
//   createContentDigest,
// }) => {
//   // get data from GitHub API at build time
//   const result = await fetch(`https://www.freetogame.com/api/games`)
//   const resultData = await result.json()
//   // create node for build time data example in the docs
//   createNode({
//     // nameWithOwner and url are arbitrary fields from the data
//     data: resultData,
//     url: resultData.html_url,
//     // required fields
//     id: `example-build-time-data`,
//     parent: null,
//     children: [],
//     internal: {
//       type: `example`,
//       contentDigest: createContentDigest(resultData),
//     },
//   })
// }
