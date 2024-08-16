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
              <h5 class="title-icon"><b>{{ title }}</b></h5>
              <div class="booking_content">
                <div class="kode_felid">
                  <label>Destino</label>
                  <div class="ralative-icon">
                    <input
                      v-model="form.destination"
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
                          <flat-pickr v-model="form.checkInDate" :config="config"></flat-pickr>
                          <span class="fa fa-calendar"></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-xs-12 col-sm-6">
                      <div class="kode_felid">
                        <label>Data de check-out</label>
                        <flat-pickr v-model="form.checkOutDate" :config="config"></flat-pickr>
                      </div>
                    </div>
                    <div class="col-md-9">
                      <div class="booking_content">
                        <div class="row">
                          <div class="col-md-4 col-xs-12 col-sm-6">
                            <div class="kode_felid">
                              <label>Quartos</label>
                              <v-select
                                v-model="form.rooms"
                                :items="guestsOptions"
                                outlined
                                dense
                              ></v-select>
                              <p>Você selecionou {{ form.rooms }} quarto{{ form.rooms > 1 ? 's.' : '' }}</p>
                            </div>
                          </div>
                          <div class="col-md-4 col-xs-12 col-sm-6">
                            <div class="kode_felid">
                              <label for="guests">Número de Hóspedes:</label>
                              <v-select
                                v-model="form.guests"
                                :items="guestsOptions"
                                outlined
                                dense
                              ></v-select>
                              <p>Você selecionou {{ form.guests }} hóspede{{ form.guests > 1 ? 's.' : '' }}</p>
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
                    <div class="col-md-12">
                      <h1>Debug</h1>
                      <pre>
                        {{ form }}
                      </pre>
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
  <div class="pa-4">
    <v-dialog
      v-model="state.dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        :text="state?.messageError"
      >
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Ok"
            @click="state.dialog = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
interface IState {
  loading: boolean,
  messageError: string,
  dialog: boolean
}

import { Component, Prop, Vue } from 'vue-facing-decorator'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import { Portuguese } from 'flatpickr/dist/l10n/pt.js'

@Component({
  components: {
    flatPickr
  }
})
export default class SearchComponent extends Vue {
  @Prop({ default: 'Formulário de Reserva de Hotel' }) title!: string
  public config = {
    locale: Portuguese,
    dateFormat: 'd/m/Y'
  }
  public guestsOptions = Array.from({ length: 10 }, (_, i) => i + 1)
  public form = {
    destination: '',
    checkInDate: '' as Date | string,
    checkOutDate: '' as Date | string,
    rooms: 1,
    guests: 1
  }

  get isValidDateRange(): boolean {
    const checkInDate = this.parseDate(this.form.checkInDate! as string)
    const checkOutDate = this.parseDate(this.form.checkOutDate! as string)
    if (!checkInDate || !checkOutDate) {
      return false
    }
    const checkInTimestamp = checkInDate.getTime()
    const checkOutTimestamp = checkOutDate.getTime()
    if (checkInTimestamp > checkOutTimestamp) {
      this.state = { dialog: true, messageError: 'A data de check-in deve ser anterior à data de check-out.' }
      return false
    }
    if (checkInTimestamp === checkOutTimestamp) {
      return true
    }
    return true
  }

  /**
   * @private
   */
  private _state: IState = {
    loading: false,
    messageError: ''
  }

  get state(): IState {
    return this._state
  }

  /**
   * @param newState
   */
  set state(newState: Partial<IState>) {
    this._state = { ...this._state, ...newState }
  }

  /**
   * @description Método para resetar o formulário
   */
  resetForm() {
    this.form = {
      destination: '',
      checkInDate: '',
      checkOutDate: '',
      rooms: 1,
      guests: 1
    }
  }

  public handleSubmit(): void {
    if (this.validatingForm()) {
      // Lógica para submit
      console.log('Formulário válido, submetendo...', this.form)
      this.resetForm()
    }
  }

  private addDays(date: Date, days: number): Date {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }

  private validatingForm(): boolean {
    if (!this.form.destination) {
      this.state = { dialog: true, messageError: 'Por favor, insira um destino.' }
      return false
    }

    if (!this.form.checkInDate || !this.form.checkOutDate) {
      this.state = { dialog: true, messageError: 'Por favor, insira as datas de check-in e check-out.' }
      return false
    }

    return this.isValidDateRange
  }

  private parseDate(dateString: string = ''): Date | null {
    const [day, month, year] = dateString.split('/').map(Number)
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return null
    }
    return new Date(year, month - 1, day)
  }

  created() {
    console.log('Created chamado')
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
