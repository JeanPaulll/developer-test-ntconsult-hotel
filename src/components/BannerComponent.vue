<template>
  <div class="banner-slider">
    <div class="items">
      <div class="banner-img banner-overlay">
        <img src="../assets/extra-images/banner-01.jpg" alt="banner img 1" />
      </div>
      <div class="container banner-caption position-left">
        <div class="title-1 animated"><strong>Primeiro Texto</strong></div>
        <div class="title-1 animated">Segundo Texto</div>
        <div class="title-3 animated">
         Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
        </div>
        <a href="#" class="btn-normal-1 animated effect2-color-1">Açao 1</a>
        <a href="#" class="btn-normal-1 animated effect2-color-2">Açao 2</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import TripCard from '@/components/TripCardComponent.vue';
import { Banner } from '@/models/Banner.ts';

@Options({
  components: { TripCard },
  props: {
    banners: {
      type: Array as () => Banner[],
      required: false,
    },
  },
})
export default class BannerComponent extends Vue {}
</script>

<style scoped></style>
