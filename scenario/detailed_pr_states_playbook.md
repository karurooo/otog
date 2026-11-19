# Detailed 4-Stage PR States, PR Descriptions & Zero-Merge-Conflict Sequence

This enhanced playbook pairs with the **`feat/bcsd-portal-scaffold`** branch (commit `e8dfbdd`) to give **4 personnel** a complete, conflict-free **48-PR simulation** (12 sections × 4 stages).

Every PR below includes:
- Exact **branch name**, **Conventional Commit message**, and **PR title**
- A complete, copy-pasteable **PR Description**
- Complete, copy-pasteable **file code with `// File: <path>` on line 1**

---

## 1. Initial Scaffold Branch (`feat/bcsd-portal-scaffold`)

The branch **`feat/bcsd-portal-scaffold`** has been created locally from `development` and verified with `npm run lint`, `npm run type-check`, and `npm run build`.

- **Project scaffold kept intact:** Full React + TypeScript + Vite app, routing, Tailwind styling, `AppShell`, all 10 section components (including built-in `EmptyState` views), hooks, and types.
- **11 section data/config files reset to empty/minimal scaffold states:**
  1. [navigation.ts](/src/config/navigation.ts) (`NAV_ITEMS = []`)
  2. [siteStats.ts](/src/features/hero/data/siteStats.ts) (zeroed counts)
  3. [about.ts](/src/features/about/data/about.ts) (empty strings & `officials = []`)
  4. [programs.ts](/src/features/programs/data/programs.ts) (`data = []`)
  5. [events.ts](/src/features/events/data/events.ts) (`eventsFixture = []`)
  6. [facilities.ts](/src/features/facilities/data/facilities.ts) (`data = []`)
  7. [athletes.ts](/src/features/athletes/data/athletes.ts) (`data = []`)
  8. [news.ts](/src/features/news/data/news.ts) (`items = []`)
  9. [gallery.ts](/src/features/gallery/data/gallery.ts) (`data = []`)
  10. [resources.ts](/src/features/resources/data/resources.ts) (`downloads = []`, `faqs = []`)
  11. [site.ts](/src/config/site.ts) (empty contact fields, `GOV_LINKS = []`, `CITY_LINKS = []`)

### Facilitator Push Command
Push the initial scaffold branch to GitHub so all 4 personnel branch from and target `feat/bcsd-portal-scaffold` as their base integration branch:
```bash
git push -u origin feat/bcsd-portal-scaffold
```

---

## 2. Zero-Merge-Conflict Rules & Sequence

1. **Zero Cross-Dev File Overlap:** Dev A, Dev B, Dev C, and Dev D own completely disjoint files and can open/merge PRs in parallel during every Wave.
2. **Mandatory Sync Before Every New Branch:**
   ```bash
   git checkout feat/bcsd-portal-scaffold
   git pull origin feat/bcsd-portal-scaffold
   git checkout -b <branch-name>
   ```
3. **Sequential Order Inside Each Developer's Track:** Complete and merge Step 1 → pull base branch → start Step 2 → merge → pull base branch → start Step 3.
   - **Critical for Dev D:** Because Contact and Footer both edit `/src/config/site.ts`, Dev D must **always merge Contact (Step 2) and pull `feat/bcsd-portal-scaffold` before branching for Footer (Step 3)**.

| Wave | Stage | Dev A (Parallel) | Dev B (Parallel) | Dev C (Parallel) | Dev D (Parallel — Strict Order) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Wave 1** | **1. Initial Creation** | `1.1` Nav → `1.2` Home → `1.3` About | `1.1` Programs → `1.2` Events → `1.3` Facilities | `1.1` Athletes → `1.2` News → `1.3` Gallery | `1.1` Resources → `1.2` Contact → *(pull)* → `1.3` Footer |
| **Wave 2** | **2. Incomplete Details** | `2.1` Nav → `2.2` Home → `2.3` About | `2.1` Programs → `2.2` Events → `2.3` Facilities | `2.1` Athletes → `2.2` News → `2.3` Gallery | `2.1` Resources → `2.2` Contact → *(pull)* → `2.3` Footer |
| **Wave 3** | **3. Correction / Enhance** | `3.1` Nav → `3.2` Home → `3.3` About | `3.1` Programs → `3.2` Events → `3.3` Facilities | `3.1` Athletes → `3.2` News → `3.3` Gallery | `3.1` Resources → `3.2` Contact → *(pull)* → `3.3` Footer |
| **Wave 4** | **4. Section Completion** | `4.1` Nav → `4.2` Home → `4.3` About | `4.1` Programs → `4.2` Events → `4.3` Facilities | `4.1` Athletes → `4.2` News → `4.3` Gallery | `4.1` Resources → `4.2` Contact → *(pull)* → `4.3` Footer |

---

## 3. Personnel 1 (Dev A) — Sections 1, 2, 3

---

### Section 1: Navigation Link (`/src/config/navigation.ts`)

#### PR 1.1 (Dev A) — Stage 1: Initial Creation
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

#### PR 2.1 (Dev A) — Stage 2: Incomplete Details
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

#### PR 3.1 (Dev A) — Stage 3: Correction & Enhancement
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

#### PR 4.1 (Dev A) — Stage 4: Completion of Section
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

### Section 2: Home (`/src/features/hero/data/siteStats.ts`)

#### PR 1.2 (Dev A) — Stage 1: Initial Creation
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

#### PR 2.2 (Dev A) — Stage 2: Incomplete Details
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

#### PR 3.2 (Dev A) — Stage 3: Correction & Enhancement
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

#### PR 4.2 (Dev A) — Stage 4: Completion of Section
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

### Section 3: About (`/src/features/about/data/about.ts`)

#### PR 1.3 (Dev A) — Stage 1: Initial Creation
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

#### PR 2.3 (Dev A) — Stage 2: Incomplete Details
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

#### PR 3.3 (Dev A) — Stage 3: Correction & Enhancement
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

#### PR 4.3 (Dev A) — Stage 4: Completion of Section
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

---

## 4. Personnel 2 (Dev B) — Sections 4, 5, 6

---

### Section 4: Programs (`/src/features/programs/data/programs.ts`)

#### PR 1.1 (Dev B) — Stage 1: Initial Creation
- **Branch:** `feat/programs-initial-list`
- **Commit:** `feat(programs): add initial grassroots programs fixture`
- **PR Title:** `feat(programs): initial programs catalog with 2 grassroots entries`

**PR Description:**
```markdown
## Summary
Adds the first two grassroots sports programs (`Learn to Swim` and `Youth Basketball Clinic`) to establish the Programs catalog.

## Stage
- [x] Stage 1: Initial Creation

## Changes Made
- Added shared `base` defaults and 2 initial `Program` entries in `/src/features/programs/data/programs.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Verified both program cards render under the Grassroots category tab.
```

**Code to Paste:**
```ts
// File: /src/features/programs/data/programs.ts
import type { ApiResponse } from '@/types/api'
import type { Program } from '../types/program'

const base = {
  description: ['Program details coming soon.'],
  venue: 'TBD',
  requirements: ['Barangay clearance'],
  coach_name: null,
  coach_contact: null,
  is_featured: false,
}

export const programsFixture: ApiResponse<Program[]> = {
  data: [
    {
      ...base,
      id: 1,
      slug: 'learn-to-swim',
      name: 'Learn to Swim',
      category: 'grassroots',
      icon: 'Waves',
      summary: 'Beginner swimming lessons for Butuanon youth.',
      age_group: 'Ages 7–14',
      schedule: 'Sat, 8:00–10:00 AM',
      fee_label: 'Free',
      is_featured: true,
    },
    {
      ...base,
      id: 2,
      slug: 'youth-basketball',
      name: 'Youth Basketball Clinic',
      category: 'grassroots',
      icon: 'Users',
      summary: 'Fundamentals and scrimmages for young players.',
      age_group: 'Ages 10–16',
      schedule: 'Mon/Wed, 4:00–6:00 PM',
      fee_label: 'Free',
    },
  ],
  message: 'OK',
  errors: null,
}
```

#### PR 2.1 (Dev B) — Stage 2: Incomplete Details
- **Branch:** `feat/programs-expand-draft`
- **Commit:** `feat(programs): add competitive, community and inclusive programs draft`
- **PR Title:** `feat(programs): expand catalog to 6 programs (WIP)`

**PR Description:**
```markdown
## Summary
Expands the Programs catalog to 6 entries covering Grassroots, Competitive, Community, and Inclusive categories.

## Stage
- [x] Stage 2: Incomplete Details (WIP / Partial)

## Changes Made
- Added `City Athletics Squad`, `Zumba in the Park`, `Senior Fit`, and `Para-Sports Program` in `/src/features/programs/data/programs.ts`.

