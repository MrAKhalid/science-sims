# Science Simulations site

Hosted free on GitHub Pages. Fix a file once and every link to it updates.

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
5. Full screen button: open the new sim's HTML and paste this line just above `</body>` (near the very end):
   `<script src="../../assets/fullscreen.js" defer></script>`
   (Or ask Claude to add the sim, and it will do this for you.)

## One-time GitHub Pages setup

1. Create a public repo, e.g. `science-sims`.
2. Upload everything in this folder (including `.nojekyll`).
3. Settings > Pages > Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`. Save.
4. Your site: `https://<your-username>.github.io/science-sims/`

## Thumbnails

Each sim can have a preview image with the same name and `.png` (e.g. `spring-shm.png` next to `spring-shm.html`).
If it's missing, the card just shows without a picture. To regenerate all previews: `node tools/make-thumbs.js` (needs Playwright), or ask Claude.

## Browser caching

Pages link to `assets/*` with `?v=<number>`. After changing anything in `assets/`, bump that number in
`index.html`, `sph4u1/index.html` and `sch4u1/index.html` so browsers fetch the new copy. After changing a simulation file, bump `SIMS_VERSION` at the top of `assets/sims.js` (and the `?v=` numbers above).
