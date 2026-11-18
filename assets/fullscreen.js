// Adds a small full screen button (icon only) to the corner of a simulation page.
// Each sim loads it with one line just before </body>:
//   <script src="../../assets/fullscreen.js" defer></script>
(function(){
  var d=document, el=d.documentElement;
  var req=el.requestFullscreen||el.webkitRequestFullscreen;
  if(!req||window.self!==window.top)return; // e.g. iPhone Safari, or shown inside another page
  var exit=d.exitFullscreen||d.webkitExitFullscreen;
  function cur(){return d.fullscreenElement||d.webkitFullscreenElement;}
  var css=d.createElement("style");
  css.textContent="#fs-btn{position:fixed;right:10px;bottom:10px;z-index:2147483000;display:flex;align-items:center;justify-content:center;"+
    "width:34px;height:34px;padding:0;border:1px solid #c9c9c6;border-radius:8px;background:rgba(255,255,255,.92);color:#1d1d1f;"+
    "font:600 13px/1 system-ui,-apple-system,'Segoe UI',sans-serif;cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,.15);opacity:.75}"+
    "#fs-btn:hover,#fs-btn:focus-visible{opacity:1}#fs-btn svg{width:16px;height:16px}"+
    "@media print{#fs-btn{display:none}}";
  d.head.appendChild(css);
  var b=d.createElement("button"); b.id="fs-btn"; b.type="button";
  var enter='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 5V1h4M11 1h4v4M15 11v4h-4M5 15H1v-4"/></svg>';
  var leave='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 1v4H1M15 5h-4V1M11 15v-4h4M1 11h4v4"/></svg>';
  function draw(){var on=!!cur();b.innerHTML=on?leave:enter;
    b.title=on?"Exit full screen (Esc)":"Full screen";b.setAttribute("aria-label",b.title);}
  b.onclick=function(){
    if(cur())exit.call(d);
    else{var p=req.call(el);if(p&&p.catch)p.catch(function(){});}
  };
  d.addEventListener("fullscreenchange",draw); d.addEventListener("webkitfullscreenchange",draw);
  draw(); d.body.appendChild(b);
})();
