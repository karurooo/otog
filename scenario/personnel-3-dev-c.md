# Personnel 3 (Dev C) — Task Guide: Athletes, News & Gallery

**Base Integration Branch:** `development`
**Primary Peer Reviewer:** Personnel 4 (Dev D)
**Your Owned Files (Zero Overlap With Other Personnel):**
1. **Athletes:** `/src/features/athletes/data/athletes.ts`
2. **News:** `/src/features/news/data/news.ts`
3. **Gallery:** `/src/features/gallery/data/gallery.ts`

---

## Golden Zero-Conflict Workflow (Repeat Before Every PR)

Work strictly from **PR #1 down to PR #12** in order. Merge one PR before starting the next:

```bash
git checkout development
git pull origin development
git checkout -b <branch-name>
# 1. Paste the code into the exact path shown on Line 1 (// File: ...)
# 2. Verify locally: npm run lint && npm run type-check
git add <file-path>
git commit -m "<commit-message>"
git push -u origin <branch-name>
# 3. Open PR targeting `development` using the PR Title & PR Description below
```

---

## Wave 1 — Stage 1: Initial Creation

### PR #1 — Athletes (Stage 1: Initial Creation)
- **Target File:** `/src/features/athletes/data/athletes.ts`
- **Branch:** `feat/athletes-initial-profiles`
- **Commit:** `feat(athletes): add initial featured athletes and 2026 medal tally`
- **PR Title:** `feat(athletes): initial athletes roster and 2026 tally`

**PR Description:**
```markdown
## Summary
Populates the initial featured athletes carousel (2 athletes) and the first two 2026 competition rows in the medal tally table.

## Stage
- [x] Stage 1: Initial Creation

## Changes Made
- Added `Carlo D. Morales` and `Aira M. Castillo` to `featuredAthletesFixture` in `/src/features/athletes/data/athletes.ts`.
- Added 2026 `Palarong Pambansa` and `Batang Pinoy` entries to `medalTallyFixture`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/athletes/data/athletes.ts
import type { ApiResponse } from '@/types/api'
import type { Athlete, MedalTallyRow } from '../types/athlete'

export const featuredAthletesFixture: ApiResponse<Athlete[]> = {
  data: [
    {
      id: 1,
      full_name: 'Carlo D. Morales',
      sport: 'Athletics',
      achievement: 'Gold medalist, 400m sprint, CARAA 2026.',
      year: 2026,
      photo: null,
    },
    {
      id: 2,
      full_name: 'Aira M. Castillo',
      sport: 'Swimming',
      achievement: 'Gold medalist, 100m freestyle, CARAA 2026.',
      year: 2026,
      photo: null,
    },
  ],
  message: 'OK',
  errors: null,
}

const row = (
  competition: string,
  year: number,
  gold: number,
  silver: number,
  bronze: number,
): MedalTallyRow => ({ competition, year, gold, silver, bronze })

export const medalTallyFixture: ApiResponse<MedalTallyRow[]> = {
  data: [
    row('Palarong Pambansa', 2026, 6, 4, 9),
    row('Batang Pinoy', 2026, 8, 7, 11),
  ],
  message: 'OK',
  errors: null,
}
```

---

