export interface Accommodation {
  id: number
  name: string
  location: string
  capacity: {
    min: number
    max: number
  }
  price: {
    min: number
    max: number
  }
  image: string
  hasDeal: boolean
  dealText?: string
  amenities: string[]
  features: {
    ending_soon?: boolean
    private_stay?: boolean
    camping?: boolean
    pet_friendly?: boolean
    pool?: boolean
    jacuzzi?: boolean
    hanok?: boolean
    ocean_view?: boolean
    forest_view?: boolean
    city_view?: boolean
    harbor_view?: boolean
    sauna?: boolean
  }
  availability: {
    [date: string]: boolean // 예약 가능 여부
  }
  rating: number
  reviewCount: number
  createdAt: Date
}

export interface SearchFilters {
  location?: string
  checkin?: Date
  checkout?: Date
  people: {
    adults: number
    children: number
    infants: number
  }
  iconFilter?: number
  amenities: string[]
  sortBy?: 'recommended' | 'latest' | 'popular' | 'price_high' | 'price_low'
  priceRange?: {
    min: number
    max: number
  }
}