## Known Limitations / Reviewer Focus
- Venues are still `'Venue pending'` and `coach_name`/`coach_contact` are `null`.
- Please audit Program #1 (`Learn to Sabong` demo item) and check titles/summaries for typos.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/programs/data/programs.ts
import type { ApiResponse } from '@/types/api'
import type { Program } from '../types/program'

const base = {
  description: ['Sample description. Replace with approved program details.'],
  venue: 'Venue pending',
  requirements: ['Barangay clearance', 'Parent consent for minors'],
  coach_name: null,
  coach_contact: null,
  is_featured: false,
}

export const programsFixture: ApiResponse<Program[]> = {
  data: [
    {
      ...base,
      id: 1,
      slug: 'learn-to-sabong',
      name: 'Learn to Sabong',
      category: 'grassroots',
      icon: 'Trophy',
      summary:
        'Online Sabong is a(cockfight) game where users can control their manok. This game isopen to everyone.',
      age_group: 'Free to all',
      schedule: 'Thursdays',
      fee_label: 'Free',
      is_featured: true,
    },
    {
      ...base,
      id: 2,
      slug: 'youth-basketball',
      name: 'Youth Baskteball Clinic',
      category: 'grassroots',
      icon: 'Users',
      summary: 'Fundamentals and scrimmages for young players.',
      age_group: 'Ages 10–16',
      schedule: 'Mon/Wed, 4:00–6:00 PM',
      fee_label: 'Free',
    },
    {
      ...base,
      id: 3,
      slug: 'city-athletics-squad',
      name: 'City Athletics Squad',
      category: 'competitive',
      icon: 'Trophy',
      summary: 'Training for athletes competing in regional meets.',
      age_group: 'Ages 14+',
      schedule: 'Tue–Fri, 5:00–7:00 PM',
      fee_label: 'By tryout',
    },
    {
      ...base,
      id: 4,
      slug: 'zumba-in-the-park',
      name: 'Zumba in the Park',
      category: 'community',
      icon: 'Dumbbell',
      summary: 'Free community fitness sesion.',
      age_group: 'All ages',
      schedule: 'Sun, 6:00–7:00 AM',
      fee_label: 'Free',
    },
    {
      ...base,
      id: 5,
      slug: 'senior-fit',
      name: 'Senior Fit',
      category: 'inclusive',
      icon: 'Accessibility',
      summary: 'Low-impact exercise for senior citizens.',
      age_group: '60+',
      schedule: 'Thu, 7:00–8:00 AM',
      fee_label: 'Free',
    },
    {
      ...base,
      id: 6,
      slug: 'para-sports',
      name: 'Para-Sports Program',
      category: 'inclusive',
      icon: 'Activity',
      summary: 'Adaptive sports for persons with disabilities.',
      age_group: 'All ages',
      schedule: 'Fri, 3:00–5:00 PM',
      fee_label: 'Free',
    },
  ],
  message: 'OK',
  errors: null,
}
```

#### PR 3.1 (Dev B) — Stage 3: Correction & Enhancement
- **Branch:** `fix/programs-replace-demo-and-typos`
- **Commit:** `fix(programs): replace demo entry with Learn to Swim and fix typos`
- **PR Title:** `fix(programs): remove demo entry, fix spelling and add venues`

**PR Description:**
```markdown
## Summary
Replaces the accidental `Learn to Sabong` demo entry with the official `Learn to Swim` program, fixes spelling mistakes, and assigns verified venues to all 6 programs.

## Stage
- [x] Stage 3: Enhancement / Correction

## Changes Made
- Replaced Program #1 (`learn-to-sabong` -> `learn-to-swim`) in `/src/features/programs/data/programs.ts`.
- Fixed `Baskteball` -> `Basketball` and `sesion` -> `session`.
- Replaced `'Venue pending'` with actual Butuan City sports venues.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Confirmed all 4 category filters render accurate cards and venues.
```

**Code to Paste:**
```ts
// File: /src/features/programs/data/programs.ts
import type { ApiResponse } from '@/types/api'
import type { Program } from '../types/program'

const base = {
  description: [
    'Structured sessions led by accredited Butuan City Sports Department coaches.',
  ],
  requirements: ['Barangay clearance', 'Parent consent for minors'],
  coach_name: null,
  coach_contact: null,
  is_featured: false,
}

export const programsFixture: ApiResponse<Program[]> = {
  data: [
    {
      ...base,
      id: 1,
      slug: 'learn-to-swim',
      name: 'Learn to Swim',
      category: 'grassroots',
      icon: 'Waves',
      summary:
        'Water safety and foundational swimming strokes for Butuanon youth.',
      age_group: 'Ages 7–14',
      schedule: 'Sat, 8:00–10:00 AM',
      venue: 'Libertad Aquatic Center',
      fee_label: 'Free',
      is_featured: true,
    },
    {
      ...base,
      id: 2,
      slug: 'youth-basketball',
      name: 'Youth Basketball Clinic',
      category: 'grassroots',
      icon: 'Users',
      summary: 'Fundamentals, teamwork, and scrimmages for young players.',
      age_group: 'Ages 10–16',
      schedule: 'Mon/Wed, 4:00–6:00 PM',
      venue: 'Butuan City Covered Gymnasium',
      fee_label: 'Free',
    },
    {
      ...base,
      id: 3,
      slug: 'city-athletics-squad',
      name: 'City Athletics Squad',
      category: 'competitive',
      icon: 'Trophy',
      summary: 'Structured track and field training for regional meets.',
      age_group: 'Ages 14+',
      schedule: 'Tue–Fri, 5:00–7:00 PM',
      venue: 'Libertad Sports Complex Oval',
      fee_label: 'By tryout',
    },
    {
      ...base,
      id: 4,
      slug: 'zumba-in-the-park',
      name: 'Zumba in the Park',
      category: 'community',
      icon: 'Dumbbell',
      summary: 'Free community fitness session open to all residents.',
      age_group: 'All ages',
      schedule: 'Sun, 6:00–7:00 AM',
      venue: 'Guingona Park',
      fee_label: 'Free',
    },
    {
      ...base,
      id: 5,
      slug: 'senior-fit',
      name: 'Senior Fit',
      category: 'inclusive',
      icon: 'Accessibility',
      summary: 'Low-impact mobility and wellness exercises for senior citizens.',
      age_group: '60+',
      schedule: 'Thu, 7:00–8:00 AM',
      venue: 'Butuan City Covered Gymnasium',
      fee_label: 'Free',
    },
    {
      ...base,
      id: 6,
      slug: 'para-sports',
      name: 'Para-Sports Program',
      category: 'inclusive',
      icon: 'Activity',
      summary: 'Adaptive sports and inclusive coaching for persons with disabilities.',
      age_group: 'All ages',
      schedule: 'Fri, 3:00–5:00 PM',
      venue: 'Libertad Sports Complex',
      fee_label: 'Free',
    },
  ],
  message: 'OK',
  errors: null,
}
```

#### PR 4.1 (Dev B) — Stage 4: Completion of Section
- **Branch:** `feat/programs-complete`
- **Commit:** `feat(programs): add coach assignments and complete program descriptions`
- **PR Title:** `feat(programs): complete Programs section with full coach and venue details`

**PR Description:**
```markdown
## Summary
Completes the Programs catalog with tailored descriptions, specific eligibility requirements, and accredited coach names and contact emails for every program.

## Stage
- [x] Stage 4: Section Completion

## Changes Made
- Added unique multi-paragraph descriptions, custom requirements, `coach_name`, and `coach_contact` across all 6 programs in `/src/features/programs/data/programs.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Opened program detail modal and verified "Inquire" prefill works for every program.
```

