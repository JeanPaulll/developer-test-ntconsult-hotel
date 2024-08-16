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
import type { Banner } from '@/models/Banner'

@Component({})
export default class BannerComponent extends Vue {
  @Prop({ type: Array, required: false }) banners!: Banner[]
}
</script>

<style scoped>
.slick-slide {
  height: 50%;
}
</style>
