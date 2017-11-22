/**
 * Dependencies
 */

import resolve from 'rollup-plugin-node-resolve'; // finds external modules
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';


/**
 * Init
 */

export default {
  moduleName: 'main',
  entry: './src/js/main.js',
  dest: './dist/scripts/main.dist.js',
  sourceMap: 'inline',
  format: 'iife',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
};
