import type { ApiResponse } from '@/types/api'
import type { Album } from '../types/album'

// SCAFFOLD: empty until Dev C adds photo albums.
export const galleryFixture: ApiResponse<Album[]> = {
  data: [],
  message: 'OK',
  errors: null,
}
