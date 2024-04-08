import NYCExpandButton from './nyc-expand-button'
if (!customElements.get('nyc-expand-button')) {
  window.customElements.define('nyc-expand-button', NYCExpandButton, { extends: 'button' })
}
