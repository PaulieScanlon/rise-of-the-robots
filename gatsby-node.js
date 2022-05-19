exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [{ test: /\.(riv)$/i, type: 'asset/resource' }],
    },
  })
}

exports.onPostBuild = ({ store }) => {
  const { redirects } = store.getState()
  console.log(`Applied redirects:`, redirects)
}

exports.onCreatePages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/~partytown/*`,
    toPath: `/demos/rise-of-the-robots/~partytown/*`,
    statusCode: 200,
  })

  createRedirect({
    fromPath: `/__partytown-proxy?:url`,
    toPath: `/demos/rise-of-the-robots/__partytown-proxy?:url`,
    statusCode: 200,
  })
}
