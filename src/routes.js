import Search from './components/search/mainSearch.vue'
import About from './components/About.vue'

export const routes = [
  {path: '/search',  component: Search
  },
  {path: '/about',  component: About
  },
  {path: '',  component: Search
  },
]
