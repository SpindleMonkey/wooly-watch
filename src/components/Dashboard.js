var React = require('react');
var Link = require('react-router-dom').Link;

var Logo = require('./Logo');

class Dashboard extends React.Component {

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Logo />
          <div className='col dashboard-container'>
            <h2>Welcome!</h2>
            <Link className='button' to='/festivals'>
              All festivals
            </Link>
            <Link className='button' to='/visited'>
              Visited festivals
            </Link>
            <Link className='button' to='/wishlist'>
              Festival wishlist
            </Link>d 
          </div>
        </div>
      </div>
    )
  }

}

module.exports = Dashboard;