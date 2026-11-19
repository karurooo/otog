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