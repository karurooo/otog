export interface DownloadFile {
  id: number
  name: string
  file_type: string
  size_kb: number
  /** `YYYY-MM-DD` */
  updated_at: string
  /** Path under `public/`, e.g. `/files/registration-form.pdf`. */
  url: string
}

export interface Faq {
  id: number
  question: string
  answer: string[]
}
