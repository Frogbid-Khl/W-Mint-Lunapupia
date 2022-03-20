(function(){"use strict";var t="loading"in HTMLImageElement.prototype;BX((function(){if(t){var a=document.querySelectorAll("img[data-lazy-img]");a.forEach((function(t){t.src=t.dataset.src;t.removeAttribute("data-src");if(t.dataset.srcset!==undefined){t.srcset=t.dataset.srcset;t.removeAttribute("data-srcset")}}))}}));var a={rootMargin:document.documentElement.clientHeight/2+"px"};var e=new IntersectionObserver(r,a);BX.addCustomEvent("BX.Landing.Block:init",(function(t){e.observe(t.block)}));function r(a){a.forEach((function(a){if(a.isIntersecting){var r=[].slice.call(a.target.querySelectorAll("[data-lazy-img]"));r.forEach((function(e){if(!t){var r=BX.data(e,"src");var n=BX.data(e,"srcset");BX.create("img",{attrs:{src:r,srcset:n?n:""},events:{load:function(){BX.adjust(e,{attrs:{src:r,srcset:n?n:"","data-lazy-src":"","data-src":"","data-srcset":""}});BX.remove(this);var t=new BX.Landing.Event.Block({block:a.target,node:e,data:{src:r}});BX.onCustomEvent("BX.Landing.Lazyload:loadImage",[t])}}})}else{e.addEventListener("load",(function(){var t=new BX.Landing.Event.Block({block:a.target,node:e,data:{src:e.src}});BX.onCustomEvent("BX.Landing.Lazyload:loadImage",[t])}))}}));var n=[].slice.call(a.target.querySelectorAll("[data-lazy-bg]"));n.forEach((function(t){var e=BX.data(t,"bg");var r=BX.data(t,"style");var n=BX.data(t,"src");var s=BX.data(t,"src2x");if(s){var c=s+" 2x"}BX.create("img",{attrs:{src:n,srcset:c?c:""},events:{load:function(){var s=t.getAttribute("style");if(e){var c=[];e.split("|").forEach((function(t){c.push("background-image:"+t)}));s+=c.join(";");t.style.setProperty("background-image",null)}else if(r){s=r}BX.adjust(t,{attrs:{style:s,"data-style":"","data-src":"","data-src2x":""}});BX.remove(this);var o=new BX.Landing.Event.Block({block:a.target,node:t,data:{src:n}});BX.onCustomEvent("BX.Landing.Lazyload:loadImage",[o])}}})}));var s=[].slice.call(a.target.querySelectorAll("[data-lazy-styleimg]"));s.forEach((function(t){var a=BX.data(t,"style");BX.adjust(t,{attrs:{style:a,"data-style":""}})}));e.unobserve(a.target)}}))}})();
//# sourceMappingURL=lazyload.map.js