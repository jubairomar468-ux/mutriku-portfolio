# Jubair Hamza — Mutriku website

Prepared 29 October 2026.

## What is ready

- Four responsive pages: About, Mutriku Poster, Beyond the Poster and CV.
- Contact email and the supplied LinkedIn profile.
- Public poster PDF and two-page public CV PDF.
- Original OWC, output, life-cycle and acoustic-scope graphics.
- Interactive wave phase, impact-category filters and a three-input energy-payback calculator.
- Source notes, image credit and downloadable chart data.
- A QR generator on the poster page, with SVG and PNG downloads.

The website is ready to host. A GitHub deployment has not yet been completed because the account connection and repository destination are not available in this session. No final website QR has been generated for an unconfirmed address.

## Review the site now

Open `Jubair_Mutriku_Website_Preview.html` in a browser. It embeds the pages, images, downloads and scripts, so it can be reviewed without a server. This is the convenient review copy; deploy the separate ZIP contents to GitHub.

Alternatively, unzip `Jubair_Mutriku_GitHub_Website.zip` and open its root `index.html`. All site links are relative and work for both a user site and a project site.

## Publish on GitHub Pages

1. Sign in to your GitHub account and create a public repository, for example `mutriku-portfolio`. Your GitHub username determines the address; it has not been inferred from LinkedIn.
2. Upload the extracted ZIP contents into the repository root. `index.html`, `assets`, `downloads`, `mutriku` and `beyond` must sit at that root, not inside another enclosing folder. Keep `.nojekyll`.
3. Open repository Settings → Pages. Choose **Deploy from a branch**, select **main** and **/(root)**, and save.
4. Wait for the deployment to finish. Open the **Visit site** link reported by GitHub. Test the main page, poster page, PDF downloads and companion controls.
5. Copy the actual live poster-page address. For a project repository the pattern is `https://YOUR-USERNAME.github.io/REPOSITORY/mutriku/`; replace the placeholders only after GitHub confirms the deployment.
6. In `assets/config.js`, set `publicProjectUrl` to that exact address and commit. The site also detects its project address automatically when served from `github.io`.
7. On the poster page choose **Share with a QR code**. Confirm the address, then download the PNG or SVG. Scan it on more than one phone, including at the intended print size. Keep the same URL when updating the content.

Official setup guide: https://docs.github.com/en/pages/quickstart
GitHub Pages availability and site URLs: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

## Edit the website

| File | Content |
| --- | --- |
| `index.html` | Introduction, featured project, experience, contact |
| `mutriku/index.html` | Poster and contextual notes |
| `beyond/index.html` | Research companion and reference list |
| `cv/index.html` | CV overview |
| `assets/style.css` | Colours, fonts and responsive layout |
| `assets/site.js` | Calculator, filters, navigation and QR behaviour |
| `assets/config.js` | Final public project URL |
| `downloads/` | Public PDF files and chart-data CSV |

No paid service, account system or contact-form backend is required. The email link opens the visitor’s mail application.

## Public-copy decisions

The original uploaded files were not overwritten. The website poster retains its design and includes Student ID: 760075852 with jh1868@exeter.ac.uk beside it. The companion explicitly clarifies its operational-carbon, turbine-count, acoustic and mitigation interpretations.

The public CV omits telephone, secondary email, visa/right-to-work text and referee contact details, adds LinkedIn, and uses the chosen location wording. Its research, education and experience content is otherwise retained. Public biographical claims come from the supplied CV; under-review work remains labelled as such.

## Research interpretation

The companion is a focused review, not a systematic review or new experimental study. Source access level and limitations are stated. Proposed actions are not claimed to have been implemented or to deliver measured reductions. The energy calculator is an illustrative scaling of a preliminary published estimate, with explicit embodied-energy and output assumptions.

Charts use sourced values and transparent calculations; no invented observations or uncertainty bars were added. The photo is by Txo under CC0 1.0. QR encoding uses Project Nayuki’s MIT-licensed library, whose notice is retained in its source.

For assessment, retain essential assessed arguments on the poster unless the module explicitly allows linked supplementary content to be marked.
