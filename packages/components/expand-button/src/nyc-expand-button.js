export default class NYCExpandButton extends HTMLButtonElement {
  connectedCallback () {
    try {
      if (!this.hasAttribute('aria-controls')) {
        throw new Error(
          'No "aria-controls" attribute found. "aria-controls" must be set to the ID of the element you are expanding'
        )
      }

      this.target = document.getElementById(this.getAttribute('aria-controls'))

      if (!this.target) {
        throw new Error('"aria-controls" target ID not found')
      }

      if (!this.hasAttribute('aria-expanded')) {
        this.setAttribute('aria-expanded', false)
      }

      document.addEventListener(
        'DOMContentLoaded',
        () => this.toggleTarget()
      )

      this.addEventListener('click', this.toggleExpand)
    } catch (e) {
      console.error(`[ToggleButton] ${e}`, this)
    }
  }

  toggleExpand () {
    this.setAttribute('aria-expanded', !this.isExpanded())
    this.toggleTarget()
  }

  toggleTarget () {
    this.target.toggleAttribute('hidden', !this.isExpanded())
  }

  isExpanded () {
    return this.getAttribute('aria-expanded').toLowerCase() === 'true'
  }
}
