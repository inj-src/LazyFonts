# LazyFonts

LazyFonts is a Chrome extension that helps you preview and try Google Fonts directly on any website.

Chrome Web Store: https://chromewebstore.google.com/detail/ecllgniioimapndpncajnecbeejedglh

## What it does

- Loads font families from the Google Fonts API
- Opens a floating in-page UI when you click the extension icon
- Lets you browse, search, and preview fonts quickly while inspecting a page

## Tech stack

- React + TypeScript
- Vite
- Sass
- Chrome Extension Manifest V3

## Getting started

### Prerequisites

- Node.js 18+ (or current LTS)
- npm

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

### Build production assets

```bash
npm run build
```

## Load as an unpacked extension

1. Build the project (`npm run build`).
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the generated `dist` directory.

## Lint

```bash
npm run lint
```
