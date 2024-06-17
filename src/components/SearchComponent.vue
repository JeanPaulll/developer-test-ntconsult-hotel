<template>
  <form class="travel_search_engine">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="tab-content">
            <div
              class="kode_write_detail search-img01 tab-pane fade active"
              role="tabpanel"
              id="tab-1"
            >
              <h5 class="title-icon">
                <span class="icon-travel"></span
                ><b>{{ title }}</b>
              </h5>
              <div class="booking_content">
                <div class="kode_felid">
                  <label>Destino</label>
                  <div class="ralative-icon">
                    <input
                      type="text"
                      class="location-finder"
                      placeholder="Cidade, Região, País, ponto de referência, Hotel..."
                    />
                    <span class="icon-signs"></span>
                  </div>
                </div>
                <div class="booking_content">
                  <div class="row">
                    <div class="col-md-6 col-xs-12 col-sm-6">
                      <div class="kode_felid">
                        <label>Data de check-in</label>
                        <div class="ralative-icon">
                          <input class="checkin" type="text" />
                          <span class="fa fa-calendar"></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-xs-12 col-sm-6">
                      <div class="kode_felid">
                        <label>Data de check-out</label>
                        <div class="ralative-icon">
                          <input class="checkout" type="text" />
                          <span class="fa fa-calendar"></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-9">
                      <div class="booking_content">
                        <div class="row">
                          <div class="col-md-4 col-xs-12 col-sm-6">
                            <div class="kode_felid">
                              <label>Quartos</label>
                              <select class="select">
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-4 col-xs-12 col-sm-6">
                            <div class="kode_felid">
                              <label>Adultos</label>
                              <select class="select">
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-4 col-xs-12 col-sm-6">
                            <div class="kode_felid">
                              <label>Crianças</label>
                              <select class="select">
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 col-xs-12 col-sm-12">
                      <div class="submit-form">
                        <button
                          type="button"
                          class="btn-normal-1 animated effect2-color-1"
                        >
                          Procure agora
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
  props: {
    title: {
      type: String,
      default: 'FORMULÁRIO DE RESERVA DE HOTEL',
    },
  },
})
export default class SearchComponent extends Vue {}
</script>

<style scoped>
header {
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
}
</style>
