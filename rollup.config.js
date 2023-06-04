const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');
const progress = require('rollup-plugin-progress');
const clear = require('rollup-plugin-clear');

/**
 * @type {import('rollup').RollupOptions}
 */
module.exports = {
  input: {
    index: './plugin/zip.js',
  },
  output: [
    {
      dir: 'dist/es',
      format: 'es',
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
    },
  ],
  plugins: [
    commonjs(),
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    terser(),
    clear({ targets: ['dist'] }),
    progress({
      clearLine: false,
    }),
  ],
};
