!function(){var e=document.querySelector(".form"),n=e.querySelector('input[name="delay"]'),t=e.querySelector('input[name="step"]'),o=e.querySelector('input[name="amount"]');function a(e,n){return new Promise((function(t,o){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}))}e.addEventListener("submit",(function(e){e.preventDefault();for(var i=parseInt(n.value),r=parseInt(t.value),c=parseInt(o.value),u=0;u<c;u++){a(u+1,i).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),i+=r}}))}();
//# sourceMappingURL=03-promises.486e9cc6.js.map