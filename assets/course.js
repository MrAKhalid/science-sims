(function(){
  var id=document.currentScript.dataset.course, c=window.COURSES[id];
  document.title=c.name+" Simulations";
  document.getElementById("t").textContent=c.name+" Simulations";
  document.getElementById("s").textContent=c.full;
  var box=document.getElementById("units");
  c.units.forEach(function(u){
    var sec=document.createElement("section"); sec.className="unit"; sec.id=u.id;
    sec.innerHTML="<h2></h2>"; sec.querySelector("h2").textContent=u.name;
    if(!u.sims.length){var p=document.createElement("p");p.className="empty";p.textContent="Simulations coming soon.";sec.appendChild(p);}
    else{
      var g=document.createElement("div"); g.className="sims";
      u.sims.forEach(function(s){
        var href=u.id+"/"+s.file, abs=new URL(href,location.href).href;
        var d=document.createElement("div"); d.className="sim";
        d.innerHTML='<h3></h3><p></p><div class="links"><a target="_blank" rel="noopener">Open full screen</a><button class="copy" type="button">Copy link for SharePoint</button></div>';
        d.querySelector("h3").textContent=s.title; d.querySelector("p").textContent=s.blurb||"";
        d.querySelector("a").href=href;
        d.querySelector("button").onclick=function(){var b=this;navigator.clipboard.writeText(abs).then(function(){b.textContent="Copied";setTimeout(function(){b.textContent="Copy link for SharePoint"},1500)})};
        g.appendChild(d);
      });
      sec.appendChild(g);
    }
    box.appendChild(sec);
  });
})();
