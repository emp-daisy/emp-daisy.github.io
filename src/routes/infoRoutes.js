
import About from '../components/About';
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default [
  {
    path: '/',
    component: About,
    exact: true
  },
  {
    path: '/about',
    component: About,
    exact: true
  },
  {
    path: '/skills',
    component: Skills,
    exact: true
  },
  {
    path: '/projects',
    exact: true,
    component: Projects
  }
]