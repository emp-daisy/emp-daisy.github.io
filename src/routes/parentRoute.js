import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects'
export default [
  {
    path: '/',
    exact: true,
    component: About
  },
  {
    path: '/',
    exact: true,
    component: Skills
  },
  {
    path: '/',
    exact: true,
    component: Projects
  }
]