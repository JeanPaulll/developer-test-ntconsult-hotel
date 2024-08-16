<template>
  <div class="banner-slider">
    <div class="items">
      <div class="banner-img banner-overlay">
        <img alt="Pousada com coqueiros" src="../assets/images/bg.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator'
import TripCard from '@/components/TripCardComponent.vue'
import type { Banner } from '@/models/Banner'

@Component({
  components: { TripCard }
})
export default class BannerComponent extends Vue {
  @Prop({ type: Array, required: false }) banners!: Banner[]
}
</script>

<style scoped>
.slick-slide {
  height: 50%;
}
</style>