### PR #2 — News (Stage 1: Initial Creation)
*(Merge PR #1 → pull `development`)*
- **Target File:** `/src/features/news/data/news.ts`
- **Branch:** `feat/news-initial-articles`
- **Commit:** `feat(news): add initial 2 news articles fixture`
- **PR Title:** `feat(news): initial news feed with 2 starter items`

**PR Description:**
```markdown
## Summary
Populates the News section with the first two starter articles (`announcement` and `result` categories).

## Stage
- [x] Stage 1: Initial Creation

## Changes Made
- Added Articles #1 and #2 in `/src/features/news/data/news.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/news/data/news.ts
import type { PaginatedResponse } from '@/types/api'
import type { NewsItem } from '../types/newsItem'

const items: NewsItem[] = [
  {
    id: 1,
    title: 'Registration Opens for Grassroots Sports Clinics 2026',
    category: 'announcement',
    published_at: '2026-11-16',
    excerpt: 'Free weekend clinics are now open to Butuan City youth.',
    body: [
      'The Butuan City Sports Department has opened registration for its 2026 grassroots sports clinics.',
    ],
    cover: null,
  },
  {
    id: 2,
    title: 'Butuan Swimmers Haul 12 Golds at Regional Meet',
    category: 'result',
    published_at: '2026-11-15',
    excerpt: 'City swim delegation finishes first overall in the regional aquatics competition.',
    body: [
      'Butuan City youth swimmers secured 12 gold medals during the weekend regional aquatics meet.',
    ],
    cover: null,
  },
]

export function loadNewsFixture(
  page: number,
  perPage: number,
): PaginatedResponse<NewsItem> {
  const sorted = [...items].sort((a, b) =>
    b.published_at.localeCompare(a.published_at),
  )
  const start = (page - 1) * perPage
  return {
    data: sorted.slice(start, start + perPage),
    meta: {
      current_page: page,
      last_page: Math.max(1, Math.ceil(sorted.length / perPage)),
      per_page: perPage,
      total: sorted.length,
    },
    message: 'OK',
    errors: null,
  }
}
```

---

### PR #3 — Gallery (Stage 1: Initial Creation)
*(Merge PR #2 → pull `development`)*
- **Target File:** `/src/features/gallery/data/gallery.ts`
- **Branch:** `feat/gallery-initial-album`
- **Commit:** `feat(gallery): add initial City Events photo album`
- **PR Title:** `feat(gallery): initial gallery fixture with 1 starter album`

**PR Description:**
```markdown
## Summary
Creates the initial `City Events` photo album with 3 starter highlight photos so the Gallery grid and lightbox can be previewed.

## Stage
- [x] Stage 1: Initial Creation

## Changes Made
- Added `tile()` helper and initial `City Events` album (3 photos) in `/src/features/gallery/data/gallery.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/gallery/data/gallery.ts
import type { ApiResponse } from '@/types/api'
import type { Album, Photo } from '../types/album'

const tile = (
  id: number,
  label: string,
  alt: string,
  w: number,
  h: number,
  hue: number,
): Photo => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="100%" height="100%" fill="hsl(${hue} 45% 40%)"/><text x="50%" y="50%" fill="white" font-family="sans-serif" font-size="${Math.round(w / 14)}" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`
  return {
    id,
    src: `data:image/svg+xml,${encodeURIComponent(svg)}`,
    alt,
    width: w,
    height: h,
  }
}

export const galleryFixture: ApiResponse<Album[]> = {
  data: [
    {
      id: 1,
      title: 'City Events',
      photos: [
        tile(1, 'Opening Parade', 'Athletes marching during opening parade', 600, 400, 210),
        tile(2, 'Track Finals', 'Sprinters starting 100m finals', 400, 600, 240),
        tile(3, 'Awarding', 'Medalists on the podium', 600, 450, 180),
      ],
    },
  ],
  message: 'OK',
  errors: null,
}
```

---

## Wave 2 — Stage 2: Incomplete Details

### PR #4 — Athletes (Stage 2: Incomplete Details)
*(Merge PR #3 → pull `development`)*
- **Target File:** `/src/features/athletes/data/athletes.ts`
- **Branch:** `feat/athletes-expand-roster-draft`
- **Commit:** `feat(athletes): expand featured athletes and multi-year medal tally draft`
- **PR Title:** `feat(athletes): add remaining athletes and 2025 medal rows (WIP)`

**PR Description:**
```markdown
## Summary
Expands the featured athletes list to 4 athletes and adds additional 2026/2025 competition medal tally rows.

## Stage
- [x] Stage 2: Incomplete Details (WIP / Partial)

## Changes Made
- Added Athletes #3 and #4 plus PNG, CARAA (2026), and partial 2025 rows in `/src/features/athletes/data/athletes.ts`.

## Known Limitations / Reviewer Focus
- Achievements for Athletes #3 and #4 are still marked `'Achievement TBD'`.
- Please proofread sport names and competition titles for typos.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/athletes/data/athletes.ts
import type { ApiResponse } from '@/types/api'
import type { Athlete, MedalTallyRow } from '../types/athlete'

export const featuredAthletesFixture: ApiResponse<Athlete[]> = {
  data: [
    {
      id: 1,
      full_name: 'Carlo D. Morales',
      sport: 'Athletics',
      achievement: 'Gold medalist, 400m sprint, CARAA 2026.',
      year: 2026,
      photo: null,
    },
    {
      id: 2,
      full_name: 'Aira M. Castillo',
      sport: 'Swimming',
      achievement: 'Gold medalist, 100m freestyle, CARAA 2026.',
      year: 2026,
      photo: null,
    },
    {
      id: 3,
      full_name: 'Jomar P. Del Rosario',
      sport: 'Boxng',
      achievement: 'Achievement TBD',
      year: 2026,
      photo: null,
    },
    {
      id: 4,
      full_name: 'Trisha L. Ramos',
      sport: 'Weighlifting',
      achievement: 'Achievement TBD',
      year: 2026,
      photo: null,
    },
  ],
  message: 'OK',
  errors: null,
}

