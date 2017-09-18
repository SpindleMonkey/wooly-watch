var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Home = require('./Home');
var Signin = require('./Signin');
var Signup = require('./Signup');
var UsFestivals = require('./UsFestivals');
var Dashboard = require('./Dashboard');
var Visited = require('./Visited');
var Wishlist = require('./Wishlist');
var Calendar = require('./Calendar');
var Admin = require('./Admin');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            <Route path='/festivals' component={UsFestivals} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/visited' component={Visited} />
            <Route path='/wishlist' component={Wishlist} />
            <Route path='/calendar' component={Calendar} />
            <Route path='/admin' component={Admin} />
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
