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
