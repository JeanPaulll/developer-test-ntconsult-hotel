// tests/home.test.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Home from '../src/views/Home.vue'
import * as matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

describe('Home.vue', () => {
    it('renders the home page correctly', () => {
        const wrapper = mount(Home)
        expect(wrapper.text()).toContain('Home Page')
    })
})
