<div align="center">

# ZOVA

### AI-powered classroom assistance for Chrome

**Understand every class. In your language.**

[Explore the site](index.html) · [Privacy](privacy.html) · [Support](support.html)

</div>

Zova is a browser-based classroom assistant designed to help learners follow online lessons with live transcription, translation, optional translated audio and focused study tools.

This repository contains the public Zova product website: a lightweight landing page, privacy information and support page. It is intentionally separate from the Chrome extension source repository.

## Product capabilities

### Smart Class

- Live classroom transcript from the selected browser tab
- Original-language and translated transcript views
- Scrollable, resizable classroom dock
- Minimize and restore controls
- Transcript font-size controls
- Smart Notes during a lesson

### Live learning assistance

- Live transcription through the active classroom session
- Configurable target-language translation
- Optional translated-audio/dubbing playback
- Explain recent classroom context
- Answer questions from recent classroom context
- Summarize bounded lesson context

### Saved learning

- Manual Save Class
- Safe auto-save for active classroom sessions
- Local class history
- Dashboard search and class review
- Rename and delete saved classes
- Original transcript, translations and Smart Notes
- Clean Study File generation where available
- Markdown downloads
- Manual backup export and import

## How it works

```text
Classroom tab
    ↓
User starts Zova
    ↓
Tab-audio capture
    ↓
Live transcript / translation / optional dubbing
    ↓
Smart Class dock
    ↓
Save, review and export from Dashboard
```

Explain, Answer and Summary use recent bounded classroom context and open the app's Google AI Mode experience when the user explicitly requests an action.

## Privacy highlights

- Classroom capture starts only after the user starts a session.
- Zova processes selected tab audio for requested classroom features.
- Saved classes remain in local browser extension storage.
- The user's Gemini API key is stored locally by the extension.
- The Gemini API key is not included in class backups.
- Zova does not sell user data or use classroom data for advertising.

Read the full [Zova Privacy Policy](privacy.html).

## Website pages

| Page | Purpose |
|---|---|
| [`index.html`](index.html) | Product overview, features, how-it-works, real screenshot showcase, privacy highlights and FAQ |
| [`guide.html`](guide.html) | Step-by-step user guide from installation to your first saved class |
| [`privacy.html`](privacy.html) | Privacy and data-use information |
| [`support.html`](support.html) | Installation and troubleshooting guidance |

## Screenshots

Real Zova screenshots are stored in [`img/`](img/) and shown across the site (hero, feature groups, the guided screenshot story and the user guide). Each image keeps its original aspect ratio, uses descriptive alt text and is lazy-loaded below the fold.

No fabricated product screenshots, testimonials, user counts or ratings are used.

## Local development

This site is a static HTML/CSS/JavaScript website with no runtime dependencies or build step.

Open `index.html` directly for a quick preview, or serve the folder with any static HTTP server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Project structure

```text
zovasite/
├── index.html       # Landing page
├── guide.html       # User guide (learn)
├── privacy.html     # Privacy policy
├── support.html     # Support and troubleshooting
├── styles.css       # Responsive visual system
├── script.js        # Mobile navigation + scroll reveal
├── favicon.svg      # Site icon
└── img/             # Real Zova screenshots (1.png … 12.png)
```

## Design principles

- Fast, dependency-free static delivery
- Responsive layout for desktop, tablet and mobile
- Accessible semantic HTML and navigation
- Real screenshot placeholders instead of invented product imagery
- Clear privacy and support information
- No Google endorsement, fake metrics or unverifiable claims

## Support

For Zova support, email [info.zova24@gmail.com](mailto:info.zova24@gmail.com).

## Copyright

Copyright © 2026 Vahid Rahmani. All rights reserved.

Zova is a proprietary product. Google, Chrome and Gemini are trademarks of their respective owners.

<div align="center">

**ZOVA · Learn clearly, in your language.**

</div>
