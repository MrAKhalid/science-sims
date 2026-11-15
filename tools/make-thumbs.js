// Makes a preview image (same name, .png) next to every simulation.
// Run from the repo root: node tools/make-thumbs.js   (needs Playwright)
const {chromium}=require('playwright'),fs=require('fs'),path=require('path'),http=require('http');
const root=path.resolve(__dirname,'..');
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png'};
const srv=http.createServer((q,r)=>{const f=path.join(root,decodeURIComponent(q.url.split('?')[0]));
  fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);r.end();return;}r.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream'});r.end(d);});}).listen(0);
(async()=>{
  const port=srv.address().port;
  const sims=[];for(const c of ['sph4u1','sch4u1'])for(const u of fs.readdirSync(path.join(root,c),{withFileTypes:true}))
    if(u.isDirectory())for(const f of fs.readdirSync(path.join(root,c,u.name)))if(f.endsWith('.html'))sims.push(`${c}/${u.name}/${f}`);
  const b=await chromium.launch();
  for(const s of sims){
    const p=await b.newPage({viewport:{width:1200,height:750},deviceScaleFactor:0.5});
    await p.goto(`http://localhost:${port}/${s}`);await p.waitForTimeout(2500);
    await p.screenshot({path:path.join(root,s.replace(/\.html$/,'.png'))});await p.close();console.log('thumb',s);
  }
  await b.close();srv.close();
})();
