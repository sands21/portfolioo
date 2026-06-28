# Where your content & assets go

Two ways to add content. **The easy way is the CMS** — use that for day-to-day.

## 1. The CMS (recommended)

- **Local:** run `npm run dev`, then open **http://localhost:3000/keystatic** (no login).
- **Live (later):** same `/keystatic` route on the deployed site, logged in with GitHub.

Everything is editable there: projects, frames, writing, the play bento cards, experience,
testimonials, and your profile/contact. Saving writes the files + images listed below for you.

## 2. By hand (if you prefer)

**Text content** → `src/content/…` (one `.yaml` file per entry):

| Section            | Folder                          |
| ------------------ | ------------------------------- |
| 01 build (projects)| `src/content/projects/`         |
| 02 frames          | `src/content/frames/`           |
| 02 grade slider    | `src/content/grade-slider.yaml` |
| 03 words           | `src/content/writing/`          |
| 04 play (cards)    | `src/content/play/`             |
| 05 cv (experience) | `src/content/experience/`       |
| testimonials       | `src/content/testimonials/`     |
| profile / contact  | `src/content/profile.yaml`      |

**Images & files** → `public/…`:

| What                         | Folder                  |
| ---------------------------- | ----------------------- |
| project screenshots          | `public/images/projects/` |
| frames photos / video posters| `public/images/frames/`   |
| frames short clips (mp4/webm) | `public/videos/`         |
| grade slider (flat + graded) | `public/images/grade/`    |
| résumé (PDF)                 | `public/files/`           |

## 3. Fonts

Drop the real font files in **`src/fonts/`**, then follow the TODO in
`src/lib/fonts.ts` (uncomment the `localFont` block) to swap the stand-ins for the real
Exposure + Editorial New:

- `Exposure-Variable.woff2`
- `EditorialNew-Regular.woff2`, `EditorialNew-Italic.woff2`, `EditorialNew-Medium.woff2`

Until then the site runs on stand-in fonts (Fraunces), so everything works now.
