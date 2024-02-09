import ToggleButton from './toggle-button';
if (!customElements.get('nyc-toggle-button')) {
  window.customElements.define('nyc-toggle-button', ToggleButton, { extends: 'button' });
}
