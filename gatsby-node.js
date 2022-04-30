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
}