**Code to Paste:**
```ts
// File: /src/features/programs/data/programs.ts
import type { ApiResponse } from '@/types/api'
import type { Program } from '../types/program'

export const programsFixture: ApiResponse<Program[]> = {
  data: [
    {
      id: 1,
      slug: 'learn-to-swim',
      name: 'Learn to Swim',
      category: 'grassroots',
      icon: 'Waves',
      summary:
        'Water safety and foundational swimming strokes for Butuanon youth.',
      description: [
        'Introduces children aged 7 to 14 to water confidence, floating, breathing control, and freestyle fundamentals.',
        'All sessions are supervised by certified Red Cross lifeguards and city swim coaches.',
      ],
      age_group: 'Ages 7–14',
      schedule: 'Sat, 8:00–10:00 AM',
      venue: 'Libertad Aquatic Center',
      fee_label: 'Free',
      requirements: ['Barangay clearance', 'Parent consent form', 'Swimwear & goggles'],
      coach_name: 'Coach Ramon Aquino',
      coach_contact: 'aquatics@sports.butuan.gov.ph',
      is_featured: true,
    },
    {
      id: 2,
      slug: 'youth-basketball',
      name: 'Youth Basketball Clinic',
      category: 'grassroots',
      icon: 'Users',
      summary: 'Fundamentals, teamwork, and scrimmages for young players.',
      description: [
        'Covers ball handling, shooting mechanics, defensive positioning, and sportsmanship.',
        'Graduates are eligible for the annual Inter-Barangay Youth Basketball League.',
      ],
      age_group: 'Ages 10–16',
      schedule: 'Mon/Wed, 4:00–6:00 PM',
      venue: 'Butuan City Covered Gymnasium',
      fee_label: 'Free',
      requirements: ['Barangay clearance', 'Parent consent for minors', 'Rubber shoes'],
      coach_name: 'Coach Dennis Navarro',
      coach_contact: 'basketball@sports.butuan.gov.ph',
      is_featured: true,
    },
    {
      id: 3,
      slug: 'city-athletics-squad',
      name: 'City Athletics Squad',
      category: 'competitive',
      icon: 'Trophy',
      summary: 'Structured track and field training for regional meets.',
      description: [
        'Prepares student-athletes for CARAA, Batang Pinoy, and Palarong Pambansa qualifying heats.',
      ],
      age_group: 'Ages 14+',
      schedule: 'Tue–Fri, 5:00–7:00 PM',
      venue: 'Libertad Sports Complex Oval',
      fee_label: 'By tryout',
      requirements: ['Medical clearance', 'School endorsement', 'Tryout qualification'],
      coach_name: 'Coach Maricel Bautista',
      coach_contact: 'athletics@sports.butuan.gov.ph',
      is_featured: false,
    },
    {
      id: 4,
      slug: 'zumba-in-the-park',
      name: 'Zumba in the Park',
      category: 'community',
      icon: 'Dumbbell',
      summary: 'Free community fitness session open to all residents.',
      description: [
        'High-energy weekly cardio session hosted every Sunday morning to promote active lifestyles.',
      ],
      age_group: 'All ages',
      schedule: 'Sun, 6:00–7:00 AM',
      venue: 'Guingona Park',
      fee_label: 'Free',
      requirements: ['Comfortable workout attire', 'Drinking water'],
      coach_name: 'Instructor Joylyn Flores',
      coach_contact: 'community@sports.butuan.gov.ph',
      is_featured: false,
    },
    {
      id: 5,
      slug: 'senior-fit',
      name: 'Senior Fit',
      category: 'inclusive',
      icon: 'Accessibility',
      summary: 'Low-impact mobility and wellness exercises for senior citizens.',
      description: [
        'Guided stretching, balance routines, and light resistance exercises tailored for older adults.',
      ],
      age_group: '60+',
      schedule: 'Thu, 7:00–8:00 AM',
      venue: 'Butuan City Covered Gymnasium',
      fee_label: 'Free',
      requirements: ['Senior Citizen ID', 'Basic health waiver'],
      coach_name: 'Instructor Teresa Lim',
      coach_contact: 'inclusive@sports.butuan.gov.ph',
      is_featured: false,
    },
    {
      id: 6,
      slug: 'para-sports',
      name: 'Para-Sports Program',
      category: 'inclusive',
      icon: 'Activity',
      summary: 'Adaptive sports and inclusive coaching for persons with disabilities.',
      description: [
        'Provides adaptive athletics, table tennis, and wheelchair basketball training in an accessible setting.',
      ],
      age_group: 'All ages',
      schedule: 'Fri, 3:00–5:00 PM',
      venue: 'Libertad Sports Complex',
      fee_label: 'Free',
      requirements: ['PWD ID', 'Medical fitness certificate'],
      coach_name: 'Coach Arnel Soriano',
      coach_contact: 'parasports@sports.butuan.gov.ph',
      is_featured: false,
    },
  ],
  message: 'OK',
  errors: null,
}
```

---

### Section 5: Events (`/src/features/events/data/events.ts`)

#### PR 1.2 (Dev B) — Stage 1: Initial Creation
- **Branch:** `feat/events-initial-calendar`
- **Commit:** `feat(events): add initial 2-event calendar fixture`
- **PR Title:** `feat(events): initial events calendar with 2 starter events`

**PR Description:**
```markdown
## Summary
Initializes the Events calendar fixture with the first two historical city events (`Butuan City Swim Meet` and `Balangay Fun Run`).

## Stage
- [x] Stage 1: Initial Creation

## Changes Made
- Added helper builder `e()` and 2 initial `SportEvent` entries in `/src/features/events/data/events.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/events/data/events.ts
import type { PaginatedResponse } from '@/types/api'
import { todayManila } from '@/utils/date'
import type { EventFilters, SportEvent } from '../types/sportEvent'

const e = (
  id: number,
  title: string,
  sport: string,
  start_date: string,
  end_date: string,
  status: SportEvent['status'] = 'upcoming',
  venue = 'Venue pending',
  is_featured = false,
): SportEvent => ({
  id,
  title,
  sport,
  start_date,
  end_date,
  venue,
  organizer: 'Butuan City Sports Department',
  status,
  is_featured,
  news_id: null,
})

export const eventsFixture: SportEvent[] = [
  e(1, 'Butuan City Swim Meet', 'Swimming', '2026-10-10', '2026-10-11', 'completed'),
  e(2, 'Balangay Fun Run', 'Athletics', '2026-11-08', '2026-11-08', 'completed'),
]

export function loadEventsFixture(
  f: EventFilters,
  today = todayManila(),
): PaginatedResponse<SportEvent> {
  const all = eventsFixture
    .filter((ev) => f.include_past || ev.end_date >= today)
    .filter((ev) => !f.sport || ev.sport === f.sport)
    .sort((a, b) => a.start_date.localeCompare(b.start_date))
  const start = (f.page - 1) * f.per_page
  return {
    data: all.slice(start, start + f.per_page),
    meta: {
      current_page: f.page,
      last_page: Math.max(1, Math.ceil(all.length / f.per_page)),
      per_page: f.per_page,
      total: all.length,
    },
    message: 'OK',
    errors: null,
  }
}
```

#### PR 2.2 (Dev B) — Stage 2: Incomplete Details
- **Branch:** `feat/events-full-draft`
- **Commit:** `feat(events): add remaining seasonal events draft`
- **PR Title:** `feat(events): expand calendar to 7 events (WIP)`

**PR Description:**
```markdown
## Summary
Adds the remaining 5 ongoing, postponed, and upcoming events to populate the seasonal sports calendar.

## Stage
- [x] Stage 2: Incomplete Details (WIP / Partial)

## Changes Made
- Added Events #3 through #7 in `/src/features/events/data/events.ts`.

## Known Limitations / Reviewer Focus
- Venues are still `'Venue pending'` and no featured event flags are set yet.
- Please review event titles for typos and verify start/end dates on multi-day tournaments.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/events/data/events.ts
import type { PaginatedResponse } from '@/types/api'
import { todayManila } from '@/utils/date'
import type { EventFilters, SportEvent } from '../types/sportEvent'

const e = (
  id: number,
  title: string,
  sport: string,
  start_date: string,
  end_date: string,
  status: SportEvent['status'] = 'upcoming',
  venue = 'Venue pending',
  is_featured = false,
): SportEvent => ({
  id,
  title,
  sport,
  start_date,
  end_date,
  venue,
  organizer: 'Butuan City Sports Department',
  status,
  is_featured,
  news_id: null,
})

export const eventsFixture: SportEvent[] = [
  e(1, 'Butuan City Swim Meet', 'Swimming', '2026-10-10', '2026-10-11', 'completed'),
  e(2, 'Balangay Fun Run', 'Athletics', '2026-11-08', '2026-11-08', 'completed'),
  e(3, 'Inter-Barangay Basketball Leage', 'Basketball', '2026-11-10', '2026-11-30', 'ongoing'),
  e(4, 'City Volleybal Clinic', 'Volleyball', '2026-11-22', '2026-11-22'),
  e(5, 'Butuan Chess Open', 'Chess', '2026-12-05', '2026-12-06', 'postponed'),
  e(6, 'Youth Footbal Cup', 'Football', '2026-12-14', '2026-12-12'),
  e(7, 'New Year Fun Run', 'Athletics', '2027-01-03', '2027-01-03'),
]

