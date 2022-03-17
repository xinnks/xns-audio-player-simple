import vue from 'rollup-plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve'
import css from 'rollup-plugin-css-only'

export default [
{
  input: 'src/index.js',
  output: {
    name: 'XnsAudioPlayerSimple',
    format: 'esm',
    exports: 'named',
    file: 'dist/index.esm.js'
  },
  plugins: [
    vue({
        css: false
    }),
    css(),
    nodeResolve()
  ]
},
{
  input: 'src/index.js',
  output: {
    format: 'cjs',
    exports: 'named',
    file: 'dist/index.ssr.js'
  },
  plugins: [
    vue({ 
      template: { 
        optimizeSSR: true 
      } 
    }),
    css(),
    nodeResolve()
  ]
},
{
  input: 'src/index.js',
  output: {
    format: 'iife',
    file: 'dist/index.js',
    name: 'XnsAudioPlayerSimple'
  },
  plugins: [
    vue({
        css: false
    }),
    css(),
    nodeResolve()
  ]
}];