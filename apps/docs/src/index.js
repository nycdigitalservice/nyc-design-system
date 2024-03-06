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

class VariantToggle extends HTMLElement {
  connectedCallback() {
    this.variants = this.getAttribute('variants').split(',')
    this.attribute = this.getAttribute('attribute')
    this.target = this.getAttribute('target')
    console.log(this.variants)
    console.log(this.target)
    console.log(this.attribute)
    const fields = this.buildFields(this.variants, this.attribute)
    console.log(fields)
    const inner = `
<fieldset class="flex">
<legend>Select a variant:</legend>
<div class="fields"></div>
</fieldset>`
    this.innerHTML = inner;
    this.querySelector('.fields').append(...fields)
  }

  buildFields(variants, attr) {
    return variants.map(v => {
      const str = `
<div>
<input type="radio" id="${attr}-${v}" name="${attr}" value="${v}">
<label for="${attr}-${v}">${v}</label>
</div>
`
      const dom = new DOMParser().parseFromString(str, 'text/html').body.children
      //console.log(dom)
      return dom
    })
  }
}

if (!customElements.get('nyc-variant-toggle')) {
  window.customElements.define('nyc-variant-toggle', VariantToggle);
}
