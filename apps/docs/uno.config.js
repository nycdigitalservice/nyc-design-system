import { defineConfig, presetUno } from 'unocss';
import { resolve, dirname } from 'path';

export default defineConfig({
  blocklist: ['grid', 'container'],
  content: {
    filesystem: [
      //'../../docs/**/*.{html}',
      '../../scripts/publish/site-lisp/nyc-publish.el',
      '../../packages/**/*.org',
    ],
  },
  presets: [
    presetUno({ variablePrefix: 'nyc-' }),
  ],
  configResolved: config => {
    //console.log(config)
  }
});
