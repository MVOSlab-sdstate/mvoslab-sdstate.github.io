# MVOS Lab Website

This is the official website for the Machine Vision and Optical Sensor (MVOS) Lab at South Dakota State University.

## Project Overview
- Built with Next.js and Tailwind CSS
- All content is managed via JSON files in `src/data/`
- Images are stored in `public/images/`
- Static site is deployed to GitHub Pages: https://mvoslab-sdstate.github.io

---

## Project Structure

```
mvos-lab-website/
  src/
    data/                # All content JSON files (edit here for text/content updates)
    app/                 # Next.js app directory (pages, components)
  public/
    images/              # All images referenced in JSON (use /images/your-image.jpg)
  build_and_deploy.sh    # Script to build and deploy to GitHub Pages
```

---

## Editing Content

### 1. **Text and Page Content**
- All main content is in JSON files in `src/data/`:
  - `home-content.json` — Homepage hero, welcome, carousel
  - `about-content.json` — About, mission, facilities, impact, opportunities
  - `people-content.json` — Team members, alumni (add new people here)
  - `research-content.json` — Research areas, projects, sponsors
  - `teaching-content.json` — Courses, teaching philosophy
  - `news-content.json` — Publications, conferences, awards, media
  - `pi-content.json` — PI profile/contact info
  - `site-config.json` — Site name, navigation, colors, logo, etc.

**To add or edit content:**
- Open the relevant JSON file in `src/data/`
- Add or update entries (e.g., add a new team member, research area, or news item)
- Save the file and rebuild/redeploy the site

### 2. **Images**
- All images must be placed in `public/images/`
- Reference images in JSON as `/images/your-image.jpg`
- For new people, research, or news, add the image to `public/images/` and update the JSON with the correct path

### 3. **Adding a New Team Member**
- Edit `src/data/people-content.json`
- Add a new object to the `teamMembers` array:
  ```json
  {
    "name": "Full Name",
    "image": "/images/your-image.jpg",
    "description": "Short bio...",
    "group": "Graduate" | "Undergraduate",
    "socialLinks": [
      { "name": "Google Scholar", "url": "...", "icon": "/images/google-scholar.png" }
    ]
  }
  ```

### 4. **Adding a New Research Area**
- Edit `src/data/research-content.json`
- Add a new object to the `researchAreas` array:
  ```json
  {
    "title": "Area Title",
    "images": [ { "src": "/images/your-image.jpg", "alt": "Description" } ],
    "description": "Short summary...",
    "features": [ "Feature 1", "Feature 2" ]
  }
  ```

### 5. **Adding News, Publications, or Awards**
- Edit `src/data/news-content.json`
- Add a new object to the `newsItems` array with the correct `category` (e.g., "Research Publications", "Conference Presentations", "Awards") and `year`.

---

## Node.js Installation

This project requires Node.js (v18 or newer recommended).

### Windows
1. Download the Node.js installer from the [official website](https://nodejs.org/).
2. Run the installer and follow the setup instructions (choose the LTS version for best stability).
3. After installation, open Command Prompt and verify:
   ```bash
   node -v
   npm -v
   ```

### Linux (Debian/Ubuntu)
1. Open a terminal and run:
   ```bash
   sudo apt update
   sudo apt install -y nodejs npm
   # Optionally, for the latest version:
   # curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   # sudo apt install -y nodejs
   node -v
   npm -v
   ```

For other Linux distributions or advanced installation, see the [Node.js Downloads page](https://nodejs.org/en/download/package-manager).

---

## Deployment

1. Make your content and image changes.
2. Run the deployment script:
   ```bash
   ./build_and_deploy.sh
   ```
3. The site will be built and pushed to the `gh-pages` branch for GitHub Pages hosting.

---

## Notes
- All content changes are managed via JSON files—no code changes needed for most updates.
- Images must be in `public/images/` and referenced with `/images/` in JSON.
- For any new page or section, follow the structure of existing JSON and components.

---

## Questions or Issues?
- For technical issues, open an issue on [GitHub](https://github.com/MVOSlab-sdstate/mvos-lab-website).
- For lab/research inquiries, use the [Contact page](https://mvoslab-sdstate.github.io/mvos-lab-website/contact) or email the PI (see Contact page).
