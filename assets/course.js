(function(){
  var id=document.currentScript.dataset.course, c=window.COURSES[id];
  document.body.dataset.course=id;
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
        var href=u.id+"/"+s.file+"?v="+(window.SIMS_VERSION||"");
        var d=document.createElement("div"); d.className="sim";
        d.innerHTML='<a class="thumb" target="_blank" rel="noopener"><img alt="" loading="lazy"></a><h3></h3><p></p><div class="links"><a target="_blank" rel="noopener">Open full screen</a></div>';
        d.querySelector("h3").textContent=s.title; d.querySelector("p").textContent=s.blurb||"";
        var th=d.querySelector(".thumb");th.href=href;th.setAttribute("aria-label","Open "+s.title);
        var im=th.querySelector("img");im.src=u.id+"/"+s.file.replace(/\.html$/,".png")+"?v="+(window.SIMS_VERSION||"");im.onerror=function(){th.remove()};
        d.querySelector(".links a").href=href;
        g.appendChild(d);
      });
      sec.appendChild(g);
    }
    box.appendChild(sec);
  });
})();
