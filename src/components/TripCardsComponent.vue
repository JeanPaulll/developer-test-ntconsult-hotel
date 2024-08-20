<template>
  <section>
    <div class="container">
      <div class="kf_tour_blog">
        <div class="content-gallery tab-content">
          <div id="grid-tab-1" class="tab-pane fade in active" role="tabpanel">
            <div class="cart">
              <v-chip v-if="cartStore.cartCount > 0" color="primary" class="mb-4 mt-4">
                Estadia selecionada {{ cartStore.cartCount }}
              </v-chip>
              <v-chip
                v-if="cartStore.cartCount > 0"
                color="secundary"
                class="ml-2 mb-4 mt-4 clear-cart"
                @click="clearCart()"
              >
                Limpar Carrinho X
              </v-chip>
            </div>
            <div class="row">
              <TripCardComponent v-for="trip in trips" :key="trip.id" :trip="trip" />
              <v-alert v-if="!trips.length" border="top" border-color="error" elevation="2">
                Nenhuma viagem encontrada para os critérios de pesquisa fornecidos. Por favor, tente
                ajustar seus filtros ou escolha outro destino
              </v-alert>
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
import { useCartStore } from '@/stores/useCartStore'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

@Component({
  components: { FontAwesomeIcon, TripCardComponent }
})
export default class TripCardsComponent extends Vue {
  @Prop({ required: true }) trips!: Trip[]
  public cartStore = useCartStore()

  public clearCart(): void {
    this.cartStore.clearCart()
  }
}
</script>
<style scoped>
.clear-cart:hover {
  background-color: #0d47a1;
  color: #fff;
  cursor: pointer;
}
</style>
