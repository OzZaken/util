import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import LoadingSpinner from '../components/LoadingSpinner'

// Lazy-loaded components
const Home = lazy(() => import('../components/Home'))
const About = lazy(() => import('../components/About'))
const Contact = lazy(() => import('../components/Contact'))
const Login = lazy(() => import('../components/Login'))
const Dashboard = lazy(() => import('../components/Dashboard'))
const Settings = lazy(() => import('../components/Settings'))
const NotFound = lazy(() => import('../components/NotFound'))

export default function AppRouter() {
  const { isAuthenticated } = useAuth()

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} isAuthenticated={isAuthenticated} />
          <PrivateRoute path="/settings" component={Settings} isAuthenticated={isAuthenticated} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  )
}

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}