export function loadEventsFixture(
  f: EventFilters,
  today = todayManila(),
): PaginatedResponse<SportEvent> {
  const all = eventsFixture
    .filter((ev) => f.include_past || ev.end_date >= today)
    .filter((ev) => !f.sport || ev.sport === f.sport)
    .sort((a, b) => a.start_date.localeCompare(b.start_date))
  const start = (f.page - 1) * f.per_page
  return {
    data: all.slice(start, start + f.per_page),
    meta: {
      current_page: f.page,
      last_page: Math.max(1, Math.ceil(all.length / f.per_page)),
      per_page: f.per_page,
      total: all.length,
    },
    message: 'OK',
    errors: null,
  }
}
```

#### PR 3.2 (Dev B) — Stage 3: Correction & Enhancement
- **Branch:** `fix/events-typos-and-dates`
- **Commit:** `fix(events): correct event title spellings and Youth Football Cup dates`
- **PR Title:** `fix(events): fix spelling errors and inverted event date range`

**PR Description:**
```markdown
## Summary
Corrects misspelled event titles and fixes the inverted date range on `Youth Football Cup` caught in Stage 2 review.

## Stage
- [x] Stage 3: Enhancement / Correction

## Changes Made
- Fixed `Leage` -> `League`, `Volleybal` -> `Volleyball`, and `Footbal` -> `Football` in `/src/features/events/data/events.ts`.
- Corrected `Youth Football Cup` dates from `2026-12-14`..`2026-12-12` to `2026-12-12`..`2026-12-14`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Checked calendar date range and `.ics` download output for Youth Football Cup.
```

**Code to Paste:**
```ts
// File: /src/features/events/data/events.ts
import type { PaginatedResponse } from '@/types/api'
import { todayManila } from '@/utils/date'
import type { EventFilters, SportEvent } from '../types/sportEvent'

const e = (
  id: number,
  title: string,
  sport: string,
  start_date: string,
  end_date: string,
  status: SportEvent['status'] = 'upcoming',
  venue = 'Venue pending',
  is_featured = false,
): SportEvent => ({
  id,
  title,
  sport,
  start_date,
  end_date,
  venue,
  organizer: 'Butuan City Sports Department',
  status,
  is_featured,
  news_id: null,
})

export const eventsFixture: SportEvent[] = [
  e(1, 'Butuan City Swim Meet', 'Swimming', '2026-10-10', '2026-10-11', 'completed'),
  e(2, 'Balangay Fun Run', 'Athletics', '2026-11-08', '2026-11-08', 'completed'),
  e(3, 'Inter-Barangay Basketball League', 'Basketball', '2026-11-10', '2026-11-30', 'ongoing'),
  e(4, 'City Volleyball Clinic', 'Volleyball', '2026-11-22', '2026-11-22'),
  e(5, 'Butuan Chess Open', 'Chess', '2026-12-05', '2026-12-06', 'postponed'),
  e(6, 'Youth Football Cup', 'Football', '2026-12-12', '2026-12-14'),
  e(7, 'New Year Fun Run', 'Athletics', '2027-01-03', '2027-01-03'),
]

export function loadEventsFixture(
  f: EventFilters,
  today = todayManila(),
): PaginatedResponse<SportEvent> {
  const all = eventsFixture
    .filter((ev) => f.include_past || ev.end_date >= today)
    .filter((ev) => !f.sport || ev.sport === f.sport)
    .sort((a, b) => a.start_date.localeCompare(b.start_date))
  const start = (f.page - 1) * f.per_page
  return {
    data: all.slice(start, start + f.per_page),
    meta: {
      current_page: f.page,
      last_page: Math.max(1, Math.ceil(all.length / f.per_page)),
      per_page: f.per_page,
      total: all.length,
    },
    message: 'OK',
    errors: null,
  }
}
```

#### PR 4.2 (Dev B) — Stage 4: Completion of Section
- **Branch:** `feat/events-complete`
- **Commit:** `feat(events): add verified venues and featured flags to all events`
- **PR Title:** `feat(events): complete Events calendar with verified venues`

**PR Description:**
```markdown
## Summary
Finalizes the Events calendar by assigning verified venues to every event and marking flagship city tournaments as featured.

## Stage
- [x] Stage 4: Section Completion

## Changes Made
- Made `venue` a required parameter on helper `e()` in `/src/features/events/data/events.ts`.
- Populated verified venues for all 7 events and set `is_featured: true` on Inter-Barangay Basketball League and Youth Football Cup.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Verified list view, calendar view, sport filter, and past-events toggle in `npm run dev`.
```

**Code to Paste:**
```ts
// File: /src/features/events/data/events.ts
import type { PaginatedResponse } from '@/types/api'
import { todayManila } from '@/utils/date'
import type { EventFilters, SportEvent } from '../types/sportEvent'

const e = (
  id: number,
  title: string,
  sport: string,
  start_date: string,
  end_date: string,
  status: SportEvent['status'],
  venue: string,
  is_featured = false,
): SportEvent => ({
  id,
  title,
  sport,
  start_date,
  end_date,
  venue,
  organizer: 'Butuan City Sports Department',
  status,
  is_featured,
  news_id: null,
})

export const eventsFixture: SportEvent[] = [
  e(1, 'Butuan City Swim Meet', 'Swimming', '2026-10-10', '2026-10-11', 'completed', 'Libertad Aquatic Center'),
  e(2, 'Balangay Fun Run', 'Athletics', '2026-11-08', '2026-11-08', 'completed', 'Guingona Park'),
  e(3, 'Inter-Barangay Basketball League', 'Basketball', '2026-11-10', '2026-11-30', 'ongoing', 'Butuan City Covered Gymnasium', true),
  e(4, 'City Volleyball Clinic', 'Volleyball', '2026-11-22', '2026-11-22', 'upcoming', 'Butuan City Covered Gymnasium'),
  e(5, 'Butuan Chess Open', 'Chess', '2026-12-05', '2026-12-06', 'postponed', 'City Hall Activity Center'),
  e(6, 'Youth Football Cup', 'Football', '2026-12-12', '2026-12-14', 'upcoming', 'Libertad Sports Complex', true),
  e(7, 'New Year Fun Run', 'Athletics', '2027-01-03', '2027-01-03', 'upcoming', 'Guingona Park'),
]

export function loadEventsFixture(
  f: EventFilters,
  today = todayManila(),
): PaginatedResponse<SportEvent> {
  const all = eventsFixture
    .filter((ev) => f.include_past || ev.end_date >= today)
    .filter((ev) => !f.sport || ev.sport === f.sport)
    .sort((a, b) => a.start_date.localeCompare(b.start_date))
  const start = (f.page - 1) * f.per_page
  return {
    data: all.slice(start, start + f.per_page),
    meta: {
      current_page: f.page,
      last_page: Math.max(1, Math.ceil(all.length / f.per_page)),
      per_page: f.per_page,
      total: all.length,
    },
    message: 'OK',
    errors: null,
  }
}
```

---

### Section 6: Facilities (`/src/features/facilities/data/facilities.ts`)

#### PR 1.3 (Dev B) — Stage 1: Initial Creation
- **Branch:** `feat/facilities-initial-entry`
- **Commit:** `feat(facilities): add initial Libertad Sports Complex entry`
- **PR Title:** `feat(facilities): initial facilities directory with Libertad Sports Complex`

**PR Description:**
```markdown
## Summary
Adds the flagship city sports venue (`Libertad Sports Complex`) as the initial record in the Facilities directory.

## Stage
- [x] Stage 1: Initial Creation

## Changes Made
- Added `Libertad Sports Complex` with coordinates, hours, and starter amenities in `/src/features/facilities/data/facilities.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/facilities/data/facilities.ts
import type { ApiResponse } from '@/types/api'
import type { Facility } from '../types/facility'

export const facilitiesFixture: ApiResponse<Facility[]> = {
  data: [
    {
      id: 1,
      name: 'Libertad Sports Complex',
      barangay: 'Barangay Libertad',
      address: 'J.C. Aquino Ave., Butuan City',
      latitude: 8.9475,
      longitude: 125.5406,
      amenities: ['Oval track', 'Football field'],
      operating_hours: 'Mon–Sat, 6:00 AM – 8:00 PM',
      is_open: true,
      status_note: null,
      image: null,
    },
  ],
  message: 'OK',
  errors: null,
}
```

#### PR 2.3 (Dev B) — Stage 2: Incomplete Details
- **Branch:** `feat/facilities-add-venues-draft`
- **Commit:** `feat(facilities): add covered gym and swimming pool entries draft`
- **PR Title:** `feat(facilities): add additional city facilities (WIP)`

