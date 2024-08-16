<template>
  <section>
    <div class="container">
      <div class="kf_tour_blog">
        <div class="content-gallery tab-content">
          <div id="grid-tab-1" class="tab-pane fade in active" role="tabpanel">
            <div class="row">
              <TripCardComponent v-for="trip in trips" :key="trip.id" :trip="trip" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator'

import TripCardComponent from '@/components/TripCardComponent.vue'
import type { Trip } from '@/models/Trip'

@Component({
  components: { TripCardComponent }
})
export default class TripCardsComponent extends Vue {
  @Prop({ required: true }) trips!: Trip[]
}
</script>
<style scoped></style>
