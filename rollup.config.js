import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: './plugin/zip.js',
  output: [
    {
      dir: 'dist/es',
      format: 'es',
    },
    {
      dir: 'dist',
      name: 'Zip',
      format: 'umd',
    },
  ],
  plugins: [commonjs(), resolve(), babel({ babelHelpers: 'bundled' }), terser()],
};
