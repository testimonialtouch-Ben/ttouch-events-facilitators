# T.touch Events Facilitators website

This is a responsive static website starter for the T.touch brand. Both supplied logo image files are included unchanged: the second uploaded image is the main T.touch business logo; the first uploaded image is the separate MC Benah personal-brand logo. The website displays the main logo on a black background so its original black canvas blends in without editing or cropping the artwork. Public listing details used: Ruai, Nairobi; phone +254 735 285117. The public listing also shows a 4.9/5 rating from 30 reviews. Confirm all public details before launch.

## Files
- `index.html` — website content and sections
- `styles.css` — responsive design and burgundy/white brand styling
- `script.js` — mobile navigation and contact links
- `assets/ttouch-logo-clean.png` — main T.touch business logo
- `assets/mc-benah-logo.png` — separate MC Benah personal-brand logo

## Before publishing
1. The public phone/WhatsApp number is prefilled as `254735285117`.
2. The email `testimonialtouch@gmail.com` is prefilled from the earlier business information; confirm it is still current before publishing.
3. Event photos are in `assets/gallery/`. To add more, copy a `<figure>` line in the gallery section of `index.html` and change the file name and description.
4. Review service descriptions and remove anything you do not offer.
5. Confirm the public contact details and business location.

## Local preview
Open `index.html` in a browser.

## Deploy to Render
1. Upload the contents of this folder to a GitHub repository.
2. In Render, choose **New → Static Site** and connect the repository.
3. Set Build Command to blank and Publish Directory to `.`.
4. Deploy. Connect a custom domain later if desired.

The site currently uses Google Fonts from a CDN; if you want all assets served locally, replace those font imports before deployment.

## Added in this version
- "Get a Quote" form that opens WhatsApp with the visitor's details prefilled (no server needed)
- 4-step "how it works" section, Facebook link, Open Graph and Google business markup (JSON-LD)
- Tagline now matches the logo: "We create testifying memories"

## Please confirm before publishing
- Location (Ruai) and the Google rating (4.9/5 from 30 reviews) are confirmed by the owner
- Services list: remove anything you do not offer

## Team and company content
- Company information (About, History, Vision, Mission, Core Values, What We Offer, Why Choose Us, Market analysis, contact and social handles) comes from the company profile video.
- Team photos are in `assets/team/`. K Bon and George photos are `assets/team/k-bon.jpg` and `assets/team/george.jpg`.

## Hero slideshow
The main photo at the top changes every few seconds. To change the photos, edit the `<img class="slide">` lines inside `hero-slider` in `index.html` (and add one matching `dot-btn` button per photo).
