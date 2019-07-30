import { mount } from '@vue/test-utils'
// noinspection NpmUsedModulesInstalled
import Counter from 'src/demo/Counter.vue'

// it is an alias to test
// https://jestjs.io/docs/en/api.html#testname-fn-timeout

describe('Counter', () => {
  // now mount the component and you have the wrapper
  const wrapper = mount(Counter)

  // match html rendered
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="counter">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  // simulate a click and verify the effect
  it('button click should increment the count', () => {
    expect(wrapper.vm.counter).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.counter).toBe(1)
  })

  // simulate a click and verify the effect
  it('button click should increment the count', () => {
    const counter = wrapper.vm.counter
    wrapper.vm.increment()
    expect(wrapper.vm.counter).toBe(counter + 1)
  })

  // create and compare snapshots
  it('should render content correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
