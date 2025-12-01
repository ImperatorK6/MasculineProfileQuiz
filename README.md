# Masculine Profile Quiz

A small static front-end implementing a tactical-themed personality quiz.

Files:
- `index.html` — main UI and structure
- `styles.css` — theme, animations, print styles
- `script.js` — quiz logic, simple sounds, result generation + ambient/ping/pdf features

How to run locally

Option A — open in browser (simplest):
- Double-click `index.html` in the project folder to open in your default browser.

Option B — run a quick local server (recommended for full feature parity):
Open PowerShell in the project folder and run one of the following:

```powershell
# If Python 3 is installed
python -m http.server 8000; Start-Process 'http://localhost:8000/index.html'

# If Python 2 is installed
python -m SimpleHTTPServer 8000; Start-Process 'http://localhost:8000/index.html'
```

Notes
- Browser audio requires a user gesture to enable on some browsers; clicking `BEGIN ANALYSIS` will unlock WebAudio in most cases.
- `EXPORT (Print / PDF)` opens a printable summary and triggers the browser print dialog (you can save as PDF from there).
- `DOWNLOAD PDF` creates a client-side PDF using `html2pdf.js` (CDN included in `index.html`).
- `COPY SUMMARY` copies a plaintext briefing to your clipboard.

New features (added):
- **Direct PDF download**: use the `DOWNLOAD PDF` button on the results screen to generate a downloadable PDF (client-side) using `html2pdf.js`.
- **Ambient audio + sonar ping**: a low command-room hum and intermittent ping play after you click `BEGIN ANALYSIS`. Audio runs at a very low volume and can be stopped by restarting the quiz.

If you prefer the ambient audio off by default I can add a mute toggle in the HUD.

Next improvements you might want:
- Add packaged audio assets for ambient hum, radar sweep, and clicks.
- Server-side persistence of results or PDF generation.
- More elaborate animations and SVG logo.

If you want, I can add any of those next.
