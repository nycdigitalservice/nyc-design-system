export default class Reel extends HTMLElement {
  constructor () {
    super()

    this.reelNav = `
        <div class="reel__nav">
            <button type="button" class="button" data-variant="primary">
                <span class="sr-only">Scroll events left</span>
                <i class="i-ri:arrow-left-line text-lg"></i>
            </button>
            <button type="button" class="button" data-variant="primary">
                <span class="sr-only">Scroll events right</span>
                <i class="i-ri:arrow-right-line text-lg"></i>
            </button>
        </div>
    `

    this.scrollAmount = 0
  }

  toggleOverflowClass (elem) {
    const { scrollWidth, clientWidth } = elem
    console.log(elem, scrollWidth, clientWidth)
    const shouldToggle = elem.scrollWidth > elem.clientWidth
    console.log(shouldToggle)
    elem.classList.toggle('overflowing', shouldToggle)
  };

  connectedCallback () {
    if (this.isConnected) {
      this.scrollable = this.firstElementChild
      this.scrollable.classList.add('reel')

      if ('ResizeObserver' in window) {
        new ResizeObserver(entries => {
          this.toggleOverflowClass(entries[0].target)
          this.scrollAmount = this.scrollable.offsetWidth / 2
        }).observe(this.scrollable)
      }

      if ('MutationObserver' in window) {
        new MutationObserver(entries => {
          this.toggleOverflowClass(entries[0].target)
          this.scrollAmount = this.scrollable.offsetWidth / 2
        }).observe(this.scrollable, { childList: true })
      }

      this.initNav()
    }
  }

  initNav () {
    this.insertAdjacentHTML('beforeend', this.reelNav)
    const buttons = this.querySelector('.reel__nav')
    const items = this.scrollable.children
    this.prevBtn = this.querySelector('.reel__nav button:first-child')
    this.nextBtn = this.querySelector('.reel__nav button:last-child')

    // Reveal button functionality now JS has run
    buttons.hidden = false

    // Make the prev button disabled because
    // you can't 'go left' to begin with
    this.prevBtn.disabled = true

    // Scroll by half the container's width
    this.scrollAmount = this.scrollable.offsetWidth / 2

    // Scroll incrementally by button
    this.prevBtn.addEventListener('click', (e) => {
      this.scrollable.scrollLeft += -this.scrollAmount
    })
    this.nextBtn.addEventListener('click', (e) => {
      this.scrollable.scrollLeft += this.scrollAmount
    })

    // Debounce the button disabling function on scroll
    let debounced
    this.scrollable.addEventListener('scroll', () => {
      window.clearTimeout(debounced)
      debounced = setTimeout(this.disableEnableNav.bind(this), 200)
    })

    // Only use if supported
    if ('IntersectionObserver' in window) {
      const observerSettings = {
        root: this.scrollable,
        threshold: 0.5
      }

      const callback = function (items, observer) {
        Array.prototype.forEach.call(items, function (item) {
          if (item.intersectionRatio > 0.5) {
            item.target.removeAttribute('inert')
          } else {
            // Makes items unfocusable and unavailable to assistive technologies
            item.target.setAttribute('inert', 'inert')
          }
        })
      }

      const observer = new IntersectionObserver(callback, observerSettings)
      Array.prototype.forEach.call(items, function (item) {
        observer.observe(item)
      })
    }
  }

  disableEnableNav () {
    this.prevBtn.disabled = this.scrollable.scrollLeft < 1
    this.nextBtn.disabled = Math.ceil(this.scrollable.scrollLeft) >= this.scrollable.scrollWidth - this.scrollable.offsetWidth
  }
}

if ('customElements' in window) {
  customElements.define('nyc-reel', Reel)
}