**PR Description:**
```markdown
## Summary
Adds the Covered Gym and Swimming Pool entries to the Facilities directory.

## Stage
- [x] Stage 2: Incomplete Details (WIP / Partial)

## Changes Made
- Added Facility #2 (`Butuan City Covered Gym`) and Facility #3 (`Libertad Swiming Pool`) in `/src/features/facilities/data/facilities.ts`.

## Known Limitations / Reviewer Focus
- Barangays for entries #2 and #3 are still `'Barangay pending'`.
- Facility #3 is marked `is_open: false` without a `status_note` explanation yet, and venue/amenity text needs proofreading.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/facilities/data/facilities.ts
import type { ApiResponse } from '@/types/api'
import type { Facility } from '../types/facility'

export const facilitiesFixture: ApiResponse<Facility[]> = {
  data: [
    {
      id: 1,
      name: 'Libertad Sports Complex',
      barangay: 'Barangay Libertad',
      address: 'J.C. Aquino Ave., Butuan City',
      latitude: 8.9475,
      longitude: 125.5406,
      amenities: ['Oval track', 'Football field'],
      operating_hours: 'Mon–Sat, 6:00 AM – 8:00 PM',
      is_open: true,
      status_note: null,
      image: null,
    },
    {
      id: 2,
      name: 'Butuan City Covered Gym',
      barangay: 'Barangay pending',
      address: 'Butuan City',
      latitude: 8.9525,
      longitude: 125.5286,
      amenities: ['Baskteball court', 'Volleyball court'],
      operating_hours: 'Mon–Sun, 8:00 AM – 9:00 PM',
      is_open: true,
      status_note: null,
      image: null,
    },
    {
      id: 3,
      name: 'Libertad Swiming Pool',
      barangay: 'Barangay pending',
      address: 'Butuan City',
      latitude: 8.9395,
      longitude: 125.5316,
      amenities: ['25 m pool'],
      operating_hours: 'Tue–Sun, 7:00 AM – 5:00 PM',
      is_open: false,
      status_note: null,
      image: null,
    },
  ],
  message: 'OK',
  errors: null,
}
```

#### PR 3.3 (Dev B) — Stage 3: Correction & Enhancement
- **Branch:** `fix/facilities-typos-and-status`
- **Commit:** `fix(facilities): fix venue spellings and add pool maintenance status note`
- **PR Title:** `fix(facilities): correct spellings and explain pool closure status`

**PR Description:**
```markdown
## Summary
Fixes spelling errors flagged in review, populates accurate barangay names, and adds an explanatory maintenance `status_note` for the closed Aquatic Center.

## Stage
- [x] Stage 3: Enhancement / Correction

## Changes Made
- Fixed `Baskteball` -> `Basketball` and renamed `Libertad Swiming Pool` -> `Libertad Aquatic Center` in `/src/features/facilities/data/facilities.ts`.
- Filled in `Barangay Doongan` and `Barangay Libertad` and added `status_note` for the filtration pump maintenance.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Confirmed Closed badge and maintenance notice render cleanly on the Aquatic Center card.
```

**Code to Paste:**
```ts
// File: /src/features/facilities/data/facilities.ts
import type { ApiResponse } from '@/types/api'
import type { Facility } from '../types/facility'

export const facilitiesFixture: ApiResponse<Facility[]> = {
  data: [
    {
      id: 1,
      name: 'Libertad Sports Complex',
      barangay: 'Barangay Libertad',
      address: 'J.C. Aquino Ave., Butuan City',
      latitude: 8.9475,
      longitude: 125.5406,
      amenities: ['Oval track', 'Football field', 'Bleachers'],
      operating_hours: 'Mon–Sat, 6:00 AM – 8:00 PM',
      is_open: true,
      status_note: null,
      image: null,
    },
    {
      id: 2,
      name: 'Butuan City Covered Gymnasium',
      barangay: 'Barangay Doongan',
      address: 'Doongan Rd., Butuan City',
      latitude: 8.9525,
      longitude: 125.5286,
      amenities: ['Basketball court', 'Volleyball court'],
      operating_hours: 'Mon–Sun, 8:00 AM – 9:00 PM',
      is_open: true,
      status_note: null,
      image: null,
    },
    {
      id: 3,
      name: 'Libertad Aquatic Center',
      barangay: 'Barangay Libertad',
      address: 'Sports Complex Compound, Butuan City',
      latitude: 8.9395,
      longitude: 125.5316,
      amenities: ['25 m pool'],
      operating_hours: 'Tue–Sun, 7:00 AM – 5:00 PM',
      is_open: false,
      status_note: 'Closed for filtration pump maintenance until December 2026.',
      image: null,
    },
  ],
  message: 'OK',
  errors: null,
}
```

#### PR 4.3 (Dev B) — Stage 4: Completion of Section
- **Branch:** `feat/facilities-complete`
- **Commit:** `feat(facilities): complete amenities and verified addresses for all facilities`
- **PR Title:** `feat(facilities): finalize Facilities directory`

**PR Description:**
```markdown
## Summary
Completes the Facilities section with full street addresses and complete amenity lists for all three city venues.

## Stage
- [x] Stage 4: Section Completion

## Changes Made
- Finalized full addresses and added missing amenities (`First-aid station`, `Dressing rooms`, `Scoreboard`, `Shower rooms`, `Lifeguard deck`) in `/src/features/facilities/data/facilities.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Confirmed all 3 facility cards display complete addresses, hours, amenities, and status indicators.
```

**Code to Paste:**
```ts
// File: /src/features/facilities/data/facilities.ts
import type { ApiResponse } from '@/types/api'
import type { Facility } from '../types/facility'

export const facilitiesFixture: ApiResponse<Facility[]> = {
  data: [
    {
      id: 1,
      name: 'Libertad Sports Complex',
      barangay: 'Barangay Libertad',
      address: 'J.C. Aquino Ave., Libertad, Butuan City',
      latitude: 8.9475,
      longitude: 125.5406,
      amenities: ['Oval track', 'Football field', 'Bleachers', 'First-aid station'],
      operating_hours: 'Mon–Sat, 6:00 AM – 8:00 PM',
      is_open: true,
      status_note: null,
      image: null,
    },
    {
      id: 2,
      name: 'Butuan City Covered Gymnasium',
      barangay: 'Barangay Doongan',
      address: 'Doongan Sports Road, Doongan, Butuan City',
      latitude: 8.9525,
      longitude: 125.5286,
      amenities: ['Basketball court', 'Volleyball court', 'Dressing rooms', 'Scoreboard'],
      operating_hours: 'Mon–Sun, 8:00 AM – 9:00 PM',
      is_open: true,
      status_note: null,
      image: null,
    },
    {
      id: 3,
      name: 'Libertad Aquatic Center',
      barangay: 'Barangay Libertad',
      address: 'Libertad Sports Complex Compound, Butuan City',
      latitude: 8.9395,
      longitude: 125.5316,
      amenities: ['25 m pool', 'Shower rooms', 'Lifeguard deck'],
      operating_hours: 'Tue–Sun, 7:00 AM – 5:00 PM',
      is_open: false,
      status_note: 'Closed for filtration pump maintenance until December 2026.',
      image: null,
    },
  ],
  message: 'OK',
  errors: null,
}
```

---

## 5. Personnel 3 (Dev C) — Sections 7, 8, 9

---

### Section 7: Athletes (`/src/features/athletes/data/athletes.ts`)

#### PR 1.1 (Dev C) — Stage 1: Initial Creation
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

#### PR 2.1 (Dev C) — Stage 2: Incomplete Details
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

#### PR 3.1 (Dev C) — Stage 3: Correction & Enhancement
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

#### PR 4.1 (Dev C) — Stage 4: Completion of Section
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

### Section 8: News (`/src/features/news/data/news.ts`)

#### PR 1.2 (Dev C) — Stage 1: Initial Creation
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

#### PR 2.2 (Dev C) — Stage 2: Incomplete Details
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

#### PR 3.2 (Dev C) — Stage 3: Correction & Enhancement
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

#### PR 4.2 (Dev C) — Stage 4: Completion of Section
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

### Section 9: Gallery (`/src/features/gallery/data/gallery.ts`)

#### PR 1.3 (Dev C) — Stage 1: Initial Creation
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

#### PR 2.3 (Dev C) — Stage 2: Incomplete Details
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

#### PR 3.3 (Dev C) — Stage 3: Correction & Enhancement
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

#### PR 4.3 (Dev C) — Stage 4: Completion of Section
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

---

## 6. Personnel 4 (Dev D) — Sections 10, 11, 12

> [!IMPORTANT]
> **Dev D Zero-Conflict Rule (Shared `/src/config/site.ts`)**
> In every Wave, Dev D **must** merge **Contact (Step 2)** and run:
> ```bash
> git checkout feat/bcsd-portal-scaffold
> git pull origin feat/bcsd-portal-scaffold
> ```
> **before** creating the branch for **Footer (Step 3)**.

---

### Section 10: Resources (`/src/features/resources/data/resources.ts`)

#### PR 1.1 (Dev D) — Stage 1: Initial Creation
- **Branch:** `feat/resources-initial-forms`
- **Commit:** `feat(resources): add initial registration form and starter FAQs`
- **PR Title:** `feat(resources): initial downloadable form and 2 FAQs`

**PR Description:**
```markdown
## Summary
Sets up the initial Resources section with the first downloadable registration form and two starter FAQs.

