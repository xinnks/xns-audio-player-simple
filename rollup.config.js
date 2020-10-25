import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support

export default {
    input: 'src/index.js', // Path relative to package.json
    output: {
        name: 'XnsAudioPlayerSimple',
    	  file: 'dist/index.js',
        exports: 'named',
        format: 'cjs'
    },
    plugins: [
        commonjs(),
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        buble(), // Transpile to ES5
	    nodeResolve(),
	    commonjs(),
	    postcss({
	      config: {
	          path: "./postcss.config.js",
	      },
	      extensions: [".css"],
	      extract: true,
	      minimize: true,
	        // modules: true,
	    })
    ],
};