export interface Photo {
  id: number
  src: string
  /** Descriptive alt text is required; it doubles as the caption. */
  alt: string
  width: number
  height: number
}

export interface Album {
  id: number
  title: string
  photos: Photo[]
}
