(function(){"use strict";try{new window.CustomEvent("bx-test-custom-event",{bubbles:true,cancelable:true})}catch(t){var e=function(e,t){t=t||{};t.bubbles=!!t.bubbles;t.cancelable=!!t.cancelable;var n=document.createEvent("CustomEvent");n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail);var u=n.preventDefault;n.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{get:function(){return true}});u.call(this)};return n};e.prototype=window.Event.prototype;window.CustomEvent=e}})();
//# sourceMappingURL=main.polyfill.customevent.map.js