<template>
  <BannerComponent :banners="[]" />
  <div class="container mb-10">
    <div class="col-md-12 mb-10 mt-10">
      <h5 class="back" @click="goBack"> Voltar </h5>
      <h4>
        Comporando Hoteis
      </h4>
      <h4>
        Valor Total: {{formatCurrency(cartStore.totalPrice)}} | Quantidade: {{cartStore.cartCount}}
      </h4>
    </div>
    <div class="col-md-12" v-for="(trip, index) in cartStore.cart" :key="trip.id">
      <div class="kf_column_trip hover-effect-01">
        <div class="kf_trip_content" :class="{ 'first-trip': index === 0 }">
          <h1 v-if="index === 0"> O Mais indicado: </h1>
          <h4>
            <a href="#"> {{ trip.destination }} - {{ formatCurrency(trip?.price) }} </a>
          </h4>
          <p>{{ trip.description }}</p>
          <ul class="kf_reviews">
            <li>
              <span>Avaliações: {{ trip.reviewsCount }}</span>
            </li>
          </ul>
          <a class="to-remove text-right" @click="removeFromCart(trip.id)"> Remover este item </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator'
import SearchComponent from '@/components/SearchComponent.vue'
import ServicesComponent from '@/components/ServicesComponent.vue'
import TripCard from '@/components/TripCardComponent.vue'
import TripCards from '@/components/TripCardsComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import { useTripStore } from '@/stores/tripStore'
import TripCardsComponent from '@/components/TripCardsComponent.vue'
import type { Trip } from '@/models/Trip'
import { useCartStore } from '@/stores/useCartStore'
import { useRouter } from 'vue-router'

@Component({
  components: {
    TripCardsComponent,
    BannerComponent,
    TripCards,
    TripCard,
    ServicesComponent,
    SearchComponent
  }
})
export default class CompareHotelsViewComponent extends Vue {
  private tripStore = useTripStore()
  public cartStore = useCartStore()
  router = useRouter()

  public removeFromCart(tripId: number): void {
    this.cartStore.removeFromCart(tripId)
  }

  public goBack() {
    this.router.push('/')
  }

  mounted() {
    this.tripStore.loadTrips()
  }

  /**
   * @param value
   */
  public formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }
}
</script>

<style scoped>
.first-trip {
  background-color: #0049872e;
}
.kf_reviews{
  margin-bottom: 1em;
}
.back {
  background-color: #007bff;
  cursor: pointer;
  width: 80px;
  padding: .5em;
  border-radius: .5em;
  color: #fff;
}
.to-remove{
  background-color: red;
  color: #fff;
  cursor: pointer;
  padding: .5em;
  border-radius: .2em;
}
</style>
