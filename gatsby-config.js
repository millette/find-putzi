'use strict'

// self
const { name, description } = require('./package.json')

const cwd = process.cwd()

module.exports = {
  pathPrefix: `/${name}`,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${cwd}/data/`
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        // icon: 'src/images/logo.png',
        name: 'Québec Projects (GitHub) - RoLLodeQc',
        short_name: 'Projets Qc',
        description,
        lang: 'en',
        start_url: './',
        scope: `/${name}/`,
        background_color: 'white',
        theme_color: 'black',
        display: 'fullscreen'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline'
  ]
}
