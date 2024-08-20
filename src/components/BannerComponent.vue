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

/**
 * @author Jean Paul <jeanpaulwebb@gmail.com>
 * @date 20/08/2024
 */
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
