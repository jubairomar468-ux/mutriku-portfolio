# Jubair Hamza — Mutriku website

Updated 1 November 2026 to match the supplied Mutriku_Poster_A1_Complete.pptx.

## What is ready

- Four responsive pages: About, Mutriku Poster, Beyond the Poster and CV.
- Contact email and the supplied LinkedIn profile.
- New poster PDF exported from the supplied A1 Complete PowerPoint, with its student ID and Exeter email, plus the existing public CV PDF.
- Original OWC, output, life-cycle and acoustic-scope graphics.
- Interactive wave phase, impact-category filters and a three-input energy-payback calculator.
- Poster-aligned references [1]–[19] (the photograph is now [19]), the earlier operator specification [20], EVE’s 2023 annual report [21], the Geopark visitor listing [22] and source access notes.
- Downloadable chart data, a merged reference catalogue and checks covering all 57 claims in the supplied reference workbook.
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
| `downloads/Mutriku_Poster.pdf` | Replacement poster exported from the supplied A1 Complete PowerPoint |
| `downloads/analysis-data.csv` | Values, units, periods, calculations and interpretation limits |
| `downloads/reference-catalogue.csv` | Merged source list using the poster’s reference numbers |
| `downloads/claim-checks.csv` | Review and website treatment of the workbook’s 57 claims |

No paid service, account system or contact-form backend is required. The email link opens the visitor’s mail application.

## Public-copy decisions

The original uploaded files were not overwritten. The previous poster has been replaced with a PDF export of the supplied A1 Complete PowerPoint, including Student ID: 760075852 and jh1868@exeter.ac.uk. The preview image is rendered from that same PDF. The website explains the new output comparison, cumulative milestones, material inventory, historical investment, acoustic campaigns and reference numbering.

The original PowerPoint is not included in the website download package. Its visible poster is preserved in the PDF; speaker notes are not part of the published poster.

## Poster consistency notes

- The poster’s 240 MWh/year is shown as an approximate calculation: 3000 MWh divided by 12.5 years. “Over 3 GWh” implies a mean above 240, so this is not an exact measured annual average. EVE’s separate approximate 300 MWh/year report is identified as having a different basis.
- The 41% figure uses the measured 2014–2016 mean divided by the dated 600 MWh/year forecast. It is not capacity factor, and cumulative totals do not establish present performance.
- Acoustic campaign dates, sensor positions and publication dates are kept separate. The 1 km statement in [5] is not used as a location description of the 2022 campaign in [10,18].
- Reference [14] (Interreg Europe, published 6 March 2024) was retrieved on 1 November 2026. It reports no formal complaint in 13 years of continuous operation, which the poster now cites; Tethys [10] separately reports about ten years. EVE’s annual report [21] independently confirms the year-end 2023 milestone and the Geopark [22] lists the guided visit.
- References [3], [9], [16] and [17] now have specific or corrected article addresses. The [17] milestones are corroborated with the primary operator announcement. The author spelling Ulazia in [2] now matches the poster.
- The 53–94% comparison and historical solar/wind payback figures remain attributed to [1]. They are not current harmonised technology rankings. The conflicting toxicity-scenario descriptions in [1] are disclosed without choosing an unsupported ranking.

The public CV omits telephone, secondary email, visa/right-to-work text and referee contact details, adds LinkedIn, and uses the chosen location wording. Its research, education and experience content is otherwise retained. Public biographical claims come from the supplied CV; under-review work remains labelled as such.

## Research interpretation

The companion is a focused review, not a systematic review or new experimental study. Source access level and limitations are stated. Proposed actions are not claimed to have been implemented or to deliver measured reductions. The energy calculator is an illustrative scaling of a preliminary published estimate, with explicit embodied-energy and output assumptions.

Charts use sourced values and transparent calculations; no invented observations or uncertainty bars were added. The photo is by Txo under CC0 1.0 and is reference [19]. QR encoding uses Project Nayuki’s MIT-licensed library, whose notice is retained in its source.

For assessment, retain essential assessed arguments on the poster unless the module explicitly allows linked supplementary content to be marked.
