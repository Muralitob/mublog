import React from 'react';
import {
  Route,
  Switch,
  withRouter,
  BrowserRouter
} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './Layouts/animation.scss';
import lac from './helpers/loadableComponent'
import ScrollTop from './components/ScrollTop'
import DetailPage from './Pages/DetailPage'
import AboutPage from './Pages/AboutPage'

const Home = () => import('./modules/Home')
const Note = () => import('./modules/Note')
const About = () => import('./modules/About/About.jsx')
const Loading = () => import('./components/Loading')


const Routes = withRouter(({location}) => (
  <TransitionGroup className={'router-wrapper'}>
    <CSSTransition
      timeout={500}
      classNames={'fade'}
      key={location.pathname}
    >
      <ScrollTop>
        <Switch location={location}>
          <Route exact path={'/'} component={lac(Home)} />
          <Route exact path={'/note:id'} component={lac(Note)} />
          <Route exact path={'/loading'} component={lac(Loading)} />
          <Route exact path={'/about'} component={lac(About)} />
          <Route exact path={'/detail'} component={lac(DetailPage)} />
        </Switch>
      </ScrollTop>
    </CSSTransition>
  </TransitionGroup>
));

const BasicRoute = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

export default BasicRoute;