import { shallowMount } from '@vue/test-utils'
// noinspection NpmUsedModulesInstalled
import Github from 'src/components/Github/Github.vue'
// noinspection NpmUsedModulesInstalled
import $container from 'src/container';

describe('Test Github', function () {
  const login = 'wilcorrea'
  const response = { data: { login } }
  $container.set('github', user => new Promise((resolve, reject) => {
    if (user) {
      resolve(response)
      return
    }
    reject()
  }));

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

  // test onSuccess
  it('test onSuccess', () => {
    wrapper.vm.user = {}
    wrapper.vm.onSuccess(response)
    expect(wrapper.vm.user.login).toBe(login)
  })

  // test onError
  it('test onError', () => {
    wrapper.vm.error = ''
    wrapper.vm.onError()
    expect(wrapper.vm.error).toBe(wrapper.vm.$options.messages.error)
  })

  // search a valid user
  it('search a valid user', async () => {
    await wrapper.vm.searchUser(login)
    expect(wrapper.vm.user.login).toBe(login)
  })

  // search a invalid user
  it('search a invalid user', async () => {
    await wrapper.vm.searchUser(undefined)
    expect(wrapper.vm.error).toBe(wrapper.vm.$options.messages.error)
  })

  // create and compare snapshots
  it('should render content correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
