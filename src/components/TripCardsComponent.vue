<template>
  <section>
    <div class="container">
      <div class="kf_tour_blog">
        <div class="content-gallery tab-content">
          <div class="tab-pane fade in active" role="tabpanel" id="grid-tab-1">
            <div class="row">
              <TripCard v-for="trip in trips" :key="trip.id" :trip="trip" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Trip } from '@/models/Trip.ts';
import TripCard from '@/components/TripCardComponent.vue';

@Options({
  components: { TripCard },
  props: {
    trips: {
      type: Array as () => Trip[],
      required: true,
    },
  },
})
export default class TripCards extends Vue {}
</script>
<style scoped></style>
