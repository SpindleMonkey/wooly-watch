var React = require('react');

var Logo = require('./Logo');
var SignInUpForm = require('./SignInUpForm');

class Signup extends React.Component {

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Logo />
          <div className='col signin-container'>
            <h2>Sign Up!</h2>
            <p>WoolyWatch accounts are free. Use your email address to get an account, but don't worry, we won't use your email address for evil of any kind. Really.</p>
            <SignInUpForm action='/signup' button='sign up' />
          </div>
        </div>
      </div>
    )
  }

}

module.exports = Signup;