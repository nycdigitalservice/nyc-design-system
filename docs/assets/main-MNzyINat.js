import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";
(function() {
  "inert" in HTMLElement.prototype || (Object.defineProperty(HTMLElement.prototype, "inert", { enumerable: true, get: function() {
    return this.hasAttribute("inert");
  }, set: function(h) {
    h ? this.setAttribute("inert", "") : this.removeAttribute("inert");
  } }), window.addEventListener("load", function() {
    function h(a) {
      var b = null;
      try {
        b = new KeyboardEvent("keydown", { keyCode: 9, which: 9, key: "Tab", code: "Tab", keyIdentifier: "U+0009", shiftKey: !!a, bubbles: true });
      } catch (g) {
        try {
          b = document.createEvent("KeyboardEvent"), b.initKeyboardEvent("keydown", true, true, window, "Tab", 0, a ? "Shift" : "", false, "en");
        } catch (d) {
        }
      }
      if (b) {
        try {
          Object.defineProperty(b, "keyCode", { value: 9 });
        } catch (g) {
        }
        document.dispatchEvent(b);
      }
    }
    function k(a) {
      for (; a && a !== document.documentElement; ) {
        if (a.hasAttribute("inert"))
          return a;
        a = a.parentElement;
      }
      return null;
    }
    function e(a) {
      var b = a.path;
      return b && b[0] || a.target;
    }
    function l(a) {
      a.path[a.path.length - 1] !== window && (m(e(a)), a.preventDefault(), a.stopPropagation());
    }
    function m(a) {
      var b = k(a);
      if (b) {
        if (document.hasFocus() && 0 !== f) {
          var g = (c || document).activeElement;
          h(0 > f ? true : false);
          if (g != (c || document).activeElement)
            return;
          var d = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, { acceptNode: function(a2) {
            return !a2 || !a2.focus || 0 > a2.tabIndex ? NodeFilter.FILTER_SKIP : b.contains(a2) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
          } });
          d.currentNode = b;
          d = (-1 === Math.sign(f) ? d.previousNode : d.nextNode).bind(d);
          for (var e2; e2 = d(); )
            if (e2.focus(), (c || document).activeElement !== g)
              return;
        }
        a.blur();
      }
    }
    (function(a) {
      var b = document.createElement("style");
      b.type = "text/css";
      b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a));
      document.body.appendChild(b);
    })("/*[inert]*/*[inert]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}");
    var n = function(a) {
      return null;
    };
    window.ShadowRoot && (n = function(a) {
      for (; a && a !== document.documentElement; ) {
        if (a instanceof window.ShadowRoot)
          return a;
        a = a.parentNode;
      }
      return null;
    });
    var f = 0;
    document.addEventListener("keydown", function(a) {
      f = 9 === a.keyCode ? a.shiftKey ? -1 : 1 : 0;
    });
    document.addEventListener("mousedown", function(a) {
      f = 0;
    });
    var c = null;
    document.body.addEventListener("focus", function(a) {
      var b = e(a);
      a = b == a.target ? null : n(b);
      if (a != c) {
        if (c) {
          if (!(c instanceof window.ShadowRoot))
            throw Error("not shadow root: " + c);
          c.removeEventListener("focusin", l, true);
        }
        a && a.addEventListener("focusin", l, true);
        c = a;
      }
      m(b);
    }, true);
    document.addEventListener("click", function(a) {
      var b = e(a);
      k(b) && (a.preventDefault(), a.stopPropagation());
    }, true);
  }));
})();
class NYCForm extends HTMLElement {
  connectedCallback() {
    if (this.isConnected) {
      this.formEl = this.querySelector("form");
      this.submitBtn = this.querySelector("button[type=submit]");
      this.requiredFields = Array.from(this.querySelectorAll("[required]"));
      this.defaultFormAction = this.formEl.action;
      if (this.requiredFields.length > 0) {
        this.initFormValidation();
      }
      if (this.formEl.dataset.actionSetter) {
        this.actionSetterEl = this.querySelector(`#${this.formEl.dataset.actionSetter}`);
        this.fieldValueToAction(this.actionSetterEl);
      }
    }
  }
  /**
   * Disable form submit button and enable when all required fields are valid
   * @returns {undefined}
   */
  initFormValidation() {
    this.submitBtn.setAttribute("disabled", "");
    this.requiredFields.forEach(
      (field) => field.addEventListener("change", () => {
        const validFields = this.getValidFields(this.requiredFields);
        if (validFields.length === this.requiredFields.length) {
          this.submitBtn.removeAttribute("disabled");
        }
      })
    );
  }
  /*
   * @param {Array} An array of form fields
   * @returns {Array} An array of valid form fields
   */
  getValidFields(fields) {
    return fields.filter((field) => this.checkFieldValidity(field));
  }
  /**
   * @param {HTMLElement} A form field element
   * @returns {boolean} True if the field is valid
   */
  checkFieldValidity(field) {
    return field.checkValidity();
  }
  /**
   * @param {HTMLElement} An element
   * @returns {boolean} True if the element is a select
   */
  isSelectEl(el) {
    return el.tagName.toLowerCase() === "select";
  }
  /**
   * @param {string} A string of URL parameters
   * @returns {string} An HTML string of hidden input fields
   */
  urlParamStrToHiddenFields(params) {
    return params.split("&").map((p) => p.split("=")).map(([key, val]) => `<input type="hidden" class="tmp-field" name="${key}" value="${val}" />`).join("");
  }
  /**
   * Allow a field to set the action URL of the form
   * Curently only supports select fields
   * @param {HTMLElement} A form field element
   * @returns {undefined}
  */
  fieldValueToAction(fieldEl) {
    if (!fieldEl)
      throw new Error("NYCForm: No actionSetter element provided");
    this.actionSetterName = fieldEl.name;
    fieldEl.onchange = (evt) => {
      fieldEl.setAttribute("name", this.actionSetterName);
      this.formEl.setAttribute("action", this.defaultFormAction);
      this.formEl.querySelectorAll(".tmp-field").forEach((el) => el.remove());
      let { actionUrl } = this.isSelectEl(evt.target) ? evt.target.selectedOptions[0].dataset : evt.target.dataset;
      if (!actionUrl)
        return;
      if (actionUrl.includes("?")) {
        let [actionUrl2, params] = url.split("?");
        const tmpHiddenFields = this.urlParamStrToHiddenFields(params);
        this.formEl.insertAdjacentHTML("beforeend", tmpHiddenFields);
      }
      fieldEl.removeAttribute("name");
      this.formEl.action = actionUrl;
    };
  }
}
if ("customElements" in window) {
  customElements.define("nyc-form", NYCForm);
}
class NYCClearInputButton extends HTMLElement {
  connectedCallback() {
    if (this.isConnected) {
      try {
        this.setAttribute("role", "button");
        this.setAttribute("tabindex", "0");
        const { target } = this.dataset;
        if (!target)
          throw new Error("NYCClearInputButton: no data-target supplied");
        const input = this.parentNode.querySelector(`#${target}`);
        if (!input)
          throw new Error(`NYCClearInputButton: supplied input doesn't exist`);
        this.addEventListener("mousedown", (evt) => evt.preventDefault());
        this.addEventListener("keyup", (evt) => evt.keyCode === 13 && (input.value = ""));
        this.addEventListener("click", (evt) => {
          evt.preventDefault();
          input.value = "";
        });
      } catch (err) {
        console.error(err);
      }
    }
  }
}
if ("customElements" in window) {
  customElements.define("nyc-clear-input-button", NYCClearInputButton);
}
class NYCReel extends HTMLElement {
  constructor() {
    super();
    this.reelNav = `
        <div class="reel__nav">
            <button type="button" class="button" data-variant="tertiary">
                <span class="sr-only">Scroll events left</span>
                <i class="i-ri:arrow-left-line text-lg"></i>
            </button>
            <button type="button" class="button" data-variant="tertiary">
                <span class="sr-only">Scroll events right</span>
                <i class="i-ri:arrow-right-line text-lg"></i>
            </button>
        </div>
    `;
    this.scrollAmount = 0;
  }
  toggleOverflowClass(elem) {
    const { scrollWidth, clientWidth } = elem;
    console.log(elem, scrollWidth, clientWidth);
    const shouldToggle = elem.scrollWidth > elem.clientWidth;
    console.log(shouldToggle);
    elem.classList.toggle("overflowing", shouldToggle);
  }
  connectedCallback() {
    if (this.isConnected) {
      this.scrollable = this.firstElementChild;
      this.scrollable.classList.add("reel");
      if ("ResizeObserver" in window) {
        new ResizeObserver((entries) => {
          this.toggleOverflowClass(entries[0].target);
          this.scrollAmount = this.scrollable.offsetWidth / 2;
        }).observe(this.scrollable);
      }
      if ("MutationObserver" in window) {
        new MutationObserver((entries) => {
          this.toggleOverflowClass(entries[0].target);
          this.scrollAmount = this.scrollable.offsetWidth / 2;
        }).observe(this.scrollable, { childList: true });
      }
      this.initNav();
    }
  }
  initNav() {
    this.insertAdjacentHTML("beforeend", this.reelNav);
    var buttons = this.querySelector(".reel__nav");
    var items = this.scrollable.children;
    this.prevBtn = this.querySelector(".reel__nav button:first-child");
    this.nextBtn = this.querySelector(".reel__nav button:last-child");
    buttons.hidden = false;
    this.prevBtn.disabled = true;
    this.scrollAmount = this.scrollable.offsetWidth / 2;
    this.prevBtn.addEventListener("click", (e) => {
      this.scrollable.scrollLeft += -this.scrollAmount;
    });
    this.nextBtn.addEventListener("click", (e) => {
      this.scrollable.scrollLeft += this.scrollAmount;
    });
    let debounced;
    this.scrollable.addEventListener("scroll", () => {
      window.clearTimeout(debounced);
      debounced = setTimeout(this.disableEnableNav.bind(this), 200);
    });
    if ("IntersectionObserver" in window) {
      var observerSettings = {
        root: this.scrollable,
        threshold: 0.5
      };
      var callback = function(items2, observer2) {
        Array.prototype.forEach.call(items2, function(item) {
          if (item.intersectionRatio > 0.5) {
            item.target.removeAttribute("inert");
          } else {
            item.target.setAttribute("inert", "inert");
          }
        });
      };
      var observer = new IntersectionObserver(callback, observerSettings);
      Array.prototype.forEach.call(items, function(item) {
        observer.observe(item);
      });
    }
  }
  disableEnableNav() {
    this.prevBtn.disabled = this.scrollable.scrollLeft < 1;
    this.nextBtn.disabled = Math.ceil(this.scrollable.scrollLeft) >= this.scrollable.scrollWidth - this.scrollable.offsetWidth;
  }
}
if ("customElements" in window) {
  customElements.define("nyc-reel", NYCReel);
}
class NYCEventCard extends HTMLElement {
  /**
   * Return a template element containing an nyc-event-card to be cloned and populated
   * @returns {HTMLElement} - A template element
   */
  static getTemplate(event) {
    event && event.image || "";
    const templateStr = `
    <nyc-event-card class="flow card" data-flow-space="s">
    <header class="card__header flex flex-col">
    <h3>
    <a href="#" class="no-underline card__primary-action" target="_blank">
    <span>
    <slot name="title"></slot>
    </span>
    <span class="card__primary-action__icon-wrapper">
    <i class="i-ri:arrow-right-line"></i>
    </span>
    </a></h3>
    <time datetime="" class="order-first text-xs"></time>
    </header>
    <div class="card__body flow" data-flow-space="s">
<p class="card__description"><slot name="description"></slot></p>
    <p><slot name="department"></slot></p>
    <p><span><slot name="location"></slot></span><br><span><slot name="time"></slot></span></p>
    </div>
    </nyc-event-card>
    `;
    const template = document.createElement("template");
    template.innerHTML = templateStr;
    return template;
  }
  /**
   * Create an nyc-event-card element from an event object and template
   * @param {Object} event - The event to display in the card
   * @param {string} event.title - The title of the event
   * @param {string} event.description - Description of the event
   * @param {string} event.date - The date of the event formatted 00/00/00
   * @param {string} event.time - The time of the event
   * @param {string} event.location - The location of the event
   * @param {string} event.link - A URL the card will link to
   * @param {string} event.image - A URL for a background image
   * @param {string} template - A template string for the nyc-event-card element
   * @returns {HTMLElement} - The nyc-event-card element
   */
  buildEl(event, template) {
    console.log(event);
    const clone = NYCEventCard.getTemplate(event).content.firstElementChild.cloneNode(true);
    clone.querySelectorAll(".card__primary-action").forEach((el) => {
      if (el.tagName.toLowerCase() === "a") {
        el.href = event.link;
      }
    });
    const dateObj = this.strToDate(event.date);
    const dateFormatted = this.formatDate(dateObj);
    const timeEl = clone.querySelector("time");
    timeEl.innerText = dateFormatted;
    timeEl.setAttribute("datetime", event.date);
    clone.querySelectorAll("slot").forEach((slot) => {
      if (slot.parentNode && event[slot.name]) {
        slot.parentNode.innerText = event[slot.name];
      }
    });
    return clone;
  }
  /**
   * Get a Date object from a string
   * @param {string} dateStr - A date as a string, ideally formatted as 00/00/00
   * @returns {Object} - a Date object
   */
  strToDate(dateStr) {
    const dateStrClean = dateStr.includes("-") ? dateStr.replace(/-/g, "/") : dateStr;
    return new Date(dateStrClean);
  }
  /**
   * Format a Date object to Weekday Month Day
   * @param {Object} - a Date object
   * @returns {string} - a string of the date formatted to Weekday Month Day
   */
  formatDate(date) {
    const dateOptions = { weekday: "long", month: "long", day: "numeric" };
    const dateLong = date.toLocaleDateString("en-US", dateOptions);
    const [weekday, month, day] = dateLong.replace(/,/, "").split(" ");
    const formattedDate = `${weekday} ${month} ${day}`;
    return formattedDate;
  }
}
if ("customElements" in window) {
  customElements.define("nyc-event-card", NYCEventCard);
}
class NYCEventCardList extends HTMLElement {
  connectedCallback() {
    if (this.isConnected) {
      this.setAttribute("role", "list");
    }
  }
  /**
   * Handle incoming js events
   * @param {Object} evt - an Event or CustomEvent object
   */
  handleEvent(evt) {
    if (evt.type === "nyc-csv-complete") {
      try {
        const { data } = evt.detail;
        console.log(data);
        const dataLowerized = data.map(this.lowerize);
        const upcomingEvents = this.filterPastEvents(dataLowerized);
        if (upcomingEvents.length > 0) {
          const eventsEls = upcomingEvents.map(this.buildCardEl);
          this.innerHTML = "";
          this.append(...eventsEls);
        } else {
          this.innerHTML = "<p>There are no recruitment events scheduled at this time.</p>";
        }
      } catch (err) {
        console.error(err);
      }
    }
  }
  /**
   * Create an nyc-event-card element from an AgencyEvent
   * @param {AgencyEvent} event - An AgencyEvent object
   * @returns {HTMLElement} - The nyc-event-card element
   */
  buildCardEl(event) {
    const cardTemplate = NYCEventCard.getTemplate();
    const cardEl = new NYCEventCard().buildEl(event, cardTemplate);
    cardEl.setAttribute("role", "listitem");
    return cardEl;
  }
  /**
   * Filter out events that have passed
   * @param {...AgencyEvent} events - An array of AgencyEvent objects
   * @returns {...AgencyEvent} An array of AgencyEvent objects
   */
  filterPastEvents(events) {
    return events.map((event) => {
      const dateObj = this.strToDate(event.date);
      return {
        event,
        dateObj
      };
    }).filter(({ dateObj }) => this.isDatePast(dateObj)).map(({ event }) => event);
  }
  /**
   * Set Object keys lower cased
   * @param {Object}
   * @returns {Object} - object with keys lower cased
   */
  lowerize(obj) {
    return Object.keys(obj).reduce((acc, k) => {
      acc[k.toLowerCase()] = obj[k];
      return acc;
    }, {});
  }
  /**
   * Check if date has past
   * @param {Object} - A date object to check
   * @returns {boolean} - True if date has past
   */
  isDatePast(date) {
    const today = /* @__PURE__ */ new Date();
    return today < date;
  }
  /**
   * Get a Date object from a string
   * @param {string} dateStr - A date as a string, ideally formatted as 00/00/00
   * @returns {Object} - a Date object
   */
  strToDate(dateStr) {
    const dateStrClean = dateStr.includes("-") ? dateStr.replace(/-/g, "/") : dateStr;
    return new Date(dateStrClean);
  }
}
if ("customElements" in window) {
  customElements.define("nyc-event-card-list", NYCEventCardList);
}
class NYCCsv extends HTMLElement {
  constructor() {
    super();
    this.onCompleteEventName = "nyc-csv-complete";
  }
  async connectedCallback() {
    if (this.isConnected) {
      try {
        const { src } = this.dataset;
        if (!src)
          throw new Error("NYCCsv: No data-src provided, quitting");
        const onCompleteSubscribers = Array.from(
          this.querySelectorAll(`[data-subscribe=${this.onCompleteEventName}]`)
        );
        if (onCompleteSubscribers.length > 0) {
          const csvData = await this.getCsvData(src);
          if (csvData.length > 0) {
            this.onComplete(csvData, onCompleteSubscribers);
          } else {
            console.info("NYCCsv: no rows returned");
          }
        } else {
          console.info("NYCCsv: no subscribers found");
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
  /**
   * Add event listeners for each subscriber and dispatch complete event
   * @param {Array} data - rows of the CSV file
   * @param {Array} subscribers - elements that have subscribed to complete event
   */
  onComplete(data, subscribers) {
    subscribers.forEach((subscriber) => this.addEventListener(this.onCompleteEventName, subscriber));
    return this.dispatchEvent(
      new CustomEvent(this.onCompleteEventName, {
        detail: { data }
      })
    );
  }
  /**
   * Get CSV data from URL using the Papa Parse library
   * @param {string} url - The CSV url
   * @return {Array} Array of CSV rows
   */
  async getCsvData(url2) {
    const papaPromise = (url3) => {
      return new Promise((resolve, reject) => {
        if (!window.Papa)
          reject();
        window.Papa.parse(url3, {
          header: true,
          download: true,
          skipEmptyLines: true,
          complete: resolve,
          error: reject
        });
      });
    };
    try {
      const res = await papaPromise(url2);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }
}
if ("customElements" in window) {
  customElements.define("nyc-csv", NYCCsv);
}
const main = () => {
  try {
    let switchTheme = function(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    };
    const toggleSwitch = document.querySelector("#theme-toggle");
    let currentTheme = localStorage.getItem("theme");
    console.log(currentTheme);
    currentTheme = "dark";
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      if (currentTheme === "dark") {
        toggleSwitch.checked = true;
      }
    }
    toggleSwitch.addEventListener("change", switchTheme, false);
  } catch (e) {
    console.error(e);
  }
};
main();
