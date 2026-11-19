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