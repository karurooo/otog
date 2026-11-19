# Personnel 1 (Dev A) — Task Guide: Navigation Link, Home & About

**Base Integration Branch:** `development`
**Primary Peer Reviewer:** Personnel 2 (Dev B)
**Your Owned Files (Zero Overlap With Other Personnel):**
1. **Navigation Link:** `/src/config/navigation.ts`
2. **Home (Hero Stats):** `/src/features/hero/data/siteStats.ts`
3. **About:** `/src/features/about/data/about.ts`

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

### PR #1 — Navigation Link (Stage 1: Initial Creation)
- **Target File:** `/src/config/navigation.ts`
- **Branch:** `feat/nav-initial-links`
- **Commit:** `feat(nav): add initial Home and About navigation links`
- **PR Title:** `feat(nav): initial navigation config with Home and About`

**PR Description:**
```markdown
## Summary
Sets up the initial top-level navigation configuration with the first two primary section links (`Home` and `About`).

## Stage
- [x] Stage 1: Initial Creation

## Changes Made
- Added `home` and `about` anchor entries to `NAV_ITEMS` in `/src/config/navigation.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Confirmed Home and About links appear in the header navigation bar.
```

**Code to Paste:**
```ts
// File: /src/config/navigation.ts
export interface NavItem {
  id: string
  label: string
}

// Stage 1: Initial navigation links (Home and About only)
export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
]
```

---

### PR #2 — Home (Stage 1: Initial Creation)
*(Wait for PR #1 to merge, then run `git checkout development && git pull origin development`)*
- **Target File:** `/src/features/hero/data/siteStats.ts`
- **Branch:** `feat/home-initial-stats`
- **Commit:** `feat(home): initialize hero site stats baseline figures`
- **PR Title:** `feat(home): add initial baseline metrics for Home hero`

**PR Description:**
```markdown
## Summary
Adds the first baseline department metrics to the Home hero stats strip so the count-up tiles render initial non-zero data.

## Stage
- [x] Stage 1: Initial Creation

## Changes Made
- Populated initial `athletes_count` and `programs_count` in `/src/features/hero/data/siteStats.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/hero/data/siteStats.ts
import type { ApiResponse } from '@/types/api'
import type { SiteStats } from '../types/siteStats'

// Stage 1: Initial baseline metrics
export const siteStatsFixture: ApiResponse<SiteStats> = {
  data: {
    athletes_count: 500,
    programs_count: 2,
    facilities_count: 0,
    medals_count: 0,
    medals_year: 2026,
  },
  message: 'OK',
  errors: null,
}
```

---

### PR #3 — About (Stage 1: Initial Creation)
*(Merge PR #2 → pull `development`)*
- **Target File:** `/src/features/about/data/about.ts`
- **Branch:** `feat/about-initial-draft`
- **Commit:** `feat(about): add initial mandate, mission and vision draft`
- **PR Title:** `feat(about): initial About section with mandate, mission and vision`

**PR Description:**
```markdown
## Summary
Populates the initial Mandate, Mission, Vision, and starter welcome message for the About section.

## Stage
- [x] Stage 1: Initial Creation

## Changes Made
- Added initial `mandate`, `mission`, `vision`, and placeholder `officer` record in `/src/features/about/data/about.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/about/data/about.ts
import type { ApiResponse } from '@/types/api'
import type { About } from '../types/about'

export const aboutFixture: ApiResponse<About> = {
  data: {
    mandate:
      'Plan, promote, and coordinate sports development programs for Butuan City.',
    mission:
      'Provide accessible sports programs that build healthy communities.',
    vision:
      'A city where every Butuanon has the opportunity to play and excel.',
    officer: {
      id: 0,
      full_name: 'TBD',
      position: 'City Sports Officer',
      photo: null,
      message: ['Welcome to the Butuan City Sports Department.'],
    },
    officials: [],
  },
  message: 'OK',
  errors: null,
}
```

---

## Wave 2 — Stage 2: Incomplete Details

### PR #4 — Navigation Link (Stage 2: Incomplete Details)
*(Merge PR #3 → pull `development`)*
- **Target File:** `/src/config/navigation.ts`
- **Branch:** `feat/nav-all-links-draft`
- **Commit:** `feat(nav): add remaining navigation links draft`
- **PR Title:** `feat(nav): expand navigation items for all sections (WIP)`

**PR Description:**
```markdown
## Summary
Expands `NAV_ITEMS` to cover all 10 page sections so the header and mobile navigation drawer display the full site structure.

## Stage
- [x] Stage 2: Incomplete Details (WIP / Partial)

## Changes Made
- Added draft navigation entries for Programs, Events, Facilities, Athletes, News, Gallery, Resources, and Contact in `/src/config/navigation.ts`.

## Known Limitations / Reviewer Focus
- Draft labels and anchor IDs still need proofreading and scroll-anchor verification against `HomePage.tsx`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/config/navigation.ts
export interface NavItem {
  id: string
  label: string
}

// Stage 2: Expanded links (contains intentional spelling and anchor ID errors)
export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'programs', label: 'Progarms' },
  { id: 'events', label: 'Evnets' },
  { id: 'facility', label: 'Facilties' },
  { id: 'athletes', label: 'Atletes' },
  { id: 'news', label: 'News' },
  { id: 'gallery', label: 'Galery' },
  { id: 'resources', label: 'Resoruces' },
  { id: 'contacts', label: 'Contact' },
]
```

---

### PR #5 — Home (Stage 2: Incomplete Details)
*(Merge PR #4 → pull `development`)*
- **Target File:** `/src/features/hero/data/siteStats.ts`
- **Branch:** `feat/home-draft-stats`
- **Commit:** `feat(home): add partial draft figures to hero stats`
- **PR Title:** `feat(home): populate draft hero statistics (WIP)`

**PR Description:**
```markdown
## Summary
Updates hero statistics with mid-year draft estimates while awaiting final facility and medal audit figures.

