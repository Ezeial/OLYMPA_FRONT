import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/public/home/Home'
import Shop from './pages/public/shop/Shop'
import Auth from './pages/public/auth/Auth'
 
const App = () => {
  return <Switch>
    <Route exact path = '/'>
      <Home/>
    </Route>
    <Route path = '/shop'>
      <Shop/>
    </Route>
    <Route path = '/auth'>
      <Auth/>
    </Route>
  </Switch>
}

export default App
