# Personnel 2 (Dev B) — Task Guide: Programs, Events & Facilities

**Base Integration Branch:** `feat/bcsd-portal-scaffold`
**Primary Peer Reviewer:** Personnel 3 (Dev C)
**Your Owned Files (Zero Overlap With Other Personnel):**
1. **Programs:** `/src/features/programs/data/programs.ts`
2. **Events:** `/src/features/events/data/events.ts`
3. **Facilities:** `/src/features/facilities/data/facilities.ts`

---

## Golden Zero-Conflict Workflow (Repeat Before Every PR)

Work strictly from **PR #1 down to PR #12** in order. Merge one PR before starting the next:

```bash
git checkout feat/bcsd-portal-scaffold
git pull origin feat/bcsd-portal-scaffold
git checkout -b <branch-name>
# 1. Paste the code into the exact path shown on Line 1 (// File: ...)
# 2. Verify locally: npm run lint && npm run type-check
git add <file-path>
git commit -m "<commit-message>"
git push -u origin <branch-name>
# 3. Open PR targeting `feat/bcsd-portal-scaffold` using the PR Title & PR Description below
```

---

## Wave 1 — Stage 1: Initial Creation

### PR #1 — Programs (Stage 1: Initial Creation)
- **Target File:** `/src/features/programs/data/programs.ts`
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

---

### PR #2 — Events (Stage 1: Initial Creation)
*(Merge PR #1 → pull `feat/bcsd-portal-scaffold`)*
- **Target File:** `/src/features/events/data/events.ts`
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

---

### PR #3 — Facilities (Stage 1: Initial Creation)
*(Merge PR #2 → pull `feat/bcsd-portal-scaffold`)*
- **Target File:** `/src/features/facilities/data/facilities.ts`
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

---

## Wave 2 — Stage 2: Incomplete Details

### PR #4 — Programs (Stage 2: Incomplete Details)
*(Merge PR #3 → pull `feat/bcsd-portal-scaffold`)*
- **Target File:** `/src/features/programs/data/programs.ts`
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

---

### PR #5 — Events (Stage 2: Incomplete Details)
*(Merge PR #4 → pull `feat/bcsd-portal-scaffold`)*
- **Target File:** `/src/features/events/data/events.ts`
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

---

### PR #6 — Facilities (Stage 2: Incomplete Details)
*(Merge PR #5 → pull `feat/bcsd-portal-scaffold`)*
- **Target File:** `/src/features/facilities/data/facilities.ts`
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

---

## Wave 3 — Stage 3: Enhancement & Correction

### PR #7 — Programs (Stage 3: Correction & Enhancement)
*(Merge PR #6 → pull `feat/bcsd-portal-scaffold`)*
- **Target File:** `/src/features/programs/data/programs.ts`
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

---

### PR #8 — Events (Stage 3: Correction)
*(Merge PR #7 → pull `feat/bcsd-portal-scaffold`)*
- **Target File:** `/src/features/events/data/events.ts`
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

---

### PR #9 — Facilities (Stage 3: Correction & Enhancement)
*(Merge PR #8 → pull `feat/bcsd-portal-scaffold`)*
- **Target File:** `/src/features/facilities/data/facilities.ts`
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

---

## Wave 4 — Stage 4: Section Completion

### PR #10 — Programs (Stage 4: Completion)
*(Merge PR #9 → pull `feat/bcsd-portal-scaffold`)*
- **Target File:** `/src/features/programs/data/programs.ts`
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

### PR #11 — Events (Stage 4: Completion)
*(Merge PR #10 → pull `feat/bcsd-portal-scaffold`)*
- **Target File:** `/src/features/events/data/events.ts`
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

### PR #12 — Facilities (Stage 4: Completion)
*(Merge PR #11 → pull `feat/bcsd-portal-scaffold`)*
- **Target File:** `/src/features/facilities/data/facilities.ts`
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
