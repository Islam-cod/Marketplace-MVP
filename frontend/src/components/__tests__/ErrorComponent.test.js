import { shallowMount } from '@vue/test-utils'
import ErrorComponent from '@/components/ErrorComponent.vue'

describe('ErrorComponent.vue', () => {
  it('displays error message', () => {
    const errorMessage = 'An error occurred'
    const wrapper = shallowMount(ErrorComponent, {
      props: { errorMessage }
    })

    expect(wrapper.text()).toContain(errorMessage)
  })
})
