# Personnel 4 (Dev D) — Task Guide: Resources, Contact & Footer

**Base Integration Branch:** `development`
**Primary Peer Reviewer:** Personnel 1 (Dev A)
**Your Owned Files (Zero Overlap With Other Personnel):**
1. **Resources:** `/src/features/resources/data/resources.ts`
2. **Contact:** `/src/config/site.ts` (`SITE` block)
3. **Footer:** `/src/config/site.ts` (`GOV_LINKS` & `CITY_LINKS`) + `/src/components/layout/AppShell/SiteFooter.tsx`

---

## Golden Zero-Conflict Workflow (Repeat Before Every PR)

> **CRITICAL FOR DEV D:** Both **Contact** and **Footer** edit `/src/config/site.ts`. Never open a Contact PR and a Footer PR at the same time. Always merge **Contact** and pull `development` **before** branching for **Footer**.

Work strictly from **PR #1 down to PR #12** in order:

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

### PR #1 — Resources (Stage 1: Initial Creation)
- **Target File:** `/src/features/resources/data/resources.ts`
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

---

### PR #2 — Contact (Stage 1: Initial Creation)
*(Merge PR #1 → pull `development`)*
- **Target File:** `/src/config/site.ts`
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

---

### PR #3 — Footer (Stage 1: Initial Creation)
*(CHECKPOINT: Wait for PR #2 to merge, then run `git checkout development && git pull origin development` before branching!)*
- **Target File:** `/src/config/site.ts`
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

## Wave 2 — Stage 2: Incomplete Details

### PR #4 — Resources (Stage 2: Incomplete Details)
*(Merge PR #3 → pull `development`)*
- **Target File:** `/src/features/resources/data/resources.ts`
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

---

### PR #5 — Contact (Stage 2: Incomplete Details)
*(Merge PR #4 → pull `development`)*
- **Target File:** `/src/config/site.ts`
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

---

### PR #6 — Footer (Stage 2: Incomplete Details)
*(CHECKPOINT: Wait for PR #5 to merge, then run `git checkout development && git pull origin development` before branching!)*
- **Target File:** `/src/config/site.ts`
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

## Wave 3 — Stage 3: Enhancement & Correction

### PR #7 — Resources (Stage 3: Correction)
*(Merge PR #6 → pull `development`)*
- **Target File:** `/src/features/resources/data/resources.ts`
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

---

### PR #8 — Contact (Stage 3: Correction)
*(Merge PR #7 → pull `development`)*
- **Target File:** `/src/config/site.ts`
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

---

### PR #9 — Footer (Stage 3: Correction)
*(CHECKPOINT: Wait for PR #8 to merge, then run `git checkout development && git pull origin development` before branching!)*
- **Target File:** `/src/config/site.ts`
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

## Wave 4 — Stage 4: Section Completion

### PR #10 — Resources (Stage 4: Completion)
*(Merge PR #9 → pull `development`)*
- **Target File:** `/src/features/resources/data/resources.ts`
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

### PR #11 — Contact (Stage 4: Completion)
*(Merge PR #10 → pull `development`)*
- **Target File:** `/src/config/site.ts`
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

---

### PR #12 — Footer (Stage 4: Completion)
*(CHECKPOINT: Wait for PR #11 to merge, then run `git checkout development && git pull origin development` before branching!)*
- **Target Files:** `/src/config/site.ts` and `/src/components/layout/AppShell/SiteFooter.tsx`
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
