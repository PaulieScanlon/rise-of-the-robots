const path = require('path')
const { copyLibFiles } = require('@builder.io/partytown/utils')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [{ test: /\.(riv)$/i, type: 'asset/resource' }],
    },
  })
}

exports.onPreBuild = async ({ actions }) => {
  const { createRedirect } = actions
  await copyLibFiles(path.join(__dirname, 'static', '~partytown'))

  createRedirect({
    fromPath: `/~partytown/*`,
    toPath: `https://riseoftherobots.gatsbyjs.io/~partytown/*`,
    statusCode: 200,
  })
}
