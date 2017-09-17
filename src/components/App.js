var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Home = require('./Home');
var Signin = require('./Signin');
var Signup = require('./Signup');
var Festivals = require('./Festivals');
var Dashboard = require('./Dashboard');
var Visited = require('./Visited');
var Wishlist = require('./Wishlist');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            <Route path='/festivals' component={Festivals} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/visited' component={Visited} />
            <Route path='/wishlist' component={Wishlist} />
            <Route render={function() {
              return (<p>Not found.</p>)
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
