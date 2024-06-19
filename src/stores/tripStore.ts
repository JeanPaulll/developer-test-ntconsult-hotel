import { defineStore } from 'pinia'
import type { Trip } from '@/models/Trip'
import { TripService } from '@/services/TripService'

export const useTripStore = defineStore('tripStore', {
  state: () => ({
    trips: [] as Trip[],
  }),
  getters: {
    getTripById: (state) => (id: number) => {
      return state.trips.find((trip: Trip) => trip.id === id);
    },
  },
  actions: {
    loadTrips() {
      this.trips = TripService.getTrips();
    },
    addTrip(trip: Trip) {
      TripService.addTrip(trip);
      this.loadTrips();
    },
    updateTrip(trip: Trip) {
      TripService.updateTrip(trip);
      this.loadTrips();
    },
    deleteTrip(id: number) {
      TripService.deleteTrip(id);
      this.loadTrips();
    },
  },
});
