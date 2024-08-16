import type { Trip } from '@/models/Trip'
import { tripsMock } from '@/services/TripMock'

export class TripService {

  static getTrips(): Trip[] {
    return tripsMock
  }

  /**
   * @param trip
   */
  static addTrip(trip: Trip): void {
    tripsMock.push(trip)
  }

  /**
   * @param trip
   */
  static updateTrip(trip: Trip): void {
    const index = tripsMock.findIndex((t) => t.id === trip.id)
    if (index !== -1) {
      tripsMock.splice(index, 1, trip)
    }
  }

  static deleteTrip(id: number): void {
     tripsMock.filter((trip: Trip) => trip.id !== id)
  }
}
