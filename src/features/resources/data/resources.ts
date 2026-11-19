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