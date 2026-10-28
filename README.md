# Eren Arbatlı — academic website

Public website: https://erenarbatli.github.io/

Four static HTML pages share `assets/site.css`. No installation or build step is needed. GitHub Pages publishes the root of the `main` branch.

## Update the content

- **Biography and contact details:** edit `index.html`.
- **Research:** edit `research/index.html`. Each paper is an `<li class="paper">` with its title, coauthors, citation, and optional working-paper link. Copy a nearby entry when adding a paper. Keep its `id` unique so links to individual papers continue to work. If changing a selected paper, also update its short listing on the home page.
- **Abstracts:** each completed paper has a native `<details class="paper-abstract">` section. Edit the paragraph inside `.abstract-body` and retain the source comment when updating the text. The Abstract control works without JavaScript. Projects without a verified abstract and the book review do not have a control.
- **Affiliations and social profiles:** edit the Research affiliations section and Social profiles navigation on the home page. Keep the affiliations on the CV page consistent.
- **Teaching:** edit `teaching/index.html`. Courses are grouped by institution and degree level.
- **Career summary:** edit `cv/index.html`. Update the date under the download button when replacing the PDF.
- **Downloadable CV:** replace `assets/files/eren-arbatli-cv.pdf` with the updated public PDF using the same filename. Review the PDF before uploading; omit date of birth and citizenship. Keep the original Word document outside this repository.
- **Portrait:** replace the two files `assets/images/eren-arbatli.webp` and `assets/images/eren-arbatli.jpg`; retain their 4:5 aspect ratio. Update `social-preview.jpg` separately if needed.
- **Shared identity/navigation:** these are ordinary HTML in each page, including `404.html`. Apply changes consistently across them.
- **Search metadata:** update each page’s title and description when its purpose changes. Update the affected date in `sitemap.xml` when editing content.

To make small changes on GitHub, open the relevant file, select the pencil icon, edit, and commit to `main`. Pages republishes automatically; check the repository’s Actions tab for progress.

## Preview locally

From this directory, run `python3 -m http.server 8000`, then open http://localhost:8000/. Stop the server with Ctrl+C.

## Publication notes

Publication titles, dates, coauthors, and review statuses follow the CV provided in October 2026. Dates may reflect online publication. The research page lists 11 publications, one book review, three papers under review, and five projects in progress. “Far from Home” has no public download link in the supplied CV, so it appears without one.

The portrait was supplied by Eren Arbatlı and taken at the Durham Development Economics Workshop 2026. This repository includes optimized website copies only.

The site uses system fonts and no external scripts. All content is present in HTML and works without JavaScript.

External web pages and document links open in a new tab; navigation within this website and email links retain their normal behavior. The two Durham working-paper downloads are labeled “Durham working paper”; their paper titles link to SSRN.

Abstracts follow publisher-deposited metadata, institutional repositories, or author-posted drafts, as identified in the HTML source comments. The Far from Home abstract comes from the author manuscript dated 26 October 2026; the manuscript itself is not published here.

Social platform icons are from [Font Awesome Free](https://fontawesome.com/), used under CC BY 4.0. Their original notices and license are retained in `assets/icons/`.