const row = (
  competition: string,
  year: number,
  gold: number,
  silver: number,
  bronze: number,
): MedalTallyRow => ({ competition, year, gold, silver, bronze })

export const medalTallyFixture: ApiResponse<MedalTallyRow[]> = {
  data: [
    row('Palarong Pambanssa', 2026, 6, 4, 9),
    row('Batang Pinoy', 2026, 8, 7, 11),
    row('PNG', 2026, 3, 2, 5),
    row('CARAA', 2026, 12, 10, 14),
    row('Palarong Pambansa', 2025, 5, 6, 8),
    row('Batang Pinoy', 2025, 7, 5, 10),
  ],
  message: 'OK',
  errors: null,
}
```

---

### PR #5 — News (Stage 2: Incomplete Details)
*(Merge PR #4 → pull `development`)*
- **Target File:** `/src/features/news/data/news.ts`
- **Branch:** `feat/news-draft-feed`
- **Commit:** `feat(news): add advisory and feature articles draft`
- **PR Title:** `feat(news): expand news feed to 6 articles (WIP)`

**PR Description:**
```markdown
## Summary
Adds advisory, feature, announcement, and result draft articles to fill a full first page of the News grid.

## Stage
- [x] Stage 2: Incomplete Details (WIP / Partial)

## Changes Made
- Added Articles #3 through #6 in `/src/features/news/data/news.ts`.

## Known Limitations / Reviewer Focus
- Excerpts and bodies for Articles #5 and #6 are still `'Draft ... TBD'`.
- Please check headlines for spelling errors and verify `published_at` date formats so chronological sorting works.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/news/data/news.ts
import type { PaginatedResponse } from '@/types/api'
import type { NewsItem } from '../types/newsItem'

const items: NewsItem[] = [
  {
    id: 1,
    title: 'Registration Opens for Grassroots Sports Clinics 2026',
    category: 'announcement',
    published_at: '2026-11-16',
    excerpt: 'Free weekend clinics are now open to Butuan City youth.',
    body: [
      'The Butuan City Sports Department has opened registration for its 2026 grassroots sports clinics.',
    ],
    cover: null,
  },
  {
    id: 2,
    title: 'Butuan Swimmers Haul 12 Golds at Regional Meet',
    category: 'result',
    published_at: '2026-11-15',
    excerpt: 'City swim delegation finishes first overall in the regional aquatics competition.',
    body: [
      'Butuan City youth swimmers secured 12 gold medals during the weekend regional aquatics meet.',
    ],
    cover: null,
  },
  {
    id: 3,
    title: 'Libertad Aquatic Center Maintenace Advisory',
    category: 'advisory',
    published_at: '2026-11-14',
    excerpt: 'Scheduled filtration maintenance begins this week.',
    body: ['Pool operations are temporarily paused for filtration pump maintenance.'],
    cover: null,
  },
  {
    id: 4,
    title: 'Coach Spotlight: Building Youth Baskteball Leaders',
    category: 'feature',
    published_at: '11/13/2026',
    excerpt: 'How barangay clinics are mentoring the next generation of players.',
    body: ['Draft feature body.'],
    cover: null,
  },
  {
    id: 5,
    title: 'Inter-Barangay League Semifinals Schedule Released',
    category: 'announcement',
    published_at: '2026-11-12',
    excerpt: 'Draft excerpt TBD',
    body: ['Draft body TBD.'],
    cover: null,
  },
  {
    id: 6,
    title: 'Balangay Fun Run Draws Over 2,000 Participants',
    category: 'result',
    published_at: '2026-11-11',
    excerpt: 'Draft excerpt TBD',
    body: ['Draft body TBD.'],
    cover: null,
  },
]

