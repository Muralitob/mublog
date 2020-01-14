import React from 'react';
import {
  Route,
  Switch,
  withRouter,
  BrowserRouter
} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './Layouts/animation.scss';
import { ANIMATION_MAP } from './contants/Maps'
import lac from './helpers/loadableComponent'
import ScrollTop from './components/ScrollTop'
// import Async from './components/AsyncComponent'
const Home = () => import('./modules/Home/index')
const Note = () => import('./modules/Note/index')
const About = () => import('./modules/About/About.jsx')
// const Loading = () => import('./components/Loading')
// const DetailPage = () => import('./Pages/DetailPage')

// import HomePage from './Pages/HomePage'
// import AboutPage from './Pages/AboutPage'
// import ListPage from './Pages/ListPage'
// import DetailPage from './Pages/DetailPage'

// import Home from './modules/Home'
// import About from './modules/About/About'
// import Note from './modules/Note'

const Routes = withRouter(({location, history}) => (
  <TransitionGroup className={'router-wrapper'}
    childFactory={child => React.cloneElement(
      child,
      { classNames: ANIMATION_MAP[history.action]}
    )}>
    <CSSTransition
      timeout={500}
      classNames={'fade'}
      key={location.pathname}
    >
      <ScrollTop>
        <Switch location={location}>
          { console.log(history.action)}
          <Route exact path={'/'} component={lac(Home)} />
          <Route exact path={'/about'} component={lac(About)} />
          <Route path={'/note:id'} component={lac(Note)} />
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