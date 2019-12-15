import Loadable from 'react-loadable'
// import { isDevEnv } from '@/utils/env'
import loading from '../components/Loading'

const loadableComponent = (loader, render) => {
  const config = {
    loader,
    loading,
    delay: 200
  }
  if (render) {
    config.render = render
  }
  return Loadable(config)
}


export default loadableComponent