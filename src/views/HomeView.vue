<template>
  <HeaderComponent title="Seja bem vindo!" />
  <div class="wrapper">
    <BannerComponent :banners="[]" />
    <div class="content">
      <SearchComponent />
      <ServicesComponent />
      <TripCards :trips="trips" />
    </div>
    <SliderComponent :slides="[]" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import HeaderComponent from '@/components/HeaderComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import ServicesComponent from '@/components/ServicesComponent.vue'
import TripCard from '@/components/TripCardComponent.vue'
import TripCards from '@/components/TripCardsComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import SliderComponent from '@/components/SliderComponent.vue'
import { useTripStore } from '@/stores/tripStore'

@Component({
  components: {
    SliderComponent,
    BannerComponent,
    TripCards,
    TripCard,
    ServicesComponent,
    SearchComponent,
    HeaderComponent,
  }
})
export default class Home extends Vue {
  private tripStore = useTripStore();

  get trips() {
    return this.tripStore.trips;
  }

  mounted() {
    this.tripStore.loadTrips();
  }
}

</script>

<style scoped></style>