## Stage
- [x] Stage 1: Initial Creation

## Changes Made
- Added `Program Registration Form` to `downloadsFixture` and 2 initial questions to `faqsFixture` in `/src/features/resources/data/resources.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/resources/data/resources.ts
import type { ApiResponse } from '@/types/api'
import type { DownloadFile, Faq } from '../types/resources'

export const downloadsFixture: ApiResponse<DownloadFile[]> = {
  data: [
    {
      id: 1,
      name: 'Program Registration Form',
      file_type: 'TXT',
      size_kb: 1,
      updated_at: '2026-11-16',
      url: '/files/sample-form.txt',
    },
  ],
  message: 'OK',
  errors: null,
}

export const faqsFixture: ApiResponse<Faq[]> = {
  data: [
    {
      id: 1,
      question: 'How do I join a sports program?',
      answer: ['Download the registration form and submit it at the City Sports Office.'],
    },
    {
      id: 2,
      question: 'Are city sports programs free?',
      answer: ['Most grassroots and community programs are free for Butuan City residents.'],
    },
  ],
  message: 'OK',
  errors: null,
}
```

#### PR 2.1 (Dev D) — Stage 2: Incomplete Details
- **Branch:** `feat/resources-expand-draft`
- **Commit:** `feat(resources): add facility reservation form and additional FAQs draft`
- **PR Title:** `feat(resources): add more downloadable forms and FAQs (WIP)`

**PR Description:**
```markdown
## Summary
Expands the Resources section with a Facility Reservation form and additional citizen FAQs.

## Stage
- [x] Stage 2: Incomplete Details (WIP / Partial)

## Changes Made
- Added Form #2 and FAQs #2/#4 in `/src/features/resources/data/resources.ts`.

## Known Limitations / Reviewer Focus
- Form #2 currently points to `/files/missing-file.pdf` with `size_kb: 0`.
- FAQ #4 answer is still `'Answer pending'`, and labels need a spelling pass.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/features/resources/data/resources.ts
import type { ApiResponse } from '@/types/api'
import type { DownloadFile, Faq } from '../types/resources'

export const downloadsFixture: ApiResponse<DownloadFile[]> = {
  data: [
    {
      id: 1,
      name: 'Program Regisration Form',
      file_type: 'TXT',
      size_kb: 1,
      updated_at: '2026-11-16',
      url: '/files/sample-form.txt',
    },
    {
      id: 2,
      name: 'Facilty Reservation Request',
      file_type: 'PDF',
      size_kb: 0,
      updated_at: '2026-11-16',
      url: '/files/missing-file.pdf',
    },
  ],
  message: 'OK',
  errors: null,
}

export const faqsFixture: ApiResponse<Faq[]> = {
  data: [
    {
      id: 1,
      question: 'How do I join a sports program?',
      answer: ['Download the registration form and submit it at the City Sports Office.'],
    },
    {
      id: 2,
      question: 'How do I reserve a city facilty?',
      answer: ['Submit a facility request via the Contact form at least 7 days in advance.'],
    },
    {
      id: 3,
      question: 'Are city sports programs free?',
      answer: ['Most grassroots and community programs are free for Butuan City residents.'],
    },
    {
      id: 4,
      question: 'Who can I contact for assistance?',
      answer: ['Answer pending'],
    },
  ],
  message: 'OK',
  errors: null,
}
```

#### PR 3.1 (Dev D) — Stage 3: Correction & Enhancement
- **Branch:** `fix/resources-typos-and-links`
- **Commit:** `fix(resources): correct spelling errors and repair broken form URL`
- **PR Title:** `fix(resources): fix typos in forms/FAQs and restore valid download link`

**PR Description:**
```markdown
## Summary
Fixes spelling errors flagged in review, repairs the broken Facility Reservation download link, and fills in the pending answer for FAQ #4.

## Stage
- [x] Stage 3: Enhancement / Correction

## Changes Made
- Corrected `Regisration` -> `Registration` and `Facilty` -> `Facility` in `/src/features/resources/data/resources.ts`.
- Pointed Form #2 to valid `/files/sample-form.txt` (`size_kb: 1`) and populated FAQ #4 answer.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Clicked both download links in `npm run dev` to confirm files resolve without 404.
```

**Code to Paste:**
```ts
// File: /src/features/resources/data/resources.ts
import type { ApiResponse } from '@/types/api'
import type { DownloadFile, Faq } from '../types/resources'

export const downloadsFixture: ApiResponse<DownloadFile[]> = {
  data: [
    {
      id: 1,
      name: 'Program Registration Form',
      file_type: 'TXT',
      size_kb: 1,
      updated_at: '2026-11-16',
      url: '/files/sample-form.txt',
    },
    {
      id: 2,
      name: 'Facility Reservation Request',
      file_type: 'TXT',
      size_kb: 1,
      updated_at: '2026-11-16',
      url: '/files/sample-form.txt',
    },
  ],
  message: 'OK',
  errors: null,
}

export const faqsFixture: ApiResponse<Faq[]> = {
  data: [
    {
      id: 1,
      question: 'How do I join a sports program?',
      answer: ['Download the registration form and submit it at the City Sports Office.'],
    },
    {
      id: 2,
      question: 'How do I reserve a city facility?',
      answer: ['Submit a facility request via the Contact form at least 7 days in advance.'],
    },
    {
      id: 3,
      question: 'Are city sports programs free?',
      answer: ['Most grassroots and community programs are free for Butuan City residents.'],
    },
    {
      id: 4,
      question: 'Who can I contact for assistance?',
      answer: ['Visit the Contact section below or call the City Sports Office during office hours.'],
    },
  ],
  message: 'OK',
  errors: null,
}
```

#### PR 4.1 (Dev D) — Stage 4: Completion of Section
- **Branch:** `feat/resources-complete`
- **Commit:** `feat(resources): add Parent Consent Waiver and complete detailed FAQ answers`
- **PR Title:** `feat(resources): complete Resources section with forms and full FAQs`

**PR Description:**
```markdown
## Summary
Completes the Resources section by adding the Parent Consent & Medical Waiver form and finalizing comprehensive, citizen-ready answers across all 4 FAQs.

## Stage
- [x] Stage 4: Section Completion

## Changes Made
- Added Form #3 (`Parent Consent & Medical Waiver (Minors)`) and expanded FAQ answers in `/src/features/resources/data/resources.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Verified all 3 download rows and all 4 FAQ accordion items open and close smoothly.
```

**Code to Paste:**
```ts
// File: /src/features/resources/data/resources.ts
import type { ApiResponse } from '@/types/api'
import type { DownloadFile, Faq } from '../types/resources'

export const downloadsFixture: ApiResponse<DownloadFile[]> = {
  data: [
    {
      id: 1,
      name: 'Program Registration Form',
      file_type: 'TXT',
      size_kb: 1,
      updated_at: '2026-11-16',
      url: '/files/sample-form.txt',
    },
    {
      id: 2,
      name: 'Facility Reservation Request',
      file_type: 'TXT',
      size_kb: 1,
      updated_at: '2026-11-16',
      url: '/files/sample-form.txt',
    },
    {
      id: 3,
      name: 'Parent Consent & Medical Waiver (Minors)',
      file_type: 'TXT',
      size_kb: 1,
      updated_at: '2026-11-16',
      url: '/files/sample-form.txt',
    },
  ],
  message: 'OK',
  errors: null,
}

export const faqsFixture: ApiResponse<Faq[]> = {
  data: [
    {
      id: 1,
      question: 'How do I join a sports program?',
      answer: [
        'Download the Program Registration Form above, attach your barangay clearance, and submit it at the City Sports Office.',
        'Participants under 18 must also submit a signed Parent Consent & Medical Waiver.',
      ],
    },
    {
      id: 2,
      question: 'How do I reserve a city facility?',
      answer: [
        'Download the Facility Reservation Request form or send an inquiry through the Contact section at least 7 working days before your event.',
      ],
    },
    {
      id: 3,
      question: 'Are city sports programs free?',
      answer: [
        'Yes. Grassroots, community fitness, and inclusive programs are free for Butuan City residents. Competitive squads require tryout qualification.',
      ],
    },
    {
      id: 4,
      question: 'Who can I contact for assistance?',
      answer: [
        'You may reach the Butuan City Sports Department via the phone number, official email, or inquiry form in the Contact section below (Mon–Fri, 8:00 AM – 5:00 PM).',
      ],
    },
  ],
  message: 'OK',
  errors: null,
}
```

---

### Sections 11 (Contact) & 12 (Footer) — Sequenced on `/src/config/site.ts`

---

#### Wave 1 — Contact (PR 1.2) → Merge & Pull → Footer (PR 1.3)

##### PR 1.2 (Dev D) — Contact Stage 1: Initial Creation
- **Branch:** `feat/contact-initial-site-info`
- **Commit:** `feat(contact): initialize base SITE contact address and office hours`
- **PR Title:** `feat(contact): initial office address and hours in site config`

**PR Description:**
```markdown
## Summary
Adds the baseline city address and standard office hours to `SITE` so the Contact section renders basic office info.

