(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})(function() {
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.textContent = `#--unocss--{layer:__ALL__}#--unocss-layer-start--__ALL__--{start:__ALL__} *,::before,::after{--nyc-rotate:0;--nyc-rotate-x:0;--nyc-rotate-y:0;--nyc-rotate-z:0;--nyc-scale-x:1;--nyc-scale-y:1;--nyc-scale-z:1;--nyc-skew-x:0;--nyc-skew-y:0;--nyc-translate-x:0;--nyc-translate-y:0;--nyc-translate-z:0;--nyc-pan-x: ;--nyc-pan-y: ;--nyc-pinch-zoom: ;--nyc-scroll-snap-strictness:proximity;--nyc-ordinal: ;--nyc-slashed-zero: ;--nyc-numeric-figure: ;--nyc-numeric-spacing: ;--nyc-numeric-fraction: ;--nyc-border-spacing-x:0;--nyc-border-spacing-y:0;--nyc-ring-offset-shadow:0 0 rgba(0,0,0,0);--nyc-ring-shadow:0 0 rgba(0,0,0,0);--nyc-shadow-inset: ;--nyc-shadow:0 0 rgba(0,0,0,0);--nyc-ring-inset: ;--nyc-ring-offset-width:0px;--nyc-ring-offset-color:#fff;--nyc-ring-width:0px;--nyc-ring-color:rgba(147,197,253,0.5);--nyc-blur: ;--nyc-brightness: ;--nyc-contrast: ;--nyc-drop-shadow: ;--nyc-grayscale: ;--nyc-hue-rotate: ;--nyc-invert: ;--nyc-saturate: ;--nyc-sepia: ;--nyc-backdrop-blur: ;--nyc-backdrop-brightness: ;--nyc-backdrop-contrast: ;--nyc-backdrop-grayscale: ;--nyc-backdrop-hue-rotate: ;--nyc-backdrop-invert: ;--nyc-backdrop-opacity: ;--nyc-backdrop-saturate: ;--nyc-backdrop-sepia: ;}::backdrop{--nyc-rotate:0;--nyc-rotate-x:0;--nyc-rotate-y:0;--nyc-rotate-z:0;--nyc-scale-x:1;--nyc-scale-y:1;--nyc-scale-z:1;--nyc-skew-x:0;--nyc-skew-y:0;--nyc-translate-x:0;--nyc-translate-y:0;--nyc-translate-z:0;--nyc-pan-x: ;--nyc-pan-y: ;--nyc-pinch-zoom: ;--nyc-scroll-snap-strictness:proximity;--nyc-ordinal: ;--nyc-slashed-zero: ;--nyc-numeric-figure: ;--nyc-numeric-spacing: ;--nyc-numeric-fraction: ;--nyc-border-spacing-x:0;--nyc-border-spacing-y:0;--nyc-ring-offset-shadow:0 0 rgba(0,0,0,0);--nyc-ring-shadow:0 0 rgba(0,0,0,0);--nyc-shadow-inset: ;--nyc-shadow:0 0 rgba(0,0,0,0);--nyc-ring-inset: ;--nyc-ring-offset-width:0px;--nyc-ring-offset-color:#fff;--nyc-ring-width:0px;--nyc-ring-color:rgba(147,197,253,0.5);--nyc-blur: ;--nyc-brightness: ;--nyc-contrast: ;--nyc-drop-shadow: ;--nyc-grayscale: ;--nyc-hue-rotate: ;--nyc-invert: ;--nyc-saturate: ;--nyc-sepia: ;--nyc-backdrop-blur: ;--nyc-backdrop-brightness: ;--nyc-backdrop-contrast: ;--nyc-backdrop-grayscale: ;--nyc-backdrop-hue-rotate: ;--nyc-backdrop-invert: ;--nyc-backdrop-opacity: ;--nyc-backdrop-saturate: ;--nyc-backdrop-sepia: ;}.i-custom\\:phone{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg width='37' height='36' viewBox='0 0 37 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.6831 3.40079L12.8174 2.75793C13.7889 2.46482 14.8339 2.53529 15.7574 2.95618C16.6808 3.37707 17.4194 4.11962 17.8355 5.04522L19.1637 7.99979C19.5215 8.79573 19.6212 9.68374 19.4487 10.5392C19.2763 11.3947 18.8403 12.1747 18.2019 12.7698L15.8812 14.9336C15.8525 14.9604 15.829 14.9922 15.8118 15.0275C15.5688 15.5238 15.9378 16.8494 17.0937 18.8525C18.3974 21.1102 19.4041 22.0025 19.8708 21.8649L22.9167 20.9328C23.7508 20.6781 24.6437 20.6907 25.4703 20.969C26.2969 21.2473 27.0157 21.7773 27.5259 22.4846L29.4134 25.0985C30.0059 25.9192 30.2804 26.9271 30.1858 27.935C30.0912 28.9428 29.634 29.8821 28.8991 30.5782L27.2752 32.1146C26.7105 32.6495 26.0248 33.0399 25.2766 33.2523C24.5284 33.4648 23.7399 33.4931 22.9784 33.3348C18.4565 32.3936 14.4052 28.7525 10.7898 22.4911C7.17308 16.2258 6.04551 10.8901 7.49837 6.50193C7.74157 5.76728 8.15803 5.10196 8.71257 4.5622C9.2671 4.02243 9.94213 3.62407 10.6831 3.40079ZM11.2411 5.24707C10.7965 5.38098 10.3907 5.61994 10.0579 5.94376C9.72514 6.26757 9.4752 6.66673 9.32922 7.1075C8.07694 10.8888 9.09137 15.6922 12.4599 21.5268C15.8259 27.3575 19.4748 30.6361 23.3705 31.4461C23.8276 31.5411 24.301 31.5241 24.7501 31.3965C25.1992 31.2689 25.6108 31.0344 25.9497 30.7132L27.5722 29.1781C27.9681 28.8033 28.2145 28.2976 28.2655 27.7549C28.3166 27.2122 28.1689 26.6694 27.8499 26.2274L25.9625 23.6122C25.6878 23.2314 25.3009 22.9461 24.8559 22.7962C24.4109 22.6464 23.9302 22.6395 23.4811 22.7765L20.4275 23.7112C18.7381 24.2139 17.1489 22.8061 15.4235 19.8155C13.9617 17.2852 13.4551 15.4569 14.0799 14.1802C14.2008 13.9334 14.3654 13.7109 14.5659 13.5232L16.8867 11.3594C17.2305 11.0389 17.4654 10.6189 17.5583 10.1582C17.6512 9.69742 17.5976 9.21916 17.4048 8.7905L16.0767 5.83722C15.8526 5.33869 15.4548 4.93876 14.9575 4.7121C14.4601 4.48543 13.8973 4.44754 13.3741 4.6055L11.2398 5.24836L11.2411 5.24707Z' fill='currentColor'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg width='37' height='36' viewBox='0 0 37 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.6831 3.40079L12.8174 2.75793C13.7889 2.46482 14.8339 2.53529 15.7574 2.95618C16.6808 3.37707 17.4194 4.11962 17.8355 5.04522L19.1637 7.99979C19.5215 8.79573 19.6212 9.68374 19.4487 10.5392C19.2763 11.3947 18.8403 12.1747 18.2019 12.7698L15.8812 14.9336C15.8525 14.9604 15.829 14.9922 15.8118 15.0275C15.5688 15.5238 15.9378 16.8494 17.0937 18.8525C18.3974 21.1102 19.4041 22.0025 19.8708 21.8649L22.9167 20.9328C23.7508 20.6781 24.6437 20.6907 25.4703 20.969C26.2969 21.2473 27.0157 21.7773 27.5259 22.4846L29.4134 25.0985C30.0059 25.9192 30.2804 26.9271 30.1858 27.935C30.0912 28.9428 29.634 29.8821 28.8991 30.5782L27.2752 32.1146C26.7105 32.6495 26.0248 33.0399 25.2766 33.2523C24.5284 33.4648 23.7399 33.4931 22.9784 33.3348C18.4565 32.3936 14.4052 28.7525 10.7898 22.4911C7.17308 16.2258 6.04551 10.8901 7.49837 6.50193C7.74157 5.76728 8.15803 5.10196 8.71257 4.5622C9.2671 4.02243 9.94213 3.62407 10.6831 3.40079ZM11.2411 5.24707C10.7965 5.38098 10.3907 5.61994 10.0579 5.94376C9.72514 6.26757 9.4752 6.66673 9.32922 7.1075C8.07694 10.8888 9.09137 15.6922 12.4599 21.5268C15.8259 27.3575 19.4748 30.6361 23.3705 31.4461C23.8276 31.5411 24.301 31.5241 24.7501 31.3965C25.1992 31.2689 25.6108 31.0344 25.9497 30.7132L27.5722 29.1781C27.9681 28.8033 28.2145 28.2976 28.2655 27.7549C28.3166 27.2122 28.1689 26.6694 27.8499 26.2274L25.9625 23.6122C25.6878 23.2314 25.3009 22.9461 24.8559 22.7962C24.4109 22.6464 23.9302 22.6395 23.4811 22.7765L20.4275 23.7112C18.7381 24.2139 17.1489 22.8061 15.4235 19.8155C13.9617 17.2852 13.4551 15.4569 14.0799 14.1802C14.2008 13.9334 14.3654 13.7109 14.5659 13.5232L16.8867 11.3594C17.2305 11.0389 17.4654 10.6189 17.5583 10.1582C17.6512 9.69742 17.5976 9.21916 17.4048 8.7905L16.0767 5.83722C15.8526 5.33869 15.4548 4.93876 14.9575 4.7121C14.4601 4.48543 13.8973 4.44754 13.3741 4.6055L11.2398 5.24836L11.2411 5.24707Z' fill='currentColor'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg width='37' height='36' viewBox='0 0 37 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.6831 3.40079L12.8174 2.75793C13.7889 2.46482 14.8339 2.53529 15.7574 2.95618C16.6808 3.37707 17.4194 4.11962 17.8355 5.04522L19.1637 7.99979C19.5215 8.79573 19.6212 9.68374 19.4487 10.5392C19.2763 11.3947 18.8403 12.1747 18.2019 12.7698L15.8812 14.9336C15.8525 14.9604 15.829 14.9922 15.8118 15.0275C15.5688 15.5238 15.9378 16.8494 17.0937 18.8525C18.3974 21.1102 19.4041 22.0025 19.8708 21.8649L22.9167 20.9328C23.7508 20.6781 24.6437 20.6907 25.4703 20.969C26.2969 21.2473 27.0157 21.7773 27.5259 22.4846L29.4134 25.0985C30.0059 25.9192 30.2804 26.9271 30.1858 27.935C30.0912 28.9428 29.634 29.8821 28.8991 30.5782L27.2752 32.1146C26.7105 32.6495 26.0248 33.0399 25.2766 33.2523C24.5284 33.4648 23.7399 33.4931 22.9784 33.3348C18.4565 32.3936 14.4052 28.7525 10.7898 22.4911C7.17308 16.2258 6.04551 10.8901 7.49837 6.50193C7.74157 5.76728 8.15803 5.10196 8.71257 4.5622C9.2671 4.02243 9.94213 3.62407 10.6831 3.40079ZM11.2411 5.24707C10.7965 5.38098 10.3907 5.61994 10.0579 5.94376C9.72514 6.26757 9.4752 6.66673 9.32922 7.1075C8.07694 10.8888 9.09137 15.6922 12.4599 21.5268C15.8259 27.3575 19.4748 30.6361 23.3705 31.4461C23.8276 31.5411 24.301 31.5241 24.7501 31.3965C25.1992 31.2689 25.6108 31.0344 25.9497 30.7132L27.5722 29.1781C27.9681 28.8033 28.2145 28.2976 28.2655 27.7549C28.3166 27.2122 28.1689 26.6694 27.8499 26.2274L25.9625 23.6122C25.6878 23.2314 25.3009 22.9461 24.8559 22.7962C24.4109 22.6464 23.9302 22.6395 23.4811 22.7765L20.4275 23.7112C18.7381 24.2139 17.1489 22.8061 15.4235 19.8155C13.9617 17.2852 13.4551 15.4569 14.0799 14.1802C14.2008 13.9334 14.3654 13.7109 14.5659 13.5232L16.8867 11.3594C17.2305 11.0389 17.4654 10.6189 17.5583 10.1582C17.6512 9.69742 17.5976 9.21916 17.4048 8.7905L16.0767 5.83722C15.8526 5.33869 15.4548 4.93876 14.9575 4.7121C14.4601 4.48543 13.8973 4.44754 13.3741 4.6055L11.2398 5.24836L11.2411 5.24707Z' fill='currentColor'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-mi\\:filter{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2h1.17zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h7.17zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h1.17z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2h1.17zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h7.17zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h1.17z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2h1.17zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h7.17zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h1.17z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:alert-fill{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m12.865 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.473a1 1 0 0 1-.866-1.5L11.133 3a1 1 0 0 1 1.732 0Zm-1.866 13v2h2v-2h-2Zm0-7v5h2V9h-2Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m12.865 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.473a1 1 0 0 1-.866-1.5L11.133 3a1 1 0 0 1 1.732 0Zm-1.866 13v2h2v-2h-2Zm0-7v5h2V9h-2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m12.865 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.473a1 1 0 0 1-.866-1.5L11.133 3a1 1 0 0 1 1.732 0Zm-1.866 13v2h2v-2h-2Zm0-7v5h2V9h-2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:anchor-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M2.05 11H7v2H4.062A8.004 8.004 0 0 0 11 19.938V9.874A4.002 4.002 0 0 1 12 2a4 4 0 0 1 1 7.874v10.064A8.004 8.004 0 0 0 19.938 13H17v-2h4.95c.033.329.05.662.05 1c0 5.523-4.477 10-10 10S2 17.523 2 12c0-.338.017-.671.05-1ZM12 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M2.05 11H7v2H4.062A8.004 8.004 0 0 0 11 19.938V9.874A4.002 4.002 0 0 1 12 2a4 4 0 0 1 1 7.874v10.064A8.004 8.004 0 0 0 19.938 13H17v-2h4.95c.033.329.05.662.05 1c0 5.523-4.477 10-10 10S2 17.523 2 12c0-.338.017-.671.05-1ZM12 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M2.05 11H7v2H4.062A8.004 8.004 0 0 0 11 19.938V9.874A4.002 4.002 0 0 1 12 2a4 4 0 0 1 1 7.874v10.064A8.004 8.004 0 0 0 19.938 13H17v-2h4.95c.033.329.05.662.05 1c0 5.523-4.477 10-10 10S2 17.523 2 12c0-.338.017-.671.05-1ZM12 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:arrow-down-s-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222l4.95 4.95Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222l4.95 4.95Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222l4.95 4.95Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:arrow-left-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M7.828 11H20v2H7.828l5.364 5.364l-1.414 1.414L4 12l7.778-7.778l1.414 1.414L7.828 11Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M7.828 11H20v2H7.828l5.364 5.364l-1.414 1.414L4 12l7.778-7.778l1.414 1.414L7.828 11Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M7.828 11H20v2H7.828l5.364 5.364l-1.414 1.414L4 12l7.778-7.778l1.414 1.414L7.828 11Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:arrow-left-s-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414l-4.95 4.95Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414l-4.95 4.95Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414l-4.95 4.95Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:arrow-right-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2h12.172Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2h12.172Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2h12.172Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:book-2-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M21 18H6a1 1 0 1 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16ZM5 16.05c.162-.033.329-.05.5-.05H19V4H5v12.05ZM16 9H8V7h8v2Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M21 18H6a1 1 0 1 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16ZM5 16.05c.162-.033.329-.05.5-.05H19V4H5v12.05ZM16 9H8V7h8v2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M21 18H6a1 1 0 1 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16ZM5 16.05c.162-.033.329-.05.5-.05H19V4H5v12.05ZM16 9H8V7h8v2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:building-2-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M3 19V5.7a1 1 0 0 1 .658-.94l9.671-3.516a.5.5 0 0 1 .671.47v4.953l6.316 2.105a1 1 0 0 1 .684.949V19h2v2H1v-2h2Zm2 0h7V3.856L5 6.4V19Zm14 0v-8.558l-5-1.667V19h5Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M3 19V5.7a1 1 0 0 1 .658-.94l9.671-3.516a.5.5 0 0 1 .671.47v4.953l6.316 2.105a1 1 0 0 1 .684.949V19h2v2H1v-2h2Zm2 0h7V3.856L5 6.4V19Zm14 0v-8.558l-5-1.667V19h5Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M3 19V5.7a1 1 0 0 1 .658-.94l9.671-3.516a.5.5 0 0 1 .671.47v4.953l6.316 2.105a1 1 0 0 1 .684.949V19h2v2H1v-2h2Zm2 0h7V3.856L5 6.4V19Zm14 0v-8.558l-5-1.667V19h5Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:calendar-event-fill{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2ZM4 9v10h16V9H4Zm2 4h5v4H6v-4Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2ZM4 9v10h16V9H4Zm2 4h5v4H6v-4Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2ZM4 9v10h16V9H4Zm2 4h5v4H6v-4Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:check-fill{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m10 15.17l9.193-9.191l1.414 1.414l-10.606 10.606l-6.364-6.364l1.414-1.414l4.95 4.95Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m10 15.17l9.193-9.191l1.414 1.414l-10.606 10.606l-6.364-6.364l1.414-1.414l4.95 4.95Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m10 15.17l9.193-9.191l1.414 1.414l-10.606 10.606l-6.364-6.364l1.414-1.414l4.95 4.95Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:checkbox-circle-fill{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm-.997-6l7.07-7.071l-1.413-1.414l-5.657 5.657l-2.829-2.829l-1.414 1.414L11.003 16Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm-.997-6l7.07-7.071l-1.413-1.414l-5.657 5.657l-2.829-2.829l-1.414 1.414L11.003 16Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm-.997-6l7.07-7.071l-1.413-1.414l-5.657 5.657l-2.829-2.829l-1.414 1.414L11.003 16Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:close-fill{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m12 10.586l4.95-4.95l1.415 1.415l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.95 4.95l-1.413-1.415l4.95-4.95l-4.95-4.95L7.05 5.638l4.95 4.95Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m12 10.586l4.95-4.95l1.415 1.415l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.95 4.95l-1.413-1.415l4.95-4.95l-4.95-4.95L7.05 5.638l4.95 4.95Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m12 10.586l4.95-4.95l1.415 1.415l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.95 4.95l-1.413-1.415l4.95-4.95l-4.95-4.95L7.05 5.638l4.95 4.95Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:community-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1ZM9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2v4Zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754V19Zm2-8h2v2h-2v-2Zm0 4h2v2h-2v-2Zm0-8h2v2h-2V7Zm-4 0h2v2h-2V7Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1ZM9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2v4Zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754V19Zm2-8h2v2h-2v-2Zm0 4h2v2h-2v-2Zm0-8h2v2h-2V7Zm-4 0h2v2h-2V7Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1ZM9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2v4Zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754V19Zm2-8h2v2h-2v-2Zm0 4h2v2h-2v-2Zm0-8h2v2h-2V7Zm-4 0h2v2h-2V7Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:computer-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M4 16h16V5H4v11Zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.992V4.008C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.985c0 .557-.455 1.008-.992 1.008H13Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M4 16h16V5H4v11Zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.992V4.008C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.985c0 .557-.455 1.008-.992 1.008H13Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M4 16h16V5H4v11Zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.992V4.008C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.985c0 .557-.455 1.008-.992 1.008H13Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:contacts-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M19 7h5v2h-5V7Zm-2 5h7v2h-7v-2Zm3 5h4v2h-4v-2ZM2 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0H2Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6Zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M19 7h5v2h-5V7Zm-2 5h7v2h-7v-2Zm3 5h4v2h-4v-2ZM2 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0H2Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6Zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M19 7h5v2h-5V7Zm-2 5h7v2h-7v-2Zm3 5h4v2h-4v-2ZM2 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0H2Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6Zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:currency-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M17.005 16.003h2v-12h-10v2h8v10Zm0 2v3c0 .552-.45 1-1.007 1H4.012a1.001 1.001 0 0 1-1.007-1l.002-14c0-.552.45-1 1.007-1h2.99v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3Zm-11.998-10l-.002 12h10v-12H5.007Zm1.998 8h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 0 1 0-5h.5v-1h2v1h2v2h-4.5a.5.5 0 0 0 0 1h3a2.5 2.5 0 0 1 0 5h-.5v1h-2v-1h-2v-2Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M17.005 16.003h2v-12h-10v2h8v10Zm0 2v3c0 .552-.45 1-1.007 1H4.012a1.001 1.001 0 0 1-1.007-1l.002-14c0-.552.45-1 1.007-1h2.99v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3Zm-11.998-10l-.002 12h10v-12H5.007Zm1.998 8h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 0 1 0-5h.5v-1h2v1h2v2h-4.5a.5.5 0 0 0 0 1h3a2.5 2.5 0 0 1 0 5h-.5v1h-2v-1h-2v-2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M17.005 16.003h2v-12h-10v2h8v10Zm0 2v3c0 .552-.45 1-1.007 1H4.012a1.001 1.001 0 0 1-1.007-1l.002-14c0-.552.45-1 1.007-1h2.99v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3Zm-11.998-10l-.002 12h10v-12H5.007Zm1.998 8h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 0 1 0-5h.5v-1h2v1h2v2h-4.5a.5.5 0 0 0 0 1h3a2.5 2.5 0 0 1 0 5h-.5v1h-2v-1h-2v-2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:download-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M3 19h18v2H3v-2Zm10-5.828L19.071 7.1l1.414 1.415L12 17L3.515 8.515L4.929 7.1L11 13.172V2h2v11.172Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M3 19h18v2H3v-2Zm10-5.828L19.071 7.1l1.414 1.415L12 17L3.515 8.515L4.929 7.1L11 13.172V2h2v11.172Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M3 19h18v2H3v-2Zm10-5.828L19.071 7.1l1.414 1.415L12 17L3.515 8.515L4.929 7.1L11 13.172V2h2v11.172Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:edit-2-fill{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M9.243 18.996H21v2H3v-4.242l9.9-9.9l4.242 4.243l-7.9 7.9Zm5.07-13.556l2.122-2.121a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.414l-2.122 2.122l-4.242-4.243Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M9.243 18.996H21v2H3v-4.242l9.9-9.9l4.242 4.243l-7.9 7.9Zm5.07-13.556l2.122-2.121a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.414l-2.122 2.122l-4.242-4.243Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M9.243 18.996H21v2H3v-4.242l9.9-9.9l4.242 4.243l-7.9 7.9Zm5.07-13.556l2.122-2.121a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.414l-2.122 2.122l-4.242-4.243Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:external-link-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6Zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3h8Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6Zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3h8Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6Zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3h8Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:file-3-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8Zm-2 1h-5V4H5v16h14V9Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8Zm-2 1h-5V4H5v16h14V9Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8Zm-2 1h-5V4H5v16h14V9Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:file-code-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M15 4H5v16h14V8h-4V4ZM3 2.992C3 2.444 3.447 2 3.998 2H16l5 5v13.992A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992ZM17.657 12l-3.536 3.536l-1.414-1.415L14.828 12l-2.12-2.121l1.413-1.415L17.657 12ZM6.343 12L9.88 8.464l1.414 1.415L9.172 12l2.12 2.121l-1.413 1.415L6.343 12Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M15 4H5v16h14V8h-4V4ZM3 2.992C3 2.444 3.447 2 3.998 2H16l5 5v13.992A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992ZM17.657 12l-3.536 3.536l-1.414-1.415L14.828 12l-2.12-2.121l1.413-1.415L17.657 12ZM6.343 12L9.88 8.464l1.414 1.415L9.172 12l2.12 2.121l-1.413 1.415L6.343 12Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M15 4H5v16h14V8h-4V4ZM3 2.992C3 2.444 3.447 2 3.998 2H16l5 5v13.992A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992ZM17.657 12l-3.536 3.536l-1.414-1.415L14.828 12l-2.12-2.121l1.413-1.415L17.657 12ZM6.343 12L9.88 8.464l1.414 1.415L9.172 12l2.12 2.121l-1.413 1.415L6.343 12Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:file-edit-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m21 6.757l-2 2V4h-9v5H5v11h14v-2.757l2-2v5.765a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6.003-6h10.995C20.55 2 21 2.455 21 2.992v3.765Zm.778 2.05l1.414 1.415L15.414 18l-1.416-.002l.002-1.412l7.778-7.778Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m21 6.757l-2 2V4h-9v5H5v11h14v-2.757l2-2v5.765a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6.003-6h10.995C20.55 2 21 2.455 21 2.992v3.765Zm.778 2.05l1.414 1.415L15.414 18l-1.416-.002l.002-1.412l7.778-7.778Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m21 6.757l-2 2V4h-9v5H5v11h14v-2.757l2-2v5.765a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6.003-6h10.995C20.55 2 21 2.455 21 2.992v3.765Zm.778 2.05l1.414 1.415L15.414 18l-1.416-.002l.002-1.412l7.778-7.778Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:group-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M2 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0H2Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6Zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4Zm8.284 3.703A8.002 8.002 0 0 1 23 22h-2a6.001 6.001 0 0 0-3.537-5.473l.82-1.824Zm-.688-11.29A5.5 5.5 0 0 1 21 8.5a5.499 5.499 0 0 1-5 5.478v-2.013a3.5 3.5 0 0 0 1.041-6.609l.555-1.943Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M2 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0H2Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6Zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4Zm8.284 3.703A8.002 8.002 0 0 1 23 22h-2a6.001 6.001 0 0 0-3.537-5.473l.82-1.824Zm-.688-11.29A5.5 5.5 0 0 1 21 8.5a5.499 5.499 0 0 1-5 5.478v-2.013a3.5 3.5 0 0 0 1.041-6.609l.555-1.943Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M2 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0H2Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6Zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4Zm8.284 3.703A8.002 8.002 0 0 1 23 22h-2a6.001 6.001 0 0 0-3.537-5.473l.82-1.824Zm-.688-11.29A5.5 5.5 0 0 1 21 8.5a5.499 5.499 0 0 1-5 5.478v-2.013a3.5 3.5 0 0 0 1.041-6.609l.555-1.943Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:home-gear-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1ZM6 19h12V9.158l-6-5.455l-6 5.455V19Zm2.591-5.191a3.508 3.508 0 0 1 0-1.622l-.991-.572l1-1.732l.991.573a3.494 3.494 0 0 1 1.404-.812V8.5h2v1.144c.532.159 1.01.44 1.404.812l.991-.573l1 1.732l-.991.572a3.508 3.508 0 0 1 0 1.622l.991.572l-1 1.731l-.991-.572a3.494 3.494 0 0 1-1.404.811v1.145h-2V16.35a3.495 3.495 0 0 1-1.404-.811l-.991.573l-1-1.732l.991-.572Zm3.404.688a1.5 1.5 0 1 0 0-2.998a1.5 1.5 0 0 0 0 2.998Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1ZM6 19h12V9.158l-6-5.455l-6 5.455V19Zm2.591-5.191a3.508 3.508 0 0 1 0-1.622l-.991-.572l1-1.732l.991.573a3.494 3.494 0 0 1 1.404-.812V8.5h2v1.144c.532.159 1.01.44 1.404.812l.991-.573l1 1.732l-.991.572a3.508 3.508 0 0 1 0 1.622l.991.572l-1 1.731l-.991-.572a3.494 3.494 0 0 1-1.404.811v1.145h-2V16.35a3.495 3.495 0 0 1-1.404-.811l-.991.573l-1-1.732l.991-.572Zm3.404.688a1.5 1.5 0 1 0 0-2.998a1.5 1.5 0 0 0 0 2.998Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1ZM6 19h12V9.158l-6-5.455l-6 5.455V19Zm2.591-5.191a3.508 3.508 0 0 1 0-1.622l-.991-.572l1-1.732l.991.573a3.494 3.494 0 0 1 1.404-.812V8.5h2v1.144c.532.159 1.01.44 1.404.812l.991-.573l1 1.732l-.991.572a3.508 3.508 0 0 1 0 1.622l.991.572l-1 1.731l-.991-.572a3.494 3.494 0 0 1-1.404.811v1.145h-2V16.35a3.495 3.495 0 0 1-1.404-.811l-.991.573l-1-1.732l.991-.572Zm3.404.688a1.5 1.5 0 1 0 0-2.998a1.5 1.5 0 0 0 0 2.998Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:hospital-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M8 20v-6h8v6h3V4H5v16h3Zm2 0h4v-4h-4v4Zm11 0h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v17ZM11 8V6h2v2h2v2h-2v2h-2v-2H9V8h2Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M8 20v-6h8v6h3V4H5v16h3Zm2 0h4v-4h-4v4Zm11 0h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v17ZM11 8V6h2v2h2v2h-2v2h-2v-2H9V8h2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M8 20v-6h8v6h3V4H5v16h3Zm2 0h4v-4h-4v4Zm11 0h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v17ZM11 8V6h2v2h2v2h-2v2h-2v-2H9V8h2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:information-fill{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm-1-11v6h2v-6h-2Zm0-4v2h2V7h-2Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm-1-11v6h2v-6h-2Zm0-4v2h2V7h-2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm-1-11v6h2v-6h-2Zm0-4v2h2V7h-2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:information-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16ZM11 7h2v2h-2V7Zm0 4h2v6h-2v-6Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16ZM11 7h2v2h-2V7Zm0 4h2v6h-2v-6Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16ZM11 7h2v2h-2V7Zm0 4h2v6h-2v-6Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:mail-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238ZM4.511 5l7.55 6.662L19.502 5H4.511Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238ZM4.511 5l7.55 6.662L19.502 5H4.511Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238ZM4.511 5l7.55 6.662L19.502 5H4.511Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:mail-send-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M21 3a1 1 0 0 1 1 1v16.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2l-10-9V4a1 1 0 0 1 1-1h18ZM8 15v2H0v-2h8Zm-3-5v2H0v-2h5Zm14.566-5H4.434L12 11.81L19.566 5Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M21 3a1 1 0 0 1 1 1v16.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2l-10-9V4a1 1 0 0 1 1-1h18ZM8 15v2H0v-2h8Zm-3-5v2H0v-2h5Zm14.566-5H4.434L12 11.81L19.566 5Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M21 3a1 1 0 0 1 1 1v16.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2l-10-9V4a1 1 0 0 1 1-1h18ZM8 15v2H0v-2h8Zm-3-5v2H0v-2h5Zm14.566-5H4.434L12 11.81L19.566 5Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:mail-unread-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M16.1 3a5.022 5.022 0 0 0 0 2H4.511l7.55 6.662l5.049-4.52c.426.527.958.966 1.563 1.285l-6.601 5.911L4 7.216V19h16V8.9a5.022 5.022 0 0 0 2 0V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13.1ZM21 1a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M16.1 3a5.022 5.022 0 0 0 0 2H4.511l7.55 6.662l5.049-4.52c.426.527.958.966 1.563 1.285l-6.601 5.911L4 7.216V19h16V8.9a5.022 5.022 0 0 0 2 0V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13.1ZM21 1a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M16.1 3a5.022 5.022 0 0 0 0 2H4.511l7.55 6.662l5.049-4.52c.426.527.958.966 1.563 1.285l-6.601 5.911L4 7.216V19h16V8.9a5.022 5.022 0 0 0 2 0V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13.1ZM21 1a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:menu-fill,.i-ri\\:menu-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:message-2-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455Zm-.692-2H20V5H4v13.385L5.763 17ZM11 10h2v2h-2v-2Zm-4 0h2v2H7v-2Zm8 0h2v2h-2v-2Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455Zm-.692-2H20V5H4v13.385L5.763 17ZM11 10h2v2h-2v-2Zm-4 0h2v2H7v-2Zm8 0h2v2h-2v-2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455Zm-.692-2H20V5H4v13.385L5.763 17ZM11 10h2v2h-2v-2Zm-4 0h2v2H7v-2Zm8 0h2v2h-2v-2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:road-map-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M4 6.143v12.824l5.065-2.17l6 3L20 17.68V4.857l1.303-.558a.5.5 0 0 1 .697.46V19l-7 3l-6-3l-6.303 2.701a.5.5 0 0 1-.697-.46V7l2-.857Zm12.243 5.1L12 15.485l-4.243-4.242a6 6 0 1 1 8.486 0ZM12 12.657l2.828-2.829a4 4 0 1 0-5.656 0L12 12.657Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M4 6.143v12.824l5.065-2.17l6 3L20 17.68V4.857l1.303-.558a.5.5 0 0 1 .697.46V19l-7 3l-6-3l-6.303 2.701a.5.5 0 0 1-.697-.46V7l2-.857Zm12.243 5.1L12 15.485l-4.243-4.242a6 6 0 1 1 8.486 0ZM12 12.657l2.828-2.829a4 4 0 1 0-5.656 0L12 12.657Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M4 6.143v12.824l5.065-2.17l6 3L20 17.68V4.857l1.303-.558a.5.5 0 0 1 .697.46V19l-7 3l-6-3l-6.303 2.701a.5.5 0 0 1-.697-.46V7l2-.857Zm12.243 5.1L12 15.485l-4.243-4.242a6 6 0 1 1 8.486 0ZM12 12.657l2.828-2.829a4 4 0 1 0-5.656 0L12 12.657Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:save-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M7 19v-6h10v6h2V7.828L16.172 5H5v14h2ZM4 3h13l4 4v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm5 12v4h6v-4H9Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M7 19v-6h10v6h2V7.828L16.172 5H5v14h2ZM4 3h13l4 4v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm5 12v4h6v-4H9Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M7 19v-6h10v6h2V7.828L16.172 5H5v14h2ZM4 3h13l4 4v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm5 12v4h6v-4H9Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:scales-3-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12.998 2v1.278l5 1.668l3.633-1.21l.632 1.896l-3.031 1.011l3.095 8.512A5.983 5.983 0 0 1 17.998 17a5.983 5.983 0 0 1-4.328-1.845l3.094-8.512l-3.766-1.256V19h4v2h-10v-2h4V5.387L7.232 6.643l3.095 8.512A5.983 5.983 0 0 1 6 17a5.983 5.983 0 0 1-4.33-1.845l3.095-8.512l-3.03-1.01l.632-1.898L6 4.945l4.999-1.667V2h2Zm5 7.103l-1.958 5.386a3.982 3.982 0 0 0 1.959.511c.7 0 1.37-.18 1.958-.51l-1.959-5.387Zm-12 0L4.04 14.489A3.982 3.982 0 0 0 5.999 15c.7 0 1.37-.18 1.958-.51L5.999 9.102Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12.998 2v1.278l5 1.668l3.633-1.21l.632 1.896l-3.031 1.011l3.095 8.512A5.983 5.983 0 0 1 17.998 17a5.983 5.983 0 0 1-4.328-1.845l3.094-8.512l-3.766-1.256V19h4v2h-10v-2h4V5.387L7.232 6.643l3.095 8.512A5.983 5.983 0 0 1 6 17a5.983 5.983 0 0 1-4.33-1.845l3.095-8.512l-3.03-1.01l.632-1.898L6 4.945l4.999-1.667V2h2Zm5 7.103l-1.958 5.386a3.982 3.982 0 0 0 1.959.511c.7 0 1.37-.18 1.958-.51l-1.959-5.387Zm-12 0L4.04 14.489A3.982 3.982 0 0 0 5.999 15c.7 0 1.37-.18 1.958-.51L5.999 9.102Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M12.998 2v1.278l5 1.668l3.633-1.21l.632 1.896l-3.031 1.011l3.095 8.512A5.983 5.983 0 0 1 17.998 17a5.983 5.983 0 0 1-4.328-1.845l3.094-8.512l-3.766-1.256V19h4v2h-10v-2h4V5.387L7.232 6.643l3.095 8.512A5.983 5.983 0 0 1 6 17a5.983 5.983 0 0 1-4.33-1.845l3.095-8.512l-3.03-1.01l.632-1.898L6 4.945l4.999-1.667V2h2Zm5 7.103l-1.958 5.386a3.982 3.982 0 0 0 1.959.511c.7 0 1.37-.18 1.958-.51l-1.959-5.387Zm-12 0L4.04 14.489A3.982 3.982 0 0 0 5.999 15c.7 0 1.37-.18 1.958-.51L5.999 9.102Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:search-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617Zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617Zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617Zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:shield-star-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05L5 4.604ZM3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976ZM12 13.5l-2.939 1.545l.561-3.272l-2.377-2.318l3.285-.478L12 6l1.47 2.977l3.285.478l-2.377 2.318l.56 3.272L12 13.5Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05L5 4.604ZM3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976ZM12 13.5l-2.939 1.545l.561-3.272l-2.377-2.318l3.285-.478L12 6l1.47 2.977l3.285.478l-2.377 2.318l.56 3.272L12 13.5Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05L5 4.604ZM3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976ZM12 13.5l-2.939 1.545l.561-3.272l-2.377-2.318l3.285-.478L12 6l1.47 2.977l3.285.478l-2.377 2.318l.56 3.272L12 13.5Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:smartphone-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M7 4v16h10V4H7ZM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm6 15a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M7 4v16h10V4H7ZM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm6 15a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M7 4v16h10V4H7ZM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm6 15a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:table-2{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M13 10v4h6v-4h-6Zm-2 0H5v4h6v-4Zm2 9h6v-3h-6v3Zm-2 0v-3H5v3h6Zm2-14v3h6V5h-6Zm-2 0H5v3h6V5ZM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M13 10v4h6v-4h-6Zm-2 0H5v4h6v-4Zm2 9h6v-3h-6v3Zm-2 0v-3H5v3h6Zm2-14v3h6V5h-6Zm-2 0H5v3h6V5ZM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M13 10v4h6v-4h-6Zm-2 0H5v4h6v-4Zm2 9h6v-3h-6v3Zm-2 0v-3H5v3h6Zm2-14v3h6V5h-6Zm-2 0H5v3h6V5ZM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:upload-cloud-2-line{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m12 12.586l4.243 4.242l-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83l-1.415-1.415L12 12.586ZM12 2a7.001 7.001 0 0 1 6.954 6.194A5.5 5.5 0 0 1 18 18.978v-2.014a3.5 3.5 0 1 0-1.111-6.91a5 5 0 1 0-9.777 0a3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m12 12.586l4.243 4.242l-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83l-1.415-1.415L12 12.586ZM12 2a7.001 7.001 0 0 1 6.954 6.194A5.5 5.5 0 0 1 18 18.978v-2.014a3.5 3.5 0 1 0-1.111-6.91a5 5 0 1 0-9.777 0a3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m12 12.586l4.243 4.242l-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83l-1.415-1.415L12 12.586ZM12 2a7.001 7.001 0 0 1 6.954 6.194A5.5 5.5 0 0 1 18 18.978v-2.014a3.5 3.5 0 1 0-1.111-6.91a5 5 0 1 0-9.777 0a3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.i-ri\\:walk-fill{--nyc-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m7.617 8.712l3.205-2.328A1.995 1.995 0 0 1 12.065 6a2.616 2.616 0 0 1 2.427 1.82c.186.583.356.977.51 1.181A4.992 4.992 0 0 0 19 11v2a6.986 6.986 0 0 1-5.401-2.547l-.698 3.956l2.061 1.729l2.223 6.108l-1.88.684l-2.039-5.604l-3.39-2.845a2 2 0 0 1-.714-1.904l.509-2.885l-.677.492l-2.127 2.928l-1.618-1.176L7.6 8.7l.017.012ZM13.5 5.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-2.97 13.181l-3.214 3.83l-1.532-1.285l2.975-3.546l.746-2.18l1.791 1.5l-.766 1.681Z'/%3E%3C/svg%3E");-webkit-mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m7.617 8.712l3.205-2.328A1.995 1.995 0 0 1 12.065 6a2.616 2.616 0 0 1 2.427 1.82c.186.583.356.977.51 1.181A4.992 4.992 0 0 0 19 11v2a6.986 6.986 0 0 1-5.401-2.547l-.698 3.956l2.061 1.729l2.223 6.108l-1.88.684l-2.039-5.604l-3.39-2.845a2 2 0 0 1-.714-1.904l.509-2.885l-.677.492l-2.127 2.928l-1.618-1.176L7.6 8.7l.017.012ZM13.5 5.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-2.97 13.181l-3.214 3.83l-1.532-1.285l2.975-3.546l.746-2.18l1.791 1.5l-.766 1.681Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m7.617 8.712l3.205-2.328A1.995 1.995 0 0 1 12.065 6a2.616 2.616 0 0 1 2.427 1.82c.186.583.356.977.51 1.181A4.992 4.992 0 0 0 19 11v2a6.986 6.986 0 0 1-5.401-2.547l-.698 3.956l2.061 1.729l2.223 6.108l-1.88.684l-2.039-5.604l-3.39-2.845a2 2 0 0 1-.714-1.904l.509-2.885l-.677.492l-2.127 2.928l-1.618-1.176L7.6 8.7l.017.012ZM13.5 5.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-2.97 13.181l-3.214 3.83l-1.532-1.285l2.975-3.546l.746-2.18l1.791 1.5l-.766 1.681Z'/%3E%3C/svg%3E") no-repeat;-webkit-mask:var(--nyc-icon) no-repeat;mask:var(--nyc-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}.mb-0{margin-bottom:0;}.mr-2{margin-right:0.5rem;}.mr-auto{margin-right:auto;}.ms-2{margin-left:0.5rem;}.max-w-xl{max-width:36rem;}.w-full{width:100%;}.flex{display:flex;}.grow{flex-grow:1;}.flex-col{flex-direction:column;}.items-center{align-items:center;}.justify-between{justify-content:space-between;}.gap-2{grid-gap:0.5rem;gap:0.5rem;}.border-b-2{border-bottom-width:2px;}.border-current{border-color:currentColor;}.border-solid{border-style:solid;}.p-1{padding:0.25rem;}.p-2{padding:0.5rem;}.p-4{padding:1rem;}.font-bold{font-weight:700;} #--unocss-layer-end--__ALL__--{end:__ALL__}`;
  document.head.appendChild(__vite_style__);
  const __uno = "";
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
      const img = event && event.image || "";
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
<div class="card__media">
<img src="./img/poc-1/cards/${img}">
</div>
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
      const today = new Date();
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
      const currentTheme = localStorage.getItem("theme");
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
});
