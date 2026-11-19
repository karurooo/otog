export interface Facility {
  id: number
  name: string
  barangay: string
  address: string
  latitude: number
  longitude: number
  amenities: string[]
  operating_hours: string
  is_open: boolean
  /** Required when `is_open` is false: why it is closed and until when. */
  status_note: string | null
  image: string | null
}
