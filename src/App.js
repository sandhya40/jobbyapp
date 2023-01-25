import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRouter from './components/ProtectedRouter'
import NotFound from './components/NotFound'
import JobItemDetails from './components/JobItemDetails'
import Jobs from './components/Jobs'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRouter exact path="/" component={Home} />
    <ProtectedRouter exact path="/jobs" component={Jobs} />
    <ProtectedRouter exact path="/jobs/:id" component={JobItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
