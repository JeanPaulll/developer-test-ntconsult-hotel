<template>
  <div class="col-md-4 col-sm-6 col-xs-12">
    <div class="kf_column_trip hover-effect-01">
      <div class="kf_column-figure">
        <figure>
          <a :data-rel="trip?.destination">
            <img :alt="trip?.destination" :src="trip.imageUrl" />
          </a>
          <div class="hover-content-01"></div>
          <figcaption v-if="trip?.checkInDate && trip?.checkOutDate">
            <ul class="kf_meta_2">
              <li>
                <span class="fa fa-clock-o"></span>
                <a @click="addToCart(trip)">
                  {{ calculateTripDuration(trip?.checkInDate, trip?.checkOutDate) }}
                </a>
              </li>
            </ul>
          </figcaption>
        </figure>
        <div class="bottom-price">
          <span class="radio-price">{{ formatCurrency(trip?.price) }}</span>
        </div>
      </div>
      <div class="kf_trip_content">
        <ul class="kf_meta_2 bk-colr">
          <li>
            <a @click="addToCart(trip)">{{ trip?.destination }}</a>
          </li>
        </ul>
        <h4>
          <a @click="addToCart(trip)"> {{ trip.destination }} </a>
        </h4>
        <p>{{ trip.description }}</p>
        <ul class="kf_reviews">
          <li>
            <div class="rateing"></div>
          </li>
          <li>
            <span>Avaliações: {{ trip.reviewsCount }}</span>
          </li>
        </ul>
      </div>
      <ul class="booking-bottom">
        <li><a class="btn-blog" @click="addToCart(trip)"> Reserve Agora </a></li>
      </ul>
    </div>
  </div>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        text="Sua reserva no hotel foi adicionada ao carrinho com sucesso!"
      >
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Ok"
            @click="dialog = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator'
import type { Trip } from '@/models/Trip'
import { useCartStore } from '@/stores/useCartStore'

/**
 * @author Jean Paul <jeanpaulwebb@gmail.com>
 * @date 20/08/2024
 */
@Component({})
export default class TripCardComponent extends Vue {
  @Prop({ required: true }) trip!: Trip
  public cartStore = useCartStore()
  public dialog = false

  /**
   * @param value
   */
  public formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  /**
   * @param trip
   */
  public addToCart(trip: Trip): void {
    this.cartStore.addToCart(trip)
    this.scrollToTop()
    setTimeout(() => this.dialog = true, 1000)
  }

  /**
   * @param checkInDate
   * @param checkOutDate
   */
  public calculateTripDuration(checkInDate: string, checkOutDate: string): string {
    const checkIn = new Date(checkInDate)
    const checkOut = new Date(checkOutDate)
    const durationInMilliseconds = checkOut.getTime() - checkIn.getTime()
    const durationInDays = durationInMilliseconds / (1000 * 3600 * 24)
    const nights = Math.floor(durationInDays) // Noites são dias completos
    const days = nights + 1 // Dias são noites + 1
    return `${days} dia${days > 1 ? 's' : ''} e ${nights} noite${nights > 1 ? 's' : ''}`
  }

  private scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
.radio-price {
  border-radius: unset;
  width: 100px;
}

.booking-bottom > li:first-child {
  width: 100%;
}

.btn-blog {
  cursor: pointer;
}

.kf_meta_2 {
  cursor: pointer;
}
</style>