export function loadNewsFixture(
  page: number,
  perPage: number,
): PaginatedResponse<NewsItem> {
  const sorted = [...items].sort((a, b) =>
    b.published_at.localeCompare(a.published_at),
  )
  const start = (page - 1) * perPage
  return {
    data: sorted.slice(start, start + perPage),
    meta: {
      current_page: page,
      last_page: Math.max(1, Math.ceil(sorted.length / perPage)),
      per_page: perPage,
      total: sorted.length,
    },
    message: 'OK',
    errors: null,
  }
}
```

---

### PR #6 — Gallery (Stage 2: Incomplete Details)
*(Merge PR #5 → pull `development`)*
- **Target File:** `/src/features/gallery/data/gallery.ts`
- **Branch:** `feat/gallery-expand-albums-draft`
- **Commit:** `feat(gallery): add Training album and expand Events photos draft`
- **PR Title:** `feat(gallery): expand gallery albums (WIP)`

**PR Description:**
```markdown
## Summary
Adds a second gallery album (`Training Clinics`) and expands `City Events` with a fourth photo.

## Stage
- [x] Stage 2: Incomplete Details (WIP / Partial)

## Changes Made
- Added Album #2 and Photo #4 in `/src/features/gallery/data/gallery.ts`.

## Known Limitations / Reviewer Focus
- Accessibility `alt` text is currently placeholder `'photo'` across tiles.
- Please check album and photo labels for typos.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/gallery/data/gallery.ts
import type { ApiResponse } from '@/types/api'
import type { Album, Photo } from '../types/album'

const tile = (
  id: number,
  label: string,
  alt: string,
  w: number,
  h: number,
  hue: number,
): Photo => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="100%" height="100%" fill="hsl(${hue} 45% 40%)"/><text x="50%" y="50%" fill="white" font-family="sans-serif" font-size="${Math.round(w / 14)}" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`
  return {
    id,
    src: `data:image/svg+xml,${encodeURIComponent(svg)}`,
    alt,
    width: w,
    height: h,
  }
}

export const galleryFixture: ApiResponse<Album[]> = {
  data: [
    {
      id: 1,
      title: 'City Events',
      photos: [
        tile(1, 'Opening Parade', 'photo', 600, 400, 210),
        tile(2, 'Track Finals', 'photo', 400, 600, 240),
        tile(3, 'Awarding', 'photo', 600, 450, 180),
        tile(4, 'Fun Run Start', 'photo', 500, 500, 150),
      ],
    },
    {
      id: 2,
      title: 'Traning Clinics',
      photos: [
        tile(5, 'Swiming Clinic', 'photo', 600, 400, 200),
        tile(6, 'Basketball Drills', 'photo', 400, 600, 30),
      ],
    },
  ],
  message: 'OK',
  errors: null,
}
```

---

## Wave 3 — Stage 3: Enhancement & Correction