## Stage
- [x] Stage 2: Incomplete Details (WIP / Partial)

## Changes Made
- Updated `athletes_count` and `programs_count` in `/src/features/hero/data/siteStats.ts`.

## Known Limitations / Reviewer Focus
- `facilities_count` and `medals_count` are still `0` (`TODO` pending verification).
- Please double-check `medals_year` displayed on the fourth stat tile.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/hero/data/siteStats.ts
import type { ApiResponse } from '@/types/api'
import type { SiteStats } from '../types/siteStats'

// Stage 2: Incomplete counts and outdated medals_year
export const siteStatsFixture: ApiResponse<SiteStats> = {
  data: {
    athletes_count: 950,
    programs_count: 4,
    facilities_count: 0, // TODO: pending facilities count
    medals_count: 0, // TODO: pending verified medal tally
    medals_year: 2024,
  },
  message: 'OK',
  errors: null,
}
```

---

### PR #6 — About (Stage 2: Incomplete Details)
*(Merge PR #5 → pull `development`)*
- **Target File:** `/src/features/about/data/about.ts`
- **Branch:** `feat/about-officials-wip`
- **Commit:** `feat(about): add officer message and draft officials roster`
- **PR Title:** `feat(about): add department leadership details (WIP)`

**PR Description:**
```markdown
## Summary
Adds the City Sports Officer profile and an initial 4-member department officials roster.

## Stage
- [x] Stage 2: Incomplete Details (WIP / Partial)

## Changes Made
- Updated `officer` details and added 4 `officials` entries in `/src/features/about/data/about.ts`.

## Known Limitations / Reviewer Focus
- Officials #3 and #4 are still pending confirmed names and titles.
- Copy needs proofreading for spelling across mandate, vision, and officer title.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/about/data/about.ts
import type { ApiResponse } from '@/types/api'
import type { About } from '../types/about'

export const aboutFixture: ApiResponse<About> = {
  data: {
    mandate:
      'Plan, promote, and coordinate sports developement programs and facilities for Butuan City.',
    mission:
      'Provide accessible, inclusive sports programs that develop athletes and build healthy communities.',
    vision:
      'A city where every Butanon has the opportunity to play, compete, and excel.',
    officer: {
      id: 0,
      full_name: 'Dir. Roberto M. Villanueva',
      position: 'City Sports Offcier',
      photo: null,
      message: [
        'Welcome to the official website of the Butuan City Sports Depratment.',
      ],
    },
    officials: [
      {
        id: 1,
        full_name: 'Elena R. Santos',
        position: 'Assistant Sports Officer',
        photo: null,
      },
      {
        id: 2,
        full_name: 'Marco D. Cruz',
        position: 'Grassroots Programs Head',
        photo: null,
      },
      {
        id: 3,
        full_name: 'Official name pending',
        position: 'Position pending',
        photo: null,
      },
      {
        id: 4,
        full_name: 'Official name pending',
        position: 'Position pending',
        photo: null,
      },
    ],
  },
  message: 'OK',
  errors: null,
}
```

---

## Wave 3 — Stage 3: Enhancement & Correction

### PR #7 — Navigation Link (Stage 3: Correction)
*(Merge PR #6 → pull `development`)*
- **Target File:** `/src/config/navigation.ts`
- **Branch:** `fix/nav-spelling-corrections`
- **Commit:** `fix(nav): correct misspelled navigation link labels`
- **PR Title:** `fix(nav): correct spelling errors in navigation labels`

**PR Description:**
```markdown
## Summary
Fixes all misspelled navigation labels flagged during Stage 2 code review.

## Stage
- [x] Stage 3: Enhancement / Correction