## Stage
- [x] Stage 1: Initial Creation

## Changes Made
- Populated `SITE.address` and `SITE.officeHours` in `/src/config/site.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/config/site.ts
export const SITE = {
  name: 'Butuan City Sports Department',
  shortName: 'BCSD',
  city: 'City Government of Butuan',
  address: 'Butuan City, Agusan del Norte',
  phone: '',
  email: '',
  facebookUrl: '',
  officeHours: 'Mon–Fri, 8:00 AM – 5:00 PM',
  coordinates: { latitude: 8.9475, longitude: 125.5406 },
} as const

export const GOV_LINKS: readonly { label: string; href: string }[] = []

export const CITY_LINKS: readonly { label: string; href: string }[] = []
```

*(Merge PR 1.2 → run `git checkout feat/bcsd-portal-scaffold && git pull origin feat/bcsd-portal-scaffold` → cut branch for PR 1.3)*

##### PR 1.3 (Dev D) — Footer Stage 1: Initial Creation
- **Branch:** `feat/footer-initial-gov-links`
- **Commit:** `feat(footer): add initial national government and city footer links`
- **PR Title:** `feat(footer): initial government and city links in footer config`

**PR Description:**
```markdown
## Summary
Populates the starter Government and City links in `site.ts` so `SiteFooter` displays initial links in both columns.

## Stage
- [x] Stage 1: Initial Creation

## Changes Made
- Added first 3 `GOV_LINKS` and main Butuan City website to `CITY_LINKS` in `/src/config/site.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/config/site.ts
export const SITE = {
  name: 'Butuan City Sports Department',
  shortName: 'BCSD',
  city: 'City Government of Butuan',
  address: 'Butuan City, Agusan del Norte',
  phone: '',
  email: '',
  facebookUrl: '',
  officeHours: 'Mon–Fri, 8:00 AM – 5:00 PM',
  coordinates: { latitude: 8.9475, longitude: 125.5406 },
} as const

export const GOV_LINKS = [
  { label: 'Office of the President', href: 'https://op-proper.gov.ph' },
  { label: 'Office of the Vice President', href: 'https://ovp.gov.ph' },
  { label: 'Senate', href: 'https://www.senate.gov.ph' },
] as const

export const CITY_LINKS = [
  { label: 'Butuan City Website', href: 'https://butuan.gov.ph' },
] as const
```

---

#### Wave 2 — Contact (PR 2.2) → Merge & Pull → Footer (PR 2.3)

##### PR 2.2 (Dev D) — Contact Stage 2: Incomplete Details
- **Branch:** `feat/contact-details-draft`
- **Commit:** `feat(contact): add draft phone, email and full address`
- **PR Title:** `feat(contact): add office contact details (WIP)`

**PR Description:**
```markdown
## Summary
Adds the full street address, telephone number, and department email to the Contact details panel.

## Stage
- [x] Stage 2: Incomplete Details (WIP / Partial)

## Changes Made
- Updated `address`, `phone`, and `email` in `/src/config/site.ts`.

## Known Limitations / Reviewer Focus
- `facebookUrl` is still empty.
- Please verify spelling of the office address and confirm the official `.gov.ph` email domain.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/config/site.ts
export const SITE = {
  name: 'Butuan City Sports Department',
  shortName: 'BCSD',
  city: 'City Government of Butuan',
  address: '2/F City Hall Complex, J. Rosales Ave., Butan City',
  phone: '(085) 342-5555',
  email: 'sports@butuan.gov',
  facebookUrl: '',
  officeHours: 'Mon–Fri, 8:00 AM – 5:00 PM',
  coordinates: { latitude: 8.9475, longitude: 125.5406 },
} as const

export const GOV_LINKS = [
  { label: 'Office of the President', href: 'https://op-proper.gov.ph' },
  { label: 'Office of the Vice President', href: 'https://ovp.gov.ph' },
  { label: 'Senate', href: 'https://www.senate.gov.ph' },
] as const

export const CITY_LINKS = [
  { label: 'Butuan City Website', href: 'https://butuan.gov.ph' },
] as const
```

*(Merge PR 2.2 → run `git checkout feat/bcsd-portal-scaffold && git pull origin feat/bcsd-portal-scaffold` → cut branch for PR 2.3)*

##### PR 2.3 (Dev D) — Footer Stage 2: Incomplete Details
- **Branch:** `feat/footer-links-draft`
- **Commit:** `feat(footer): expand government and city transparency links draft`
- **PR Title:** `feat(footer): add remaining GOV_LINKS and CITY_LINKS (WIP)`

**PR Description:**
```markdown
## Summary
Adds House of Representatives, Supreme Court, and Transparency Seal entries to the Footer link lists.

## Stage
- [x] Stage 2: Incomplete Details (WIP / Partial)

## Changes Made
- Expanded `GOV_LINKS` and `CITY_LINKS` in `/src/config/site.ts`.

## Known Limitations / Reviewer Focus
- Transparency Seal currently points to placeholder `href: '#'`, and Citizen's Charter / FOI links are not added yet.
- Please check link labels for spelling mistakes.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/config/site.ts
export const SITE = {
  name: 'Butuan City Sports Department',
  shortName: 'BCSD',
  city: 'City Government of Butuan',
  address: '2/F City Hall Complex, J. Rosales Ave., Butan City',
  phone: '(085) 342-5555',
  email: 'sports@butuan.gov',
  facebookUrl: '',
  officeHours: 'Mon–Fri, 8:00 AM – 5:00 PM',
  coordinates: { latitude: 8.9475, longitude: 125.5406 },
} as const

export const GOV_LINKS = [
  { label: 'Office of the President', href: 'https://op-proper.gov.ph' },
  { label: 'Office of the Vice President', href: 'https://ovp.gov.ph' },
  { label: 'Senate', href: 'https://www.senate.gov.ph' },
  { label: 'House of Representatives', href: 'https://www.congress.gov.ph' },
  { label: 'Supreem Court', href: 'https://sc.judiciary.gov.ph' },
] as const

export const CITY_LINKS = [
  { label: 'Butuan City Website', href: 'https://butuan.gov.ph' },
  { label: 'Transparancy Seal', href: '#' },
] as const
```

---

#### Wave 3 — Contact (PR 3.2) → Merge & Pull → Footer (PR 3.3)

##### PR 3.2 (Dev D) — Contact Stage 3: Correction & Enhancement
- **Branch:** `fix/contact-address-and-email`
- **Commit:** `fix(contact): correct Butuan City spelling and .gov.ph email domain`
- **PR Title:** `fix(contact): fix address typo and official email address`

**PR Description:**
```markdown
## Summary
Fixes the misspelled city name in the office address and corrects the department email domain to `.gov.ph`.

## Stage
- [x] Stage 3: Enhancement / Correction

## Changes Made
- Fixed `Butan City` -> `Butuan City, Agusan del Norte` and `sports@butuan.gov` -> `sports@butuan.gov.ph` in `/src/config/site.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Verified `mailto:` and `tel:` links in the Contact details panel.
```

**Code to Paste:**
```ts
// File: /src/config/site.ts
export const SITE = {
  name: 'Butuan City Sports Department',
  shortName: 'BCSD',
  city: 'City Government of Butuan',
  address: '2/F City Hall Complex, J. Rosales Ave., Butuan City, Agusan del Norte',
  phone: '(085) 342-5555',
  email: 'sports@butuan.gov.ph',
  facebookUrl: '',
  officeHours: 'Mon–Fri, 8:00 AM – 5:00 PM',
  coordinates: { latitude: 8.9475, longitude: 125.5406 },
} as const

export const GOV_LINKS = [
  { label: 'Office of the President', href: 'https://op-proper.gov.ph' },
  { label: 'Office of the Vice President', href: 'https://ovp.gov.ph' },
  { label: 'Senate', href: 'https://www.senate.gov.ph' },
  { label: 'House of Representatives', href: 'https://www.congress.gov.ph' },
  { label: 'Supreem Court', href: 'https://sc.judiciary.gov.ph' },
] as const

export const CITY_LINKS = [
  { label: 'Butuan City Website', href: 'https://butuan.gov.ph' },
  { label: 'Transparancy Seal', href: '#' },
] as const
```

