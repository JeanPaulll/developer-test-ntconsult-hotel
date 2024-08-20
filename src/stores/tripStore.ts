import { defineStore } from 'pinia'
import type { Trip } from '@/models/Trip'
import { TripService } from '@/services/TripService'

export const useTripStore = defineStore('tripStore', {
  state: () => ({
    trips: [] as Trip[]
  }),
  getters: {
    getTripById: (state) => (id: number) => {
      return state.trips.find((trip: Trip) => trip.id === id)
    }
  },
  actions: {
    loadTrips() {
      this.trips = TripService.getTrips()
    },
    addTrip(trip: Trip) {
      TripService.addTrip(trip)
      this.loadTrips()
    },
    updateTrip(trip: Trip) {
      TripService.updateTrip(trip)
      this.loadTrips()
    },
    deleteTrip(id: number) {
      TripService.deleteTrip(id)
      this.loadTrips()
    },
    setTrips(trips: Trip[]) {
      this.trips = [];
      this.trips = [...trips].sort((a, b) => b.price - a.price);
    },
    ordinationTrip(type: number) {
      const sortedTrips = [...this.trips].sort((a, b) => b.price - a.price);
      switch (type) {
        case 1:
          this.trips = sortByLowestPrice(sortedTrips);
          break;
        case 2:
          this.trips = sortByHighestPrice(sortedTrips);
          break;
        case 3:
          this.trips = sortByAlphabeticalOrder(sortedTrips);
          break;
        case 4:
          this.loadTrips()
          break;
        default:
          this.loadTrips()
          break;
      }
    }
  }
})

/**
 * @description Ordenar por maior preço
 * @param trips
 */
export function sortByHighestPrice(trips: Trip[]): Trip[] {
  return trips.sort((a: Trip, b: Trip) => b.price - a.price).slice(0, 3);
}

/**
 * @description ordenar por menor preço
 * @param trips
 */
export function sortByLowestPrice(trips: Trip[]): Trip[] {
  return trips.sort((a: Trip, b: Trip) => a.price - b.price).slice(0, 3);
}

/**
 * @description ordenar por ordem alfabética do destino
 * @param trips
 */
export function sortByAlphabeticalOrder(trips: Trip[]): Trip[] {
  return trips.sort((a: Trip, b: Trip) => a.destination.localeCompare(b.destination)).slice(0, 3);
}