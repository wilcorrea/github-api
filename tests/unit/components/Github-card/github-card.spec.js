import { shallowMount } from '@vue/test-utils'
// noinspection NpmUsedModulesInstalled
import GithubCard from 'src/components/Github-card/Github-card.vue'

describe('Test Github Card', function () {
  describe('invalid user', function () {
    const wrapper = shallowMount(GithubCard)

    // validate available
    it('check available computed', () => {
      expect(wrapper.vm.available).toBe(false)
    })

    // create and compare snapshots
    it('should render content correctly', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('invalid user', function () {
    const user = {
      login: 'wilcorrea',
      avatar_url: undefined,
      html_url: undefined,
      company: undefined,
      location: undefined,
      public_repos: undefined,
      repos_url: undefined,
      followers: undefined,
      following_url: undefined,
      following: undefined
    }
    const wrapper = shallowMount(GithubCard, { attrs: { user } })

    // validate available
    it('check available computed', () => {
      expect(wrapper.vm.available).toBe(true)
    })

    // match html rendered
    it('renders the correct markup', () => {
      expect(wrapper.html()).toContain(user.login)
    })

    // create and compare snapshots
    it('should render content correctly', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

})
