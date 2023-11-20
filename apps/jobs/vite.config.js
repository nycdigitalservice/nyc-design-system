import { defineConfig } from 'vite';
import { resolve } from 'path';
import UnoCSS from 'unocss/vite';
import postcssPresetEnv from 'postcss-preset-env';
import postcss from 'rollup-plugin-postcss';
import {ViteEjsPlugin} from "vite-plugin-ejs";

console.log(import.meta.env)
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../../../docs',
    minify: false,
    cssMinify: false,
    cssCodeSplit: true,
    modulePreload: false,
    // lib: {
    //   entry: [
    //     path.resolve(__dirname, 'src/main.js'),
    //     //path.resolve(__dirname, 'src/docs/docs.js')
    //   ],
    //   name: "NYCDS"
    // },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        hero: resolve(__dirname, 'src/hero-demo.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          //if (assetInfo.name === 'docs.css') return 'dof-2023-docs.css';
          //if (assetInfo.name === 'main.css') return 'dof-2023-styles.css';
          return assetInfo.name;
        },
      },
      // plugins: [
      //     postcss({
      //         include: path.resolve(__dirname, 'src/docs/docs.css'),
      //         extract: path.resolve(__dirname, 'dist/docs.css')
      //     })
      // ]
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 2,
          features: {
            'nesting-rules': true,
            'custom-selectors': true
          }
        }),
      ]
    }
  },
  plugins: [
    UnoCSS(),
    ViteEjsPlugin((viteConfig) => {
      console.log(viteConfig.env)
      return {
        // viteConfig is the current Vite resolved config
        env: viteConfig.env,
      }
    }),
  ],
});
