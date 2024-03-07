import { shallowMount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue'

describe('LoginForm.vue', () => {
  let loginStub, logoutStub, wrapper

  beforeEach(() => {
    loginStub = jest.fn()
    logoutStub = jest.fn()

    wrapper = shallowMount(LoginForm, {
      props: {
        isLoggedIn: false,
        login: loginStub,
        logout: logoutStub
      }
    })
  })

  it('emits the login event with username', async () => {
    const input = wrapper.find('input[type="text"]')
    await input.setValue('johndoe')
    await wrapper.find('form').trigger('submit.prevent')

    expect(loginStub).toHaveBeenCalled()
  })
})
