# Science Simulations site

Hosted free on GitHub Pages. Fix a file once and every SharePoint page that embeds it updates.

## Folder layout

```
index.html                 home page (two course cards)
assets/sims.js             THE LIST OF SIMULATIONS (the only file you edit)
sph4u1/<unit>/<sim>.html   physics sims   (dynamics, energy-momentum, fields, light, modern-physics)
sch4u1/<unit>/<sim>.html   chemistry sims (organic, structure-properties, energy-rates, equilibrium, electrochemistry)
```

## Adding a simulation

1. Save the HTML from Claude with a short lowercase name, e.g. `inclined-plane.html`.
2. Upload it into the right unit folder on GitHub (Add file > Upload files).
3. Open `assets/sims.js`, click the pencil, add one line in that unit:
   `{ title: "Inclined Plane", file: "inclined-plane.html", blurb: "Friction and forces on a ramp." },`
4. Commit. The site updates in about a minute.

## One-time GitHub Pages setup

1. Create a public repo, e.g. `science-sims`.
2. Upload everything in this folder (including `.nojekyll`).
3. Settings > Pages > Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`. Save.
4. Your site: `https://<your-username>.github.io/science-sims/`

## Embedding in SharePoint

One-time (SharePoint admin, or site owner):
- Site settings > **HTML Field Security** > add `<your-username>.github.io` to the allowed domains.
  (Under the gear > Site information > View all site settings > HTML Field Security.)
  If you are not a site owner, ask your board's SharePoint admin to add it.

Per page:
1. Create a page, one section per unit (e.g. "B. Dynamics").
2. Add an **Embed** web part.
3. Paste this (use "Copy link for SharePoint" on the course page to get the URL):
   ```html
   <iframe src="https://<your-username>.github.io/science-sims/sph4u1/dynamics/inclined-plane.html"
           width="100%" height="650" style="border:0"></iframe>
   ```
4. Add a Text web part under it with a link "Open full screen" pointing to the same URL (useful on Chromebooks/phones).

Simpler option: embed the whole course page (`.../sph4u1/`) once with a tall iframe and let students click through.
