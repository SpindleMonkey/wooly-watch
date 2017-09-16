var React = require('react');
var Link = require('react-router-dom').Link;

var Logo = require('./Logo');

//const image = require('../img/ram.svg');
// <img className='logo' src='../img/ram.svg' alt='the cutest ram ever!' />



class Home extends React.Component {

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Logo />
          <div className='col button-container'>
            <Link className='button' to='/signin'>
              Sign In
            </Link>
            <Link className='button' to='/signup'>
              Sign Up
            </Link>
            <Link className='button' to='/festivals'>
              See the Festivals 
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Home;
