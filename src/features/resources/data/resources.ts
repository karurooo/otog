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
