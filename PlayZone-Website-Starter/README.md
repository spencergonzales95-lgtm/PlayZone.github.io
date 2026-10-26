# PlayZone — Free Browser Games

A responsive, ad-free website starter inspired by modern browser-game portals. It includes search, categories, favorites, game pages, fullscreen support, mobile-friendly controls, and original built-in mini-games.

## What's included
- Responsive homepage and searchable game catalog
- Category filters and favorites (saved in the visitor's browser)
- Game detail/player pages
- Original mini-games: Neon Dodge, Tap Rush, Pixel Runner, Memory Match, Orbit Breaker, Goal Rush, and Color Flip
- Placeholder entries for external games you have permission to embed
- No ad scripts or analytics included

## Run it on your computer
1. Extract the ZIP.
2. Open `index.html` in a current browser.
3. For a more reliable local preview, use VS Code with the Live Server extension, or run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Publish free with GitHub Pages
1. Create or sign into a GitHub account.
2. Create a **public** repository named `playzone` (or another name).
3. Upload the contents of this folder to the repository root. `index.html`, `styles.css`, and `app.js` should be at the root, not inside another nested folder.
4. Open **Settings → Pages**.
5. Under the build/deployment source, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
6. GitHub will show the public URL after deployment. It will usually look like `https://YOUR-USERNAME.github.io/playzone/`.
7. Replace `YOUR-SITE-NAME.github.io/YOUR-REPOSITORY` in `robots.txt` and `sitemap.xml` with the actual URL. If using a project URL with `/playzone/`, preserve that path in page URLs. Commit the changes.

## Get it indexed by Google
1. Open [Google Search Console](https://search.google.com/search-console/).
2. Add your public website URL as a URL-prefix property and complete the verification instructions shown by Google.
3. Submit your sitemap URL, e.g. `https://YOUR-USERNAME.github.io/playzone/sitemap.xml`.
4. Use URL Inspection to request indexing for the homepage and important game pages.
5. Give Google time to crawl the site. Indexing and ranking are not guaranteed; unique content and links from other sites can help.

## Add an external game
External games are deliberately placeholders. Do not paste in random game URLs and assume they can be embedded. Check the game's license and terms, and make sure the provider permits iframe embedding and your intended use. Some websites block iframes using browser security headers. If a game is licensed for self-hosting, place its permitted files in the project and implement a player page for it.

For an external game, add a matching entry to both `app.js` and `game.js` and set `type: "external"` and `url: "https://.../embed-url"` in each. The URL must be an official embed URL that the owner allows you to use. Test it after publishing.

## Performance notes
- The site contains no advertising scripts, analytics, or tracking scripts by default.
- The built-in games run locally in the browser and don't need a game-server round trip.
- External games can have their own ads, loading delays, trackers, and input latency.
- A website cannot guarantee zero input delay; device performance, browser, display refresh rate, network, and the game engine all matter.

## Before launching publicly
- Replace the sample site description and sitemap URLs.
- Test keyboard, touch, search, category filters, favorites, and fullscreen on desktop and mobile.
- Review licenses, game permissions, accessibility, privacy, and age-appropriate content.
- Use original branding. This is an independent PlayZone project and not affiliated with CrazyGames.
