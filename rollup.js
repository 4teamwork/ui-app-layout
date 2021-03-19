const { rollup } = require('rollup')
const vue = require('rollup-plugin-vue')
const vuetify = require('rollup-plugin-vuetify')
const postcss = require('rollup-plugin-postcss')
const commonjs = require('@rollup/plugin-commonjs')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

const build = async () => {
  try {
    const bundle = await rollup({
      input: 'src/index.js',
      external: ['vue', 'vuetify/lib', 'lodash'],
      plugins: [nodeResolve(), commonjs(), postcss(), vue({ css: false }), vuetify()],
    })

    bundle.write({
      format: 'esm',
      file: 'dist/bundle.js',
    })
  } catch (e) {
    console.error(e)
  }
}

build()
