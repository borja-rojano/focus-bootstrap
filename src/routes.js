import Search from './components/Search.vue'
import Viewer from './components/viewer/Viewer.vue'
import About from './components/About.vue'

export const routes = [
  {path: '/search',  component: Search
  },
  {path: '/viewer',  component: Viewer
  },
  {path: '/about',  component: About
  },
  {path: '',  component: About
  },
]
