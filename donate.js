(()=>{"use strict";var e,t={8159:()=>{var e=document.querySelector(".burger-menu-button"),t=document.querySelector(".burger-menu__close"),n=document.querySelector(".page__bg-dark"),a=document.querySelector(".burger-menu");function o(){n.classList.toggle("page__bg-dark_active")}function r(e){e.target.classList.contains("page__bg-dark_active")&&i()}function u(e){"Escape"===e.key&&i()}function i(){o(),a.classList.remove("burger-menu_active"),document.removeEventListener("mousedown",r),document.removeEventListener("keydown",u)}var c=document.querySelector(".donate__bar"),d=document.querySelectorAll(".donate__bar-option"),s=Array.from(d),v=document.querySelector(".donate__bar-input"),l=document.querySelector(".donate__amount-custom-input"),_=document.querySelector(".donate__form");e.addEventListener("click",(function(){o(),a.classList.add("burger-menu_active"),document.addEventListener("mousedown",r),document.addEventListener("keydown",u)})),t.addEventListener("click",i),document.addEventListener("DOMContentLoaded",(function(){l.value="100",s.forEach((function(e){"100"===e.getAttribute("data-amount")?e.classList.add("donate__bar-option_active"):e.classList.remove("donate__bar-option_active")}));var e=0;s.forEach((function(t){t.setAttribute("value",e),e++}))})),c.addEventListener("click",(function(e){e.target.classList.contains("donate__bar-option")&&(v.setAttribute("value",e.target.value),l.value=e.target.getAttribute("data-amount"),s.forEach((function(t){t.getAttribute("value")===e.target.value?t.classList.add("donate__bar-option_active"):t.classList.remove("donate__bar-option_active")})))})),l.addEventListener("input",(function(){s.forEach((function(e){e.getAttribute("data-amount")===l.value?(e.classList.add("donate__bar-option_active"),v.setAttribute("value",e.value)):e.classList.remove("donate__bar-option_active")}))})),_.addEventListener("submit",(function(e){e.preventDefault()}))}},n={};function a(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,n,o,r)=>{if(!n){var u=1/0;for(s=0;s<e.length;s++){for(var[n,o,r]=e[s],i=!0,c=0;c<n.length;c++)(!1&r||u>=r)&&Object.keys(a.O).every((e=>a.O[e](n[c])))?n.splice(c--,1):(i=!1,r<u&&(u=r));if(i){e.splice(s--,1);var d=o();void 0!==d&&(t=d)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[n,o,r]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={697:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[u,i,c]=n,d=0;if(u.some((t=>0!==e[t]))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var s=c(a)}for(t&&t(n);d<u.length;d++)r=u[d],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(s)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),a.O(void 0,[202],(()=>a(1202)));var o=a.O(void 0,[202],(()=>a(8159)));o=a.O(o)})();