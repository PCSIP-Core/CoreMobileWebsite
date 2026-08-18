# Core Mobile website

Static site. Deploy with GitHub Pages: Settings > Pages > Deploy from a branch > main / root.

- `index.html` is the homepage.
- `support.js`, `assets/`, and `_ds/` are required - do not delete.
- `.nojekyll` must stay; without it GitHub Pages ignores the `_ds` folder.

## Custom domain

`CNAME` is set to `coremobile.ai`.

DNS records to create at your domain registrar:

- Apex (`coremobile.ai`) - four A records:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- Optional `www` - one CNAME record pointing to `<username>.github.io`

Then in GitHub: Settings > Pages > Custom domain > `coremobile.ai`, wait for the DNS check to pass, then tick Enforce HTTPS.
