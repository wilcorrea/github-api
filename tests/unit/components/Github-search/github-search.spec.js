import { shallowMount } from '@vue/test-utils'
import GithubCard from 'src/components/Github-card/Github-card.vue'

describe('Test Github Card', function () {
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
  const wrapper = shallowMount(GithubCard, { propsData: { user } })

  // match html rendered
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain(user.login)
  })

  // create and compare snapshots
  it('should render content correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
