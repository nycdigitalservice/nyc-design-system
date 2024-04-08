// [[file:../js.org::*NYCAccordion custom element][NYCAccordion custom element:1]]
import Accordion from './accordion'

class NYCAccordion extends HTMLElement {
  connectedCallback () {
    if (!this.firstChild) return
    this.accordion = new Accordion(this)
  }
}

customElements.define('nyc-accordion', NYCAccordion)
// NYCAccordion custom element:1 ends here
