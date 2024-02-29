import '@nycds/core';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';
import CopyButtonPlugin from 'highlightjs-copy';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('xml', xml);

try {
  hljs.highlightAll();
  hljs.addPlugin(new CopyButtonPlugin());
} catch(e) {
  console.log(e);
}
