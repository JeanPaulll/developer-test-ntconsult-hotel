<template>
  <form class="travel_search_engine" @submit.prevent="handleSubmit">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="tab-content">
            <div
              id="tab-1"
              class="kode_write_detail search-img01 tab-pane fade active"
              role="tabpanel"
            >
              <h5 class="title-icon">
                <span class="icon-travel"></span><b>{{ title }}</b>
              </h5>
              <div class="booking_content">
                <div class="kode_felid">
                  <label>Destino</label>
                  <div class="ralative-icon">
                    <input
                      v-model="destination"
                      class="location-finder"
                      placeholder="Cidade, Região, País, ponto de referência, Hotel..."
                      type="text"
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
                          <input v-model="checkInDate" class="checkin" type="date" />
                          <span class="fa fa-calendar"></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-xs-12 col-sm-6">
                      <div class="kode_felid">
                        <label>Data de check-out</label>
                        <div class="ralative-icon">
                          <input v-model="checkOutDate" class="checkout" type="date" />
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
                              <select v-model.number="rooms" class="select">
                                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-4 col-xs-12 col-sm-6">
                            <div class="kode_felid">
                              <label>Hóspedes</label>
                              <select v-model.number="guests" class="select">
                                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 col-xs-12 col-sm-12">
                      <div class="submit-form">
                        <button class="btn-normal-1 animated effect2-color-1" type="submit">
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
import { Component, Prop, Vue } from 'vue-facing-decorator'

@Component({})
export default class SearchComponent extends Vue {
  @Prop({ default: 'FORMULÁRIO DE RESERVA DE HOTEL' }) title!: string

  // Atributos com data-binding
  public destination: string = ''
  public checkInDate: string = ''
  public checkOutDate: string = ''
  public rooms: number = 1
  public guests: number = 1

  handleSubmit() {
    // Validação básica
    if (!this.destination) {
      alert('Por favor, insira um destino.')
      return
    }

    if (!this.checkInDate || !this.checkOutDate) {
      alert('Por favor, insira as datas de check-in e check-out.')
      return
    }

    if (new Date(this.checkInDate) > new Date(this.checkOutDate)) {
      alert('A data de check-in deve ser anterior à data de check-out.')
      return
    }

    // Submeter dados
    const searchData = {
      destination: this.destination,
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      rooms: this.rooms,
      guests: this.guests
    }
    console.log('Dados do formulário:', searchData)
  }
}
</script>

<style scoped>
.travel_search_engine {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title-icon {
  font-size: 18px;
  margin-bottom: 20px;
}

.kode_felid {
  margin-bottom: 15px;
}

.ralative-icon input[type='date'] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-form button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.submit-form button:hover {
  background-color: #0056b3;
}
</style>
