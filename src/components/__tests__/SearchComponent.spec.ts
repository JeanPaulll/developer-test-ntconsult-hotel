import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import SearchComponent from '@/components/SearchComponent.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia, setActivePinia } from 'pinia'

const vuetify = createVuetify({
  components,
  directives
})

/**
 * @author Jean Paul <jeanpaulwebb@gmail.com>
 * @date 20/08/2024
 */
describe('SearchComponent', () => {
  let wrapper: ReturnType<typeof mount>

  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)

    wrapper = mount(SearchComponent, {
      global: {
        plugins: [vuetify, pinia]
      }
    })
  })

  it('deve renderizar o componente corretamente', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('h5.title-icon').text()).toBe('Formulário de Reserva de Hotel')
  })

  // it('deve exibir uma mensagem de erro quando o destino não é preenchido', async () => {
  //   await wrapper.vm.handleSubmit()
  //   await nextTick()
  //   expect(wrapper.vm.state.dialog).toBe(true)
  //   expect(wrapper.vm.state.messageError).toBe('Por favor, insira um destino.')
  // })
  //
  // it('deve exibir uma mensagem de erro quando o destino não é preenchido', async () => {
  //   await wrapper.vm.handleSubmit()
  //   await nextTick()
  //   expect(wrapper.vm.state.dialog).toBe(true)
  //   expect(wrapper.vm.state.messageError).toBe('Por favor, insira um destino.')
  // })
  //
  // it('deve exibir uma mensagem de erro quando as datas não são preenchidas', async () => {
  //   await wrapper.setData({ form: { destination: 'Rio de Janeiro' } })
  //   await wrapper.vm.handleSubmit()
  //   await nextTick()
  //   expect(wrapper.vm.state.dialog).toBe(true)
  //   expect(wrapper.vm.state.messageError).toBe(
  //     'Por favor, insira as datas de check-in e check-out.'
  //   )
  // })
})
