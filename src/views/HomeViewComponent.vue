<template>
  <div class="wrapper">
    <BannerComponent :banners="[]" />
    <div class="content">
      <SearchComponent />
      <ServicesComponent />
      <TripCardsComponent :trips="trips" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import SearchComponent from '@/components/SearchComponent.vue'
import ServicesComponent from '@/components/ServicesComponent.vue'
import TripCard from '@/components/TripCardComponent.vue'
import TripCards from '@/components/TripCardsComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import { useTripStore } from '@/stores/tripStore'
import TripCardsComponent from '@/components/TripCardsComponent.vue'

/**
 * @author Jean Paul <jeanpaulwebb@gmail.com>
 * @date 20/08/2024
 */
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
export default class HomeViewComponent extends Vue {
  private tripStore = useTripStore()

  get trips() {
    return this.tripStore.trips
  }

  mounted() {
    this.tripStore.loadTrips()
  }
}
</script>

<style scoped></style>
