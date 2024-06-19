export interface Trip {
  id: number
  destination: string
  description: string
  reviewsCount: number
  roomsCount: number
  guests: number
  imageUrl: string
  checkInDate: string // Data de check-in no formato ISO (YYYY-MM-DD)
  checkOutDate: string // Data de check-out no formato ISO (YYYY-MM-DD)
  price: number
}
