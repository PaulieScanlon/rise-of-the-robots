const path = require('path')
const { copyLibFiles } = require('@builder.io/partytown/utils')

exports.onPreBuild = async () =>
  // { actions: { createRedirect } }
  {
    await copyLibFiles(path.join(__dirname, 'static', '~partytown'))

    // createRedirect({
    //   fromPath: `~partytown/*`,
    //   toPath: `https://riseoftherobots.gatsbyjs.io/~partytown/*`,
    //   statusCode: 200,
    // })
  }

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [{ test: /\.(riv)$/i, type: 'asset/resource' }],
    },
  })
}
