import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
// import external from 'rollup-plugin-peer-deps-external'
import json from 'rollup-plugin-json';
import postcss from 'rollup-plugin-postcss'
import path from 'path'
import autoExternal from 'rollup-plugin-auto-external'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import replace from 'rollup-plugin-replace';

import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  external: [ 'redux-devtools-extension' ],
  plugins: [
    autoExternal( {
      builtins: false,
      dependencies: true,
      packagePath: path.resolve( '../../package.json' ),
      peerDependencies: false,
    } ),
    json(),
    postcss( {
      modules: true
    } ),
    url(),
    svgr(),
    resolve( {browser: true} ),
    typescript( {
      rollupCommonJSResolveHack: true,
      clean: true
    } ),
    replace( {
      include: './src/config.ts',
      exclude: 'node_modules/**',
      ENV: (process.env.NODE_ENV || 'development'),
    } ),
    commonjs( {
      include: 'node_modules/**',
      exclude: '**/*.css'
    } ),
  ]
}
