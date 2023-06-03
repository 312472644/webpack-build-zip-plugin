import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import progress from 'rollup-plugin-progress';
import clear from 'rollup-plugin-clear';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
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