## Changes Made
- Corrected labels in `/src/config/navigation.ts`: `Programs`, `Events`, `Facilities`, `Athletes`, `Gallery`, and `Resources`.

## Follow-up Remaining
- Verify `facility` and `contacts` anchor IDs against rendered section IDs in Stage 4.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/config/navigation.ts
export interface NavItem {
  id: string
  label: string
}

// Stage 3: Label spellings corrected; anchor IDs pending final verification
export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'programs', label: 'Programs' },
  { id: 'events', label: 'Events' },
  { id: 'facility', label: 'Facilities' },
  { id: 'athletes', label: 'Athletes' },
  { id: 'news', label: 'News' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'resources', label: 'Resources' },
  { id: 'contacts', label: 'Contact' },
]
```

---

### PR #8 — Home (Stage 3: Correction)
*(Merge PR #7 → pull `development`)*
- **Target File:** `/src/features/hero/data/siteStats.ts`
- **Branch:** `fix/home-stats-year-and-counts`
- **Commit:** `fix(home): correct medals year to 2026 and add facility/medal estimates`
- **PR Title:** `fix(home): fix medals year and populate missing facility and medal stats`

**PR Description:**
```markdown
## Summary
Fixes the outdated `medals_year` (`2024` -> `2026`) flagged in code review and fills in preliminary facility and medal counts.

## Stage
- [x] Stage 3: Enhancement / Correction

## Changes Made
- Updated `medals_year` to `2026` in `/src/features/hero/data/siteStats.ts`.
- Populated `facilities_count` (`5`) and `medals_count` (`58`) and removed `TODO` placeholders.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Confirmed tile label reads "Medals in 2026".
```

**Code to Paste:**
```ts
// File: /src/features/hero/data/siteStats.ts
import type { ApiResponse } from '@/types/api'
import type { SiteStats } from '../types/siteStats'

// Stage 3: Year corrected and counts populated (pending final Q4 audit)
export const siteStatsFixture: ApiResponse<SiteStats> = {
  data: {
    athletes_count: 1180,
    programs_count: 6,
    facilities_count: 5,
    medals_count: 58,
    medals_year: 2026,
  },
  message: 'OK',
  errors: null,
}
```

---

### PR #9 — About (Stage 3: Correction & Enhancement)
*(Merge PR #8 → pull `development`)*
- **Target File:** `/src/features/about/data/about.ts`
- **Branch:** `fix/about-typos-and-message`
- **Commit:** `fix(about): fix typos in mandate, vision, title and expand officer message`
- **PR Title:** `fix(about): correct spelling errors and expand officer message`

**PR Description:**
```markdown
## Summary
Fixes spelling mistakes found in Stage 2 review, expands the officer's welcome message to two paragraphs, and populates confirmed position titles for officials #3 and #4.

## Stage
- [x] Stage 3: Enhancement / Correction

## Changes Made
- Fixed `developement` -> `development`, `Butanon` -> `Butuanon`, `Offcier` -> `Officer`, and `Depratment` -> `Department` in `/src/features/about/data/about.ts`.
- Added second paragraph to `officer.message` and updated role titles for officials #3 and #4.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/about/data/about.ts
import type { ApiResponse } from '@/types/api'
import type { About } from '../types/about'

export const aboutFixture: ApiResponse<About> = {
  data: {
    mandate:
      'Plan, promote, and coordinate sports development programs and facilities for the people of Butuan City.',
    mission:
      'Provide accessible, inclusive sports programs that develop athletes and build healthy communities.',
    vision:
      'A city where every Butuanon has the opportunity to play, compete, and excel.',
    officer: {
      id: 0,
      full_name: 'Dir. Roberto M. Villanueva',
      position: 'City Sports Officer',
      photo: null,
      message: [
        'Welcome to the official website of the Butuan City Sports Department.',
        'We invite every athlete, parent, coach, and school to take part in our city-wide sports programs.',
      ],
    },
    officials: [
      {
        id: 1,
        full_name: 'Elena R. Santos',
        position: 'Assistant Sports Officer',
        photo: null,
      },
      {
        id: 2,
        full_name: 'Marco D. Cruz',
        position: 'Grassroots Programs Head',
        photo: null,
      },
      {
        id: 3,
        full_name: 'Official name pending',
        position: 'Facilities Operations Lead',
        photo: null,
      },
      {
        id: 4,
        full_name: 'Official name pending',
        position: 'Athlete Development Coordinator',
        photo: null,
      },
    ],
  },
  message: 'OK',
  errors: null,
}
```

---

## Wave 4 — Stage 4: Section Completion

### PR #10 — Navigation Link (Stage 4: Completion)
*(Merge PR #9 → pull `development`)*
- **Target File:** `/src/config/navigation.ts`
- **Branch:** `feat/nav-complete`
- **Commit:** `feat(nav): finalize navigation anchor IDs matching HomePage sections`
- **PR Title:** `feat(nav): complete navigation links and verify all section anchors`

**PR Description:**
```markdown
## Summary
Finalizes all 10 navigation anchor IDs so desktop navigation, mobile navigation drawer, and scroll-spy highlight every section accurately.

