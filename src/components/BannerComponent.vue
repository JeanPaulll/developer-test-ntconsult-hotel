<template>
  <div class="banner-slider">
    <div class="items">
      <div class="banner-img banner-overlay">
        <img alt="banner img 1" src="../assets/extra-images/banner-01.jpg" />
      </div>
      <div class="container banner-caption position-left">
        <div class="title-1 animated"><strong>Primeiro Texto</strong></div>
        <div class="title-1 animated">Segundo Texto</div>
        <div class="title-3 animated">
          Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
        </div>
        <a class="btn-normal-1 animated effect2-color-1" href="#">Açao 1</a>
        <a class="btn-normal-1 animated effect2-color-2" href="#">Açao 2</a>
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

<style scoped></style>
