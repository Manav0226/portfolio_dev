# Manav Mehta — Portfolio

## Files in this folder

| File | Purpose |
|------|---------|
| `index.html` | Main portfolio website |
| `favicon.svg` | Browser tab icon |
| `og-preview.svg` | Replace with a real PNG screenshot (1200×630px) |
| `manav-mehta-resume.docx` | Resume — open in Word, Save As PDF for distribution |
| `vercel.json` | Security headers for Vercel deployment |
| `.htaccess` | Security headers for Apache hosting |

---

## Before going live — 5 things to do

### 1. Replace YOUR_DOMAIN in index.html
Search for `YOUR_DOMAIN.com` in index.html — replace all 4 occurrences
with your real domain (e.g. `manav-mehta.vercel.app` or `manavmehta.dev`).

### 2. Remove noindex (line 10 of index.html)
Delete this line when you are ready for Google to index you:
```
<meta name="robots" content="noindex, nofollow">
```

### 3. Add Cloudflare Analytics token
- Sign up free at cloudflare.com
- Web Analytics → Add Site → copy your token
- In index.html, find `YOUR_CF_TOKEN` and replace it
- Uncomment the Cloudflare script tag (remove the `<!--` and `-->`)

### 4. Connect contact form (Formspree)
- Sign up free at formspree.io (50 submissions/month free)
- New form → copy the ID
- In index.html, find `YOUR_FORMSPREE_ID` and replace it

### 5. Replace og-preview.svg with a real PNG
- Open your portfolio in Chrome, go fullscreen
- Screenshot the hero section
- Crop to 1200×630px in any image editor
- Save as `og-preview.png` (replace the .svg)
- Update the 3 og:image meta tags in index.html to point to `.png`

### 6. Create a proper favicon (optional upgrade)
- Go to favicon.io → Text tab
- Letter: M, Font: Arial Bold, Background: #C03A18, Text colour: #FFFFFF
- Download → replace favicon.svg and add favicon.ico

---

## Deploy to Vercel (recommended)

```bash
# Option A — drag and drop
# Go to vercel.com → New Project → drag this entire folder → Deploy

# Option B — GitHub (auto-deploys on every update)
# 1. Create repo on github.com/Manav0226
# 2. Upload all files in this folder
# 3. Connect repo to Vercel → Deploy
# Every push to GitHub auto-redeploys in ~30 seconds
```

---

## Your tracking links (update domain once live)

Use these when sharing your portfolio. Analytics dashboard shows which source sends the most visitors.

| Where | Link |
|-------|------|
| LinkedIn bio | `YOUR_DOMAIN?utm_source=linkedin&utm_medium=profile&utm_campaign=bio` |
| LinkedIn post | `YOUR_DOMAIN?utm_source=linkedin&utm_medium=post&utm_campaign=job-search` |
| Resume PDF | `YOUR_DOMAIN?utm_source=resume&utm_medium=pdf&utm_campaign=applications` |
| WhatsApp | `YOUR_DOMAIN?utm_source=whatsapp&utm_medium=share&utm_campaign=networking` |
| Email sign-off | `YOUR_DOMAIN?utm_source=email&utm_medium=signature&utm_campaign=outreach` |

---

## Resume

The `.docx` file is your master copy. To create a submission PDF:
1. Open `manav-mehta-resume.docx` in Microsoft Word
2. File → Save As → PDF
3. Submit the PDF — never the .docx (formatting can shift in different Word versions)

Tailor keywords to each job description before submitting.
