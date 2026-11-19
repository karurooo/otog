export interface Official {
  id: number
  full_name: string
  position: string
  photo: string | null
}

export interface Officer extends Official {
  message: string[]
}

export interface About {
  mandate: string
  mission: string
  vision: string
  officer: Officer
  officials: Official[]
}
