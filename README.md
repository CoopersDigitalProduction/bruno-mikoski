# Bruno Mikoski Portfolio

This README provides instructions for managing the portfolio content and structure.

## Managing Works Items

### Creating a New Portfolio Item
1. Create a new subfolder in the `/content/works` directory
2. Inside the new subfolder, create an `index.md` file
3. Add project images to the subfolder:
   - Thumbnail image must be named `thumb.jpg`, `thumb.png`, or `thumb.webp`
   - All other images in this folder will be included in the project gallery (alphabetically sorted)
4. In `index.md`, add the following parameters:
   ```markdown
   ---
   title: "Project Title"
   tags: ["tag1", "tag2"]
   year: YYYY
   role: "Your Role"
   language: "Project Language(s)"
   platforms: "Platform(s)"
   youtube: "YouTube video link (if applicable)"
   featured: true  # Set to true for featured projects
   ---

   Project description goes here.
   ```

### Updating a Works Item
1. Navigate to the project's subfolder in `/content/works`
2. Edit the `index.md` file to update text content or parameters
3. Replace or add images as needed
4. To feature a project on the homepage, set `featured: true` in the front matter

### Deleting a Works Item
1. Remove the project's subfolder from `/content/works`

### Featured Projects
- The homepage now displays the 6 most recent featured projects
- To feature a project, add `featured: true` to its `index.md` front matter
- If fewer than 6 projects are marked as featured, the remaining slots will be filled with the most recent non-featured projects

## Key File Locations

- Contact Page Content: `/content/contact.html`
- Main Template Files: `/themes/bruno/layouts/`
- Static Files (CSS, JS): `/themes/bruno/assets/`

## Template Code Locations

- Home Page (Featured Projects): `/themes/bruno/layouts/_default/home.html`
- All Works Page: `/themes/bruno/layouts/_default/all-works.html`
- Project Details: `/themes/bruno/layouts/works/single.html`
- Generic Single Page: `/themes/bruno/layouts/_default/single.html`
- Contact Page Wrapper: `/themes/bruno/layouts/_default/contact.html`

## Creating New Pages

1. Create a new Markdown file in the `/content/` directory (e.g., `newpage.md`)
2. Add front matter to the file:
   ```markdown
   ---
   title: "New Page Title"
   layout: "page"
   ---

   Page content goes here.
   ```
3. Create a corresponding template in `/themes/bruno/layouts/_default/` if needed (e.g., `page.html`)
4. The new page will be accessible at `/newpage/`

## Project Structure

- `/content/`: Contains all the content files (works, pages)
- `/themes/bruno/`: Contains the theme files
  - `/layouts/`: HTML templates
    - `/_default/`: Default templates
    - `/works/`: Work-specific templates
  - `/assets/`: Static files (CSS, JS, images)

## Additional Notes

- The contact page can be edited in the `contact.html` file inside the `/content/` folder
- Make sure to optimize images before adding them to the project to ensure fast loading times
- The works single page template (`/themes/bruno/layouts/works/single.html`) includes:
  - Project details
  - YouTube video embedding (if applicable)
  - Image gallery
  - Related projects section (based on tags, filled with random projects if needed)
- Regularly backup your content and theme files

For any questions or issues, please contact us at coopers@coopers.digital
