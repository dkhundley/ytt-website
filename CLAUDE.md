# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple static website for yoga teacher training practice courses. The site provides information for students interested in joining practice teaching sessions during the teacher's training period.

## Technology Stack

- Static HTML/CSS website
- No build process required
- Deployed to Vercel
- Uses semantic HTML and modern CSS Grid/Flexbox

## Development Commands

```bash
# Local development server
npm run dev        # Serves on localhost:3000
npm run serve      # Serves on localhost:8000

# Or use Python directly
python -m http.server 3000
```

## Project Structure

```
├── index.html          # Main landing page
├── styles.css          # All styling
├── images/            # Directory for yoga practice photos
│   └── README.md      # Guidelines for adding images
├── vercel.json        # Vercel deployment configuration
└── package.json       # Basic project metadata
```

## Content Sections

The website includes:
- Hero section with welcoming message
- "What to Expect" cards explaining the practice environment
- Course details (duration, style, what to bring, investment)
- Image gallery placeholders for yoga photos
- Contact information section

## Adding Images

1. Place high-quality images in the `images/` directory
2. Replace placeholder divs in `index.html` with `<img>` tags
3. Use descriptive alt text for accessibility
4. Keep file sizes under 1MB for web performance

## Deployment

- Configured for Vercel deployment
- Simply connect your GitHub repo to Vercel
- Automatic deployments on push to main branch
- No build step required (static files only)

## Customization Notes

- Update contact information in the contact section
- Replace placeholder text with specific course details  
- Add actual images to replace the placeholder boxes
- Modify color scheme in CSS if desired (currently uses calming purple/blue gradient)