import { defineStore } from 'pinia'
import type { Trip } from '@/models/Trip'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: [] as Trip[]
  }),
  getters: {
    cartCount: (state) => state.cart.length,
    isTripInCart: (state) => (tripId: number) => {
      return state.cart.some((trip) => trip.id === tripId);
    },
    totalPrice: (state) => {
      return state.cart.reduce((total, trip) => total + trip.price, 0);
    }
  },
  actions: {
    addToCart(trip: Trip) {
      if (!this.isTripInCart(trip.id)) {
        this.cart.push(trip);
      }
    },
    removeFromCart(tripId: number) {
      this.cart = this.cart.filter((trip) => trip.id !== tripId);
    },
    clearCart() {
      this.cart = [];
    }
  }
});