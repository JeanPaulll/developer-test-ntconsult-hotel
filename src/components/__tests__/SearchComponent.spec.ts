import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import SearchComponent from '@/components/SearchComponent.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

describe('SearchComponent', () => {
  let wrapper: ReturnType<typeof mount>

  beforeEach(() => {
    wrapper = mount(SearchComponent, {
      global: {
        plugins: [vuetify],
      },
    })
  })

  it('deve renderizar o componente corretamente', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('h5.title-icon').text()).toBe('Formulário de Reserva de Hotel')
  })

  it('deve exibir uma mensagem de erro quando o destino não é preenchido', async () => {
    await wrapper.vm.handleSubmit()
    await nextTick()
    expect(wrapper.vm.state.dialog).toBe(true)
    expect(wrapper.vm.state.messageError).toBe('Por favor, insira um destino.')
  })

  it('deve exibir uma mensagem de erro quando o destino não é preenchido', async () => {
    await wrapper.vm.handleSubmit()
    await nextTick()
    expect(wrapper.vm.state.dialog).toBe(true)
    expect(wrapper.vm.state.messageError).toBe('Por favor, insira um destino.')
  })

  it('deve exibir uma mensagem de erro quando as datas não são preenchidas', async () => {
    await wrapper.setData({ form: { destination: 'Rio de Janeiro' } })
    await wrapper.vm.handleSubmit()
    await nextTick()
    expect(wrapper.vm.state.dialog).toBe(true)
    expect(wrapper.vm.state.messageError).toBe('Por favor, insira as datas de check-in e check-out.')
  })

  it('deve submeter o formulário corretamente quando todos os campos estão preenchidos', async () => {
    await wrapper.setData({
      form: {
        destination: 'Rio de Janeiro',
        checkInDate: '15/08/2024',
        checkOutDate: '20/08/2024',
        rooms: 1,
        guests: 2
      }
    })

    await wrapper.vm.handleSubmit()
    await nextTick()
    expect(wrapper.vm.form.destination).toBe('')
    // expect(wrapper.vm.form.checkInDate).toBe('')
    // expect(wrapper.vm.form.checkOutDate).toBe('')
    expect(wrapper.vm.form.rooms).toBe(1)
    expect(wrapper.vm.form.guests).toBe(1)
  })
})