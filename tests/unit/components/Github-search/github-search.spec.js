import { shallowMount } from '@vue/test-utils'
// noinspection NpmUsedModulesInstalled
import GithubCard from 'src/components/Github-search/Github-search.vue'

describe('Test Github Search', function () {
  const wrapper = shallowMount(GithubCard)

  // it's also easy to check for the existence of elements
  it('has basic elements', () => {
    expect(wrapper.contains('input')).toBe(true)
    expect(wrapper.contains('button')).toBe(true)
  })

  const user = 'wilcorrea'

  // https://vue-test-utils.vuejs.org/api/wrapper/trigger.html
  const button = wrapper.find('button')
  const input = wrapper.find('input')

  // simulate a click and verify the effect
  it('button click emmit the event "searchUser"', () => {
    // trigger a search
    button.trigger('click')
    // console.log('[debug]', wrapper.emitted())
    expect(wrapper.emitted().searchUser).toEqual([['']])
  })

  // simulate a click and verify the effect
  it('emmit a search by an user', () => {
    // input.element.value = value
    // input.trigger('input')
    input.setValue(user)
    expect(wrapper.vm.search).toEqual(user)

    // trigger new search
    button.trigger('click')
    expect(wrapper.emitted().searchUser).toEqual([[''], [user]])
  })
})
