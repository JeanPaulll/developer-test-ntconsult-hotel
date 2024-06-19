import type { Trip } from '@/models/Trip'

export class TripService {
  private static trips: Trip[] = [
    {
      id: 1,
      destination: 'Rio de Janeiro',
      description: 'Descubra as maravilhas do Rio, com praias icônicas e o Cristo Redentor.',
      reviewsCount: 1020,
      roomsCount: 150,
      guests: 2,
      imageUrl: 'https://via.placeholder.com/300x200',
      checkInDate: '2024-07-15',
      checkOutDate: '2024-07-20',
      price: 2000.5
    },
    {
      id: 2,
      destination: 'Salvador',
      description: 'Explore o coração cultural do Brasil com sua rica história e belas praias.',
      reviewsCount: 750,
      roomsCount: 80,
      guests: 2,
      imageUrl: 'https://via.placeholder.com/300x200',
      checkInDate: '2024-08-05',
      checkOutDate: '2024-08-10',
      price: 1500.75
    },
    {
      id: 3,
      destination: 'Florianópolis',
      description: 'Aproveite as maravilhosas praias e a natureza exuberante de Florianópolis.',
      reviewsCount: 920,
      roomsCount: 60,
      guests: 4,
      imageUrl: 'https://via.placeholder.com/300x200',
      checkInDate: '2024-09-01',
      checkOutDate: '2024-09-07',
      price: 1800.0
    }
  ]

  static getTrips(): Trip[] {
    return this.trips
  }

  static addTrip(trip: Trip): void {
    this.trips.push(trip)
  }

  static updateTrip(trip: Trip): void {
    const index = this.trips.findIndex((t) => t.id === trip.id)
    if (index !== -1) {
      this.trips.splice(index, 1, trip)
    }
  }

  static deleteTrip(id: number): void {
    this.trips = this.trips.filter((trip: Trip) => trip.id !== id)
  }
}
