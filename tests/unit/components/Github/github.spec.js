import { shallowMount } from '@vue/test-utils'
// noinspection NpmUsedModulesInstalled
import Github from 'src/components/Github/Github.vue'
import axios from 'axios'

jest.mock('axios')

describe('Test Github', function () {
  const wrapper = shallowMount(Github)

  // it is valid??
  // it('check data', () => {
  //   expect(typeof wrapper.vm.user).toBe('object')
  //   expect(wrapper.vm.error).toBe('')
  //   expect(typeof wrapper.vm.title).toBe('string')
  // })

  // test cleanErrorMessages
  it('test cleanErrorMessages', () => {
    wrapper.vm.error = 'error'
    wrapper.vm.cleanErrorMessages()
    expect(wrapper.vm.error).toBe('')
  })

  // search a valid user
  it('search a valid user', async () => {
    const login = 'wilcorrea'
    const response = { data: { login } }
    axios.get.mockResolvedValue(response)
    await wrapper.vm.searchUser(login)
    expect(wrapper.vm.user.login).toBe(login)
  })

  // search a invalid user
  it('search a invalid user', async () => {
    wrapper.vm.error = ''
    await wrapper.vm.onError()
    expect(wrapper.vm.error).toBe(wrapper.vm.$options.messages.error)
  })

  // create and compare snapshots
  it('should render content correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
