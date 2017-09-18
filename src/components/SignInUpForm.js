var React = require('react');

class SignInUpForm extends React.Component {

  render() {
    // need props/state to know if action is signin or signup!
    return (
      <form method='post' action={this.props.action}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input className='form-control' type='text' name='email' id='email' autoFocus required />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input className='form-control' type='password' name='password' id='password' required />
        </div>
        <input className='button' type='submit' value={this.props.button} />
      </form>
    )
  }

}

module.exports = SignInUpForm;