import { shallowMount } from '@vue/test-utils'
import JobList from '@/components/JobList.vue'
import jobService from '@/services/jobService'
import LoginForm from '@/components/LoginForm.vue'

jest.mock('@/services/jobService')

describe('JobList.vue', () => {
  it('updates state after login', async () => {
    const jobsData = [
      {
        id: 1,
        headline: 'Test Job',
        description: 'Test Description',
        classification: 'Test Classification',
        location: 'Test Location',
        date_added: '2021-04-22'
      }
    ]
    jobService.fetchJobs.mockResolvedValue({ data: jobsData })

    const loginMethodStub = jest.fn()
    const logoutMethodStub = jest.fn()

    const wrapper = shallowMount(JobList, {
      global: {
        stubs: {
          LoginForm: {
            template: '<div />',
            methods: {
              login: loginMethodStub,
              logout: logoutMethodStub
            }
          }
        }
      }
    })

    await wrapper.vm.login('johndoe')

    expect(wrapper.vm.jobs).toEqual(jobsData)
    expect(wrapper.vm.isLoggedIn).toBe(true)
    expect(wrapper.vm.dataFetched).toBe(true)
  })
})
