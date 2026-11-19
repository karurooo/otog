import type { ApiResponse } from '@/types/api'
import type { DownloadFile, Faq } from '../types/resources'

// SCAFFOLD: empty until Dev D adds downloadable forms (files go in public/files/) and FAQs.
export const downloadsFixture: ApiResponse<DownloadFile[]> = {
  data: [],
  message: 'OK',
  errors: null,
}

export const faqsFixture: ApiResponse<Faq[]> = {
  data: [],
  message: 'OK',
  errors: null,
}