*(Merge PR 3.2 → run `git checkout feat/bcsd-portal-scaffold && git pull origin feat/bcsd-portal-scaffold` → cut branch for PR 3.3)*

##### PR 3.3 (Dev D) — Footer Stage 3: Correction & Enhancement
- **Branch:** `fix/footer-spelling-and-links`
- **Commit:** `fix(footer): fix Supreme Court and Transparency Seal spellings and URL`
- **PR Title:** `fix(footer): correct link labels and replace placeholder href`

**PR Description:**
```markdown
## Summary
Fixes spelling mistakes in Footer link labels and replaces the placeholder `#` href on Transparency Seal with the real URL.

## Stage
- [x] Stage 3: Enhancement / Correction

## Changes Made
- Fixed `Supreem Court` -> `Supreme Court` and `Transparancy Seal` -> `Transparency Seal` in `/src/config/site.ts`.
- Replaced `href: '#'` with `https://butuan.gov.ph/transparency-seal`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
```

**Code to Paste:**
```ts
// File: /src/config/site.ts
export const SITE = {
  name: 'Butuan City Sports Department',
  shortName: 'BCSD',
  city: 'City Government of Butuan',
  address: '2/F City Hall Complex, J. Rosales Ave., Butuan City, Agusan del Norte',
  phone: '(085) 342-5555',
  email: 'sports@butuan.gov.ph',
  facebookUrl: '',
  officeHours: 'Mon–Fri, 8:00 AM – 5:00 PM',
  coordinates: { latitude: 8.9475, longitude: 125.5406 },
} as const

export const GOV_LINKS = [
  { label: 'Office of the President', href: 'https://op-proper.gov.ph' },
  { label: 'Office of the Vice President', href: 'https://ovp.gov.ph' },
  { label: 'Senate', href: 'https://www.senate.gov.ph' },
  { label: 'House of Representatives', href: 'https://www.congress.gov.ph' },
  { label: 'Supreme Court', href: 'https://sc.judiciary.gov.ph' },
] as const

export const CITY_LINKS = [
  { label: 'Butuan City Website', href: 'https://butuan.gov.ph' },
  { label: 'Transparency Seal', href: 'https://butuan.gov.ph/transparency-seal' },
] as const
```

---

#### Wave 4 — Contact (PR 4.2) → Merge & Pull → Footer (PR 4.3)

##### PR 4.2 (Dev D) — Contact Stage 4: Completion of Section
- **Branch:** `feat/contact-complete`
- **Commit:** `feat(contact): add official Facebook page URL and finalize contact config`
- **PR Title:** `feat(contact): complete Contact section details`

**PR Description:**
```markdown
## Summary
Completes the Contact section by adding the official Butuan City Sports Department Facebook page URL so all 5 contact lines render.

## Stage
- [x] Stage 4: Section Completion

## Changes Made
- Populated `SITE.facebookUrl` in `/src/config/site.ts`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Confirmed Address, Phone, Email, Office Hours, and Facebook link all display cleanly in `ContactDetails`.
```

**Code to Paste:**
```ts
// File: /src/config/site.ts
export const SITE = {
  name: 'Butuan City Sports Department',
  shortName: 'BCSD',
  city: 'City Government of Butuan',
  address: '2/F City Hall Complex, J. Rosales Ave., Butuan City, Agusan del Norte',
  phone: '(085) 342-5555',
  email: 'sports@butuan.gov.ph',
  facebookUrl: 'https://www.facebook.com/ButuanCitySportsDepartment',
  officeHours: 'Mon–Fri, 8:00 AM – 5:00 PM',
  coordinates: { latitude: 8.9475, longitude: 125.5406 },
} as const

export const GOV_LINKS = [
  { label: 'Office of the President', href: 'https://op-proper.gov.ph' },
  { label: 'Office of the Vice President', href: 'https://ovp.gov.ph' },
  { label: 'Senate', href: 'https://www.senate.gov.ph' },
  { label: 'House of Representatives', href: 'https://www.congress.gov.ph' },
  { label: 'Supreme Court', href: 'https://sc.judiciary.gov.ph' },
] as const

export const CITY_LINKS = [
  { label: 'Butuan City Website', href: 'https://butuan.gov.ph' },
  { label: 'Transparency Seal', href: 'https://butuan.gov.ph/transparency-seal' },
] as const
```

*(Merge PR 4.2 → run `git checkout feat/bcsd-portal-scaffold && git pull origin feat/bcsd-portal-scaffold` → cut branch for PR 4.3)*

##### PR 4.3 (Dev D) — Footer Stage 4: Completion of Section
- **Branch:** `feat/footer-complete`
- **Commit:** `feat(footer): add Citizen's Charter and FOI links and harden rel attributes`
- **PR Title:** `feat(footer): complete Footer compliance links and security attributes`

**PR Description:**
```markdown
## Summary
Completes the Footer section with Citizen's Charter and FOI portal compliance links and hardens external link attributes in `SiteFooter.tsx`.

## Stage
- [x] Stage 4: Section Completion

## Changes Made
- Added `Citizen's Charter` and `Freedom of Information (FOI)` to `CITY_LINKS` in `/src/config/site.ts`.
- Updated external footer anchor tags in `/src/components/layout/AppShell/SiteFooter.tsx` from `rel="noreferrer"` to `rel="noopener noreferrer"`.

## Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] Verified all Government and City footer links open cleanly in a new tab.
```

**Code to Paste (File 1 of 2):**
```ts
// File: /src/config/site.ts
export const SITE = {
  name: 'Butuan City Sports Department',
  shortName: 'BCSD',
  city: 'City Government of Butuan',
  address: '2/F City Hall Complex, J. Rosales Ave., Butuan City, Agusan del Norte',
  phone: '(085) 342-5555',
  email: 'sports@butuan.gov.ph',
  facebookUrl: 'https://www.facebook.com/ButuanCitySportsDepartment',
  officeHours: 'Mon–Fri, 8:00 AM – 5:00 PM',
  coordinates: { latitude: 8.9475, longitude: 125.5406 },
} as const

export const GOV_LINKS = [
  { label: 'Office of the President', href: 'https://op-proper.gov.ph' },
  { label: 'Office of the Vice President', href: 'https://ovp.gov.ph' },
  { label: 'Senate', href: 'https://www.senate.gov.ph' },
  { label: 'House of Representatives', href: 'https://www.congress.gov.ph' },
  { label: 'Supreme Court', href: 'https://sc.judiciary.gov.ph' },
] as const

export const CITY_LINKS = [
  { label: 'Butuan City Website', href: 'https://butuan.gov.ph' },
  { label: 'Transparency Seal', href: 'https://butuan.gov.ph/transparency-seal' },
  { label: "Citizen's Charter", href: 'https://butuan.gov.ph/citizens-charter' },
  { label: 'Freedom of Information (FOI)', href: 'https://www.foi.gov.ph' },
] as const
```

**Code to Paste (File 2 of 2):**
```tsx
// File: /src/components/layout/AppShell/SiteFooter.tsx
import { CITY_LINKS, GOV_LINKS, SITE } from '@/config/site'

interface LinkGroupProps {
  title: string
  links: readonly { label: string; href: string }[]
}

function FooterLinkGroup({ title, links }: LinkGroupProps) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold tracking-wide uppercase">
        {title}
      </h2>
      <ul className="space-y-2 text-sm text-white/80">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-gov-bar text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <FooterLinkGroup title="Government" links={GOV_LINKS} />
        <FooterLinkGroup title="City" links={CITY_LINKS} />
        <div>
          <h2 className="mb-3 text-sm font-semibold tracking-wide uppercase">
            {SITE.name}
          </h2>
          <address className="text-sm text-white/80 not-italic">
            {SITE.address}
          </address>
        </div>
      </div>
      <p className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} {SITE.city}. All rights reserved.
      </p>
    </footer>
  )
}
```

---

## 7. Final Release PR (`feat/bcsd-portal-scaffold` → `main`)

- **PR Title:** `chore(release): v1.0.0 — Complete Butuan City Sports Department Portal`

**PR Description:**
```markdown
## Summary
Promotes the completed 12-section Butuan City Sports Department portal built across 4 collaborative training waves (48 Pull Requests, zero merge conflicts).

## Completed Sections
- **Dev A:** Navigation Link, Home, About
- **Dev B:** Programs, Events, Facilities
- **Dev C:** Athletes, News, Gallery
- **Dev D:** Resources, Contact, Footer

## Release Verification
- [x] `npm run lint` passed
- [x] `npm run type-check` passed
- [x] `npm run build` passed
- [x] `npm run check:bundle` under 200 KB gzipped budget
- [x] Signed off by all 4 personnel
```
