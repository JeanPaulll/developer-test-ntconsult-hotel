import { defineStore } from 'pinia';
import { Trip } from '../models/Trip';
import { TripService } from '../services/TripService';

export const useTripStore = defineStore('tripStore', {
  state: () => ({
    trips: [] as Trip[],
  }),
  actions: {
    loadTrips() {
      this.trips = TripService.getTrips();
    },
  },
});