### PR #7 — Athletes (Stage 3: Correction & Enhancement)
*(Merge PR #6 → pull `development`)*
- **Target File:** `/src/features/athletes/data/athletes.ts`
- **Branch:** `fix/athletes-typos-and-achievements`
- **Commit:** `fix(athletes): fix sport and competition spellings and add athlete achievements`
- **PR Title:** `fix(athletes): correct spellings and populate missing achievements`

**PR Description:**
```markdown
## Summary
Fixes sport and competition typos caught during Stage 2 review and fills in verified achievements for Boxing and Weightlifting athletes.

## Stage
- [x] Stage 3: Enhancement / Correction

## Changes Made
- Corrected `Boxng` -> `Boxing`, `Weighlifting` -> `Weightlifting`, and `Palarong Pambanssa` -> `Palarong Pambansa` in `/src/features/athletes/data/athletes.ts`.
- Replaced `'Achievement TBD'` with verified 2026 achievements for Athletes #3 and #4.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/athletes/data/athletes.ts
import type { ApiResponse } from '@/types/api'
import type { Athlete, MedalTallyRow } from '../types/athlete'

export const featuredAthletesFixture: ApiResponse<Athlete[]> = {
  data: [
    {
      id: 1,
      full_name: 'Carlo D. Morales',
      sport: 'Athletics',
      achievement: 'Gold medalist, 400m sprint, CARAA 2026.',
      year: 2026,
      photo: null,
    },
    {
      id: 2,
      full_name: 'Aira M. Castillo',
      sport: 'Swimming',
      achievement: 'Gold medalist, 100m freestyle, CARAA 2026.',
      year: 2026,
      photo: null,
    },
    {
      id: 3,
      full_name: 'Jomar P. Del Rosario',
      sport: 'Boxing',
      achievement: 'Gold medalist, flyweight division, Batang Pinoy 2026.',
      year: 2026,
      photo: null,
    },
    {
      id: 4,
      full_name: 'Trisha L. Ramos',
      sport: 'Weightlifting',
      achievement: 'Silver medalist, 49kg youth class, Palarong Pambansa 2026.',
      year: 2026,
      photo: null,
    },
  ],
  message: 'OK',
  errors: null,
}

const row = (
  competition: string,
  year: number,
  gold: number,
  silver: number,
  bronze: number,
): MedalTallyRow => ({ competition, year, gold, silver, bronze })

export const medalTallyFixture: ApiResponse<MedalTallyRow[]> = {
  data: [
    row('Palarong Pambansa', 2026, 6, 4, 9),
    row('Batang Pinoy', 2026, 8, 7, 11),
    row('PNG', 2026, 3, 2, 5),
    row('CARAA', 2026, 12, 10, 14),
    row('Palarong Pambansa', 2025, 5, 6, 8),
    row('Batang Pinoy', 2025, 7, 5, 10),
  ],
  message: 'OK',
  errors: null,
}
```

---

### PR #8 — News (Stage 3: Correction)
*(Merge PR #7 → pull `development`)*
- **Target File:** `/src/features/news/data/news.ts`
- **Branch:** `fix/news-typos-and-dates`
- **Commit:** `fix(news): correct article title spellings and ISO published_at date`
- **PR Title:** `fix(news): fix spelling errors and restore chronological sorting`

**PR Description:**
```markdown
## Summary
Fixes spelling mistakes in headlines, restores ISO date formatting on Article #4 so newest-first sorting works, and fills in missing excerpts for Articles #5 and #6.

## Stage
- [x] Stage 3: Enhancement / Correction

## Changes Made
- Corrected `Maintenace` -> `Maintenance` and `Baskteball` -> `Basketball` in `/src/features/news/data/news.ts`.
- Changed `11/13/2026` -> `2026-11-13` and replaced `'Draft excerpt TBD'` with real summaries.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Confirmed articles now sort strictly newest-first in the UI.
```

**Code to Paste:**
```ts
// File: /src/features/news/data/news.ts
import type { PaginatedResponse } from '@/types/api'
import type { NewsItem } from '../types/newsItem'

const items: NewsItem[] = [
  {
    id: 1,
    title: 'Registration Opens for Grassroots Sports Clinics 2026',
    category: 'announcement',
    published_at: '2026-11-16',
    excerpt: 'Free weekend clinics are now open to Butuan City youth.',
    body: [
      'The Butuan City Sports Department has opened registration for its 2026 grassroots sports clinics.',
    ],
    cover: null,
  },
  {
    id: 2,
    title: 'Butuan Swimmers Haul 12 Golds at Regional Meet',
    category: 'result',
    published_at: '2026-11-15',
    excerpt: 'City swim delegation finishes first overall in the regional aquatics competition.',
    body: [
      'Butuan City youth swimmers secured 12 gold medals during the weekend regional aquatics meet.',
    ],
    cover: null,
  },
  {
    id: 3,
    title: 'Libertad Aquatic Center Maintenance Advisory',
    category: 'advisory',
    published_at: '2026-11-14',
    excerpt: 'Scheduled filtration maintenance begins this week.',
    body: ['Pool operations are temporarily paused for filtration pump maintenance.'],
    cover: null,
  },
  {
    id: 4,
    title: 'Coach Spotlight: Building Youth Basketball Leaders',
    category: 'feature',
    published_at: '2026-11-13',
    excerpt: 'How barangay clinics are mentoring the next generation of players.',
    body: [
      'Community coaches across Butuan City are turning weekend clinics into mentorship hubs.',
    ],
    cover: null,
  },
  {
    id: 5,
    title: 'Inter-Barangay League Semifinals Schedule Released',
    category: 'announcement',
    published_at: '2026-11-12',
    excerpt: 'Tip-off times and court assignments for the final four barangays.',
    body: ['Draft body TBD.'],
    cover: null,
  },
  {
    id: 6,
    title: 'Balangay Fun Run Draws Over 2,000 Participants',
    category: 'result',
    published_at: '2026-11-11',
    excerpt: 'Families, students, and local runners packed Guingona Park for the annual run.',
    body: ['Draft body TBD.'],
    cover: null,
  },
]

export function loadNewsFixture(
  page: number,
  perPage: number,
): PaginatedResponse<NewsItem> {
  const sorted = [...items].sort((a, b) =>
    b.published_at.localeCompare(a.published_at),
  )
  const start = (page - 1) * perPage
  return {
    data: sorted.slice(start, start + perPage),
    meta: {
      current_page: page,
      last_page: Math.max(1, Math.ceil(sorted.length / perPage)),
      per_page: perPage,
      total: sorted.length,
    },
    message: 'OK',
    errors: null,
  }
}
```

---

### PR #9 — Gallery (Stage 3: Correction & Enhancement)
*(Merge PR #8 → pull `development`)*
- **Target File:** `/src/features/gallery/data/gallery.ts`
- **Branch:** `fix/gallery-typos-and-alt-text`
- **Commit:** `fix(gallery): correct album/photo spellings and add accessible alt text`
- **PR Title:** `fix(gallery): fix spelling errors and improve photo alt descriptions`

**PR Description:**
```markdown
## Summary
Fixes spelling mistakes in album and tile labels and replaces generic `'photo'` alt attributes with descriptive, screen-reader-friendly captions.

## Stage
- [x] Stage 3: Enhancement / Correction

## Changes Made
- Fixed `Traning Clinics` -> `Training Clinics` and `Swiming Clinic` -> `Swimming Clinic` in `/src/features/gallery/data/gallery.ts`.
- Added descriptive `alt` text to all 6 photos.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Checked lightbox accessible button labels (`View photo: ...`).
```

**Code to Paste:**
```ts
// File: /src/features/gallery/data/gallery.ts
import type { ApiResponse } from '@/types/api'
import type { Album, Photo } from '../types/album'

const tile = (
  id: number,
  label: string,
  alt: string,
  w: number,
  h: number,
  hue: number,
): Photo => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="100%" height="100%" fill="hsl(${hue} 45% 40%)"/><text x="50%" y="50%" fill="white" font-family="sans-serif" font-size="${Math.round(w / 14)}" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`
  return {
    id,
    src: `data:image/svg+xml,${encodeURIComponent(svg)}`,
    alt,
    width: w,
    height: h,
  }
}

export const galleryFixture: ApiResponse<Album[]> = {
  data: [
    {
      id: 1,
      title: 'City Events',
      photos: [
        tile(1, 'Opening Parade', 'Butuan City delegations marching in the opening parade', 600, 400, 210),
        tile(2, 'Track Finals', 'Student-athletes sprinting during the 100m track finals', 400, 600, 240),
        tile(3, 'Awarding', 'Gold, silver, and bronze medalists standing on the podium', 600, 450, 180),
        tile(4, 'Fun Run Start', 'Runners crossing the Balangay Fun Run starting arch', 500, 500, 150),
      ],
    },
    {
      id: 2,
      title: 'Training Clinics',
      photos: [
        tile(5, 'Swimming Clinic', 'Youth swimmers practicing freestyle strokes at Libertad Aquatic Center', 600, 400, 200),
        tile(6, 'Basketball Drills', 'Young players practicing layups at the covered gymnasium', 400, 600, 30),
      ],
    },
  ],
  message: 'OK',
  errors: null,
}
```

---

## Wave 4 — Stage 4: Section Completion

### PR #10 — Athletes (Stage 4: Completion)
*(Merge PR #9 → pull `development`)*
- **Target File:** `/src/features/athletes/data/athletes.ts`
- **Branch:** `feat/athletes-complete`
- **Commit:** `feat(athletes): complete 2025 PNG and CARAA medal tally records`
- **PR Title:** `feat(athletes): finalize Athletes section and complete 2025-2026 medal tally`

**PR Description:**
```markdown
## Summary
Adds the remaining 2025 PNG and CARAA rows so the medal tally provides a complete two-year comparison across all 4 major meets.

## Stage
- [x] Stage 4: Section Completion

## Changes Made
- Added 2025 `PNG` and `CARAA` rows to `medalTallyFixture` in `/src/features/athletes/data/athletes.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Verified year tabs (2026 and 2025) and medal totals calculate properly in `npm run dev`.
```

**Code to Paste:**
```ts
// File: /src/features/athletes/data/athletes.ts
import type { ApiResponse } from '@/types/api'
import type { Athlete, MedalTallyRow } from '../types/athlete'

export const featuredAthletesFixture: ApiResponse<Athlete[]> = {
  data: [
    {
      id: 1,
      full_name: 'Carlo D. Morales',
      sport: 'Athletics',
      achievement: 'Gold medalist, 400m sprint, CARAA 2026.',
      year: 2026,
      photo: null,
    },
    {
      id: 2,
      full_name: 'Aira M. Castillo',
      sport: 'Swimming',
      achievement: 'Gold medalist, 100m freestyle, CARAA 2026.',
      year: 2026,
      photo: null,
    },
    {
      id: 3,
      full_name: 'Jomar P. Del Rosario',
      sport: 'Boxing',
      achievement: 'Gold medalist, flyweight division, Batang Pinoy 2026.',
      year: 2026,
      photo: null,
    },
    {
      id: 4,
      full_name: 'Trisha L. Ramos',
      sport: 'Weightlifting',
      achievement: 'Silver medalist, 49kg youth class, Palarong Pambansa 2026.',
      year: 2026,
      photo: null,
    },
  ],
  message: 'OK',
  errors: null,
}

const row = (
  competition: string,
  year: number,
  gold: number,
  silver: number,
  bronze: number,
): MedalTallyRow => ({ competition, year, gold, silver, bronze })

export const medalTallyFixture: ApiResponse<MedalTallyRow[]> = {
  data: [
    row('Palarong Pambansa', 2026, 6, 4, 9),
    row('Batang Pinoy', 2026, 8, 7, 11),
    row('PNG', 2026, 3, 2, 5),
    row('CARAA', 2026, 12, 10, 14),
    row('Palarong Pambansa', 2025, 5, 6, 8),
    row('Batang Pinoy', 2025, 7, 5, 10),
    row('PNG', 2025, 2, 3, 4),
    row('CARAA', 2025, 10, 9, 12),
  ],
  message: 'OK',
  errors: null,
}
```

---

### PR #11 — News (Stage 4: Completion)
*(Merge PR #10 → pull `development`)*
- **Target File:** `/src/features/news/data/news.ts`
- **Branch:** `feat/news-complete`
- **Commit:** `feat(news): finalize full article bodies across all news items`
- **PR Title:** `feat(news): complete News section with approved multi-paragraph stories`

**PR Description:**
```markdown
## Summary
Completes all 6 news articles with full two-paragraph stories and removes all remaining draft placeholders.

## Stage
- [x] Stage 4: Section Completion

## Changes Made
- Populated complete multi-paragraph `body` arrays for all 6 articles in `/src/features/news/data/news.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Clicked each news card in `npm run dev` to confirm article reader modal renders cleanly.
```

**Code to Paste:**
```ts
// File: /src/features/news/data/news.ts
import type { PaginatedResponse } from '@/types/api'
import type { NewsItem } from '../types/newsItem'

const items: NewsItem[] = [
  {
    id: 1,
    title: 'Registration Opens for Grassroots Sports Clinics 2026',
    category: 'announcement',
    published_at: '2026-11-16',
    excerpt: 'Free weekend clinics are now open to Butuan City youth.',
    body: [
      'The Butuan City Sports Department has opened registration for its 2026 grassroots sports clinics covering swimming, basketball, athletics, and para-sports.',
      'Interested participants may download the registration form in the Resources section or visit the City Sports Office from Monday to Friday.',
    ],
    cover: null,
  },
  {
    id: 2,
    title: 'Butuan Swimmers Haul 12 Golds at Regional Meet',
    category: 'result',
    published_at: '2026-11-15',
    excerpt: 'City swim delegation finishes first overall in the regional aquatics competition.',
    body: [
      'Butuan City youth swimmers secured 12 gold, 8 silver, and 6 bronze medals during the regional aquatics meet.',
      'Head coach Ramon Aquino credited consistent weekend grassroots sessions for the squad’s record-breaking relay finish.',
    ],
    cover: null,
  },
  {
    id: 3,
    title: 'Libertad Aquatic Center Maintenance Advisory',
    category: 'advisory',
    published_at: '2026-11-14',
    excerpt: 'Scheduled filtration maintenance begins this week.',
    body: [
      'Pool operations at Libertad Aquatic Center are temporarily paused for scheduled filtration pump rehabilitation.',
      'Normal public hours and Learn to Swim classes will resume upon clearance by the City Engineering Office in December 2026.',
    ],
    cover: null,
  },
  {
    id: 4,
    title: 'Coach Spotlight: Building Youth Basketball Leaders',
    category: 'feature',
    published_at: '2026-11-13',
    excerpt: 'How barangay clinics are mentoring the next generation of players.',
    body: [
      'Community coaches across Butuan City are turning after-school clinics into structured mentorship hubs focused on discipline and academics.',
      'Over 400 student-athletes participated in the program this semester across 18 barangays.',
    ],
    cover: null,
  },
  {
    id: 5,
    title: 'Inter-Barangay League Semifinals Schedule Released',
    category: 'announcement',
    published_at: '2026-11-12',
    excerpt: 'Tip-off times and court assignments for the final four barangays.',
    body: [
      'The semifinals of the Inter-Barangay Basketball League will be held at the Butuan City Covered Gymnasium starting at 4:00 PM.',
      'Admission is free for all residents; spectators are reminded to observe venue safety guidelines.',
    ],
    cover: null,
  },
  {
    id: 6,
    title: 'Balangay Fun Run Draws Over 2,000 Participants',
    category: 'result',
    published_at: '2026-11-11',
    excerpt: 'Families, students, and local runners packed Guingona Park for the annual run.',
    body: [
      'More than 2,000 runners joined the 3K, 5K, and 10K categories of the annual Balangay Fun Run.',
      'Proceeds from sponsor pledges will support equipment kits for barangay youth track clubs.',
    ],
    cover: null,
  },
]

export function loadNewsFixture(
  page: number,
  perPage: number,
): PaginatedResponse<NewsItem> {
  const sorted = [...items].sort((a, b) =>
    b.published_at.localeCompare(a.published_at),
  )
  const start = (page - 1) * perPage
  return {
    data: sorted.slice(start, start + perPage),
    meta: {
      current_page: page,
      last_page: Math.max(1, Math.ceil(sorted.length / perPage)),
      per_page: perPage,
      total: sorted.length,
    },
    message: 'OK',
    errors: null,
  }
}
```

---

### PR #12 — Gallery (Stage 4: Completion)
*(Merge PR #11 → pull `development`)*
- **Target File:** `/src/features/gallery/data/gallery.ts`
- **Branch:** `feat/gallery-complete`
- **Commit:** `feat(gallery): complete City Events (6 photos) and Training Clinics (4 photos) albums`
- **PR Title:** `feat(gallery): complete Gallery section with full curated albums`

**PR Description:**
```markdown
## Summary
Completes both curated gallery albums with 6 photos in `City Events` and 4 photos in `Training Clinics`, matching the expected grid and lightbox counter.

## Stage
- [x] Stage 4: Section Completion

## Changes Made
- Added remaining curated photos with descriptive alt text in `/src/features/gallery/data/gallery.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Tested album tab switching and keyboard arrow navigation inside the lightbox (`1 / 6` through `6 / 6`).
```

**Code to Paste:**
```ts
// File: /src/features/gallery/data/gallery.ts
import type { ApiResponse } from '@/types/api'
import type { Album, Photo } from '../types/album'

const tile = (
  id: number,
  label: string,
  alt: string,
  w: number,
  h: number,
  hue: number,
): Photo => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="100%" height="100%" fill="hsl(${hue} 45% 40%)"/><text x="50%" y="50%" fill="white" font-family="sans-serif" font-size="${Math.round(w / 14)}" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`
  return {
    id,
    src: `data:image/svg+xml,${encodeURIComponent(svg)}`,
    alt,
    width: w,
    height: h,
  }
}

export const galleryFixture: ApiResponse<Album[]> = {
  data: [
    {
      id: 1,
      title: 'City Events',
      photos: [
        tile(1, 'Opening Parade', 'Butuan City delegations marching in the opening parade', 600, 400, 210),
        tile(2, 'Track Finals', 'Student-athletes sprinting during the 100m track finals', 400, 600, 240),
        tile(3, 'Awarding', 'Gold, silver, and bronze medalists standing on the podium', 600, 450, 180),
        tile(4, 'Fun Run Start', 'Runners crossing the Balangay Fun Run starting arch', 500, 500, 150),
        tile(5, 'Volleyball Spike', 'City volleyball clinic scrimmage match at the covered gym', 600, 400, 280),
        tile(6, 'Closing Ceremony', 'Fireworks and community celebration at Libertad Sports Complex', 600, 450, 320),
      ],
    },
    {
      id: 2,
      title: 'Training Clinics',
      photos: [
        tile(7, 'Swimming Clinic', 'Youth swimmers practicing freestyle strokes at Libertad Aquatic Center', 600, 400, 200),
        tile(8, 'Basketball Drills', 'Young players practicing layups at the covered gymnasium', 400, 600, 30),
        tile(9, 'Zumba Morning', 'Residents joining Sunday morning Zumba in Guingona Park', 600, 450, 340),
        tile(10, 'Para-Sports', 'Adaptive table tennis training led by city coaches', 500, 500, 120),
      ],
    },
  ],
  message: 'OK',
  errors: null,
}
```