## Stage
- [x] Stage 4: Section Completion

## Changes Made
- Fixed `facility` -> `facilities` and `contacts` -> `contact` in `/src/config/navigation.ts`.
- Verified order matches `HomePage.tsx` top-to-bottom.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Clicked all 10 nav links in `npm run dev` to confirm smooth scroll to each section.
```

**Code to Paste:**
```ts
// File: /src/config/navigation.ts
export interface NavItem {
  id: string
  label: string
}

// Single source for section anchors (nav, scroll-spy, footer). Order = page order.
export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'programs', label: 'Programs' },
  { id: 'events', label: 'Events' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'athletes', label: 'Athletes' },
  { id: 'news', label: 'News' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'resources', label: 'Resources' },
  { id: 'contact', label: 'Contact' },
]
```

---

### PR #11 — Home (Stage 4: Completion)
*(Merge PR #10 → pull `development`)*
- **Target File:** `/src/features/hero/data/siteStats.ts`
- **Branch:** `feat/home-complete-stats`
- **Commit:** `feat(home): finalize verified 2026 Butuan City sports statistics`
- **PR Title:** `feat(home): complete Home hero section with verified 2026 figures`

**PR Description:**
```markdown
## Summary
Replaces draft estimates with final verified 2026 Butuan City Sports Department statistics, completing the Home hero section.

## Stage
- [x] Stage 4: Section Completion

## Changes Made
- Finalized `athletes_count` (1250), `programs_count` (12), `facilities_count` (8), `medals_count` (64), and `medals_year` (2026) in `/src/features/hero/data/siteStats.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Verified all four stat tiles animate and match approved totals.
```

**Code to Paste:**
```ts
// File: /src/features/hero/data/siteStats.ts
import type { ApiResponse } from '@/types/api'
import type { SiteStats } from '../types/siteStats'

export const siteStatsFixture: ApiResponse<SiteStats> = {
  data: {
    athletes_count: 1250,
    programs_count: 12,
    facilities_count: 8,
    medals_count: 64,
    medals_year: 2026,
  },
  message: 'OK',
  errors: null,
}
```

---

### PR #12 — About (Stage 4: Completion)
*(Merge PR #11 → pull `development`)*
- **Target File:** `/src/features/about/data/about.ts`
- **Branch:** `feat/about-complete`
- **Commit:** `feat(about): finalize complete department leadership roster`
- **PR Title:** `feat(about): complete About section with approved leadership roster`

**PR Description:**
```markdown
## Summary
Completes the About section by replacing the remaining pending official names with approved leadership roster entries.

## Stage
- [x] Stage 4: Section Completion

## Changes Made
- Filled in `Engr. Carlo B. Mendoza` and `Liza T. Reyes` in `/src/features/about/data/about.ts`.
- Confirmed zero placeholder strings remain in the About section.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Verified Mandate, Mission, Vision, Officer Message, and all 4 Officials render cleanly.
```

**Code to Paste:**
```ts
// File: /src/features/about/data/about.ts
import type { ApiResponse } from '@/types/api'
import type { About } from '../types/about'

export const aboutFixture: ApiResponse<About> = {
  data: {
    mandate:
      'Plan, promote, and coordinate sports development programs and facilities for the people of Butuan City.',
    mission:
      'Provide accessible, inclusive sports programs that develop athletes and build healthy communities.',
    vision:
      'A city where every Butuanon has the opportunity to play, compete, and excel.',
    officer: {
      id: 0,
      full_name: 'Dir. Roberto M. Villanueva',
      position: 'City Sports Officer',
      photo: null,
      message: [
        'Welcome to the official website of the Butuan City Sports Department.',
        'We invite every athlete, parent, coach, and school to take part in our city-wide sports programs.',
      ],
    },
    officials: [
      {
        id: 1,
        full_name: 'Elena R. Santos',
        position: 'Assistant Sports Officer',
        photo: null,
      },
      {
        id: 2,
        full_name: 'Marco D. Cruz',
        position: 'Grassroots Programs Head',
        photo: null,
      },
      {
        id: 3,
        full_name: 'Engr. Carlo B. Mendoza',
        position: 'Facilities Operations Lead',
        photo: null,
      },
      {
        id: 4,
        full_name: 'Liza T. Reyes',
        position: 'Athlete Development Coordinator',
        photo: null,
      },
    ],
  },
  message: 'OK',
  errors: null,
}
```
