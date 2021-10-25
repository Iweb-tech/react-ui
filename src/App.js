import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './_components';
// import { history } from './_helpers';
import './scss/style.scss';
import { } from 'react-router-dom';

// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// )

const Login = React.lazy(() => import('./views/pages/login/Login'));
const About = React.lazy(() => import('./views/pages/about/About'));
const Plan = React.lazy(() => import('./views/pages/plan/Plan'));
const TheLayout = React.lazy(() => import('./containers/TheLayout'))


class App extends Component {
  render() {
    return (
      <Router>
        <React.Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path="/login" render={props => <Login {...props} name="Login Page" />} />
            <Route exact path="/about" render={props => <About {...props} name="About Page" />} />
            <Route exact path="/plan" render={props => <Plan {...props} name="Plan Page" />} />
            <PrivateRoute  path="/" component={TheLayout} name="Home Page" />
            {/* <Route path="/" render={props => <PrivateRoute  {...props} name="Home Page" component={TheLayout}  />} /> */}
            {/* <Route path="/" render={props => <TheLayout {...props} name="Home Page" />} /> */}
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
