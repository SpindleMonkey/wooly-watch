var React = require('react');

var Logo = require('./Logo');
var SignInUpForm = require('./SignInUpForm');

class Signin extends React.Component {

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Logo />
          <div className='col signin-container'>
            <h2>Sign In!</h2>
            <SignInUpForm action='/login' button='sign in' />
          </div>
        </div>
      </div>
    )
  }

}

module.exports = Signin;