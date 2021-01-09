const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Yearn V2 Schemas',
    description: '> JSON Schemas for Yearn Finance',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/sbacha/yearn-v2-schemas/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Yearn V2 Schemas',
        description: '> JSON Schemas for Yearn Finance',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/sbacha/yearn-v2-schemas',
          templates:
            '/Users/sbacha/.nvm/versions/node/v10.21.0/lib/node_modules/docz/node_modules/docz-core/dist/templates',
          docz: '/Users/sbacha/yearn-v2-schemas/.docz',
          cache: '/Users/sbacha/yearn-v2-schemas/.docz/.cache',
          app: '/Users/sbacha/yearn-v2-schemas/.docz/app',
          appPackageJson: '/Users/sbacha/yearn-v2-schemas/package.json',
          appTsConfig: '/Users/sbacha/yearn-v2-schemas/tsconfig.json',
          gatsbyConfig: '/Users/sbacha/yearn-v2-schemas/gatsby-config.js',
          gatsbyBrowser: '/Users/sbacha/yearn-v2-schemas/gatsby-browser.js',
          gatsbyNode: '/Users/sbacha/yearn-v2-schemas/gatsby-node.js',
          gatsbySSR: '/Users/sbacha/yearn-v2-schemas/gatsby-ssr.js',
          importsJs: '/Users/sbacha/yearn-v2-schemas/.docz/app/imports.js',
          rootJs: '/Users/sbacha/yearn-v2-schemas/.docz/app/root.jsx',
          indexJs: '/Users/sbacha/yearn-v2-schemas/.docz/app/index.jsx',
          indexHtml: '/Users/sbacha/yearn-v2-schemas/.docz/app/index.html',
          db: '/Users/sbacha/yearn-v2-schemas/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
