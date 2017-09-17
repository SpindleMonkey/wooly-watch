var React = require('react');


class Logo extends React.Component {

  render() {
    return (
      <div className='col'>
        <div className='logo-container'>
          <h1>WoolyWatch</h1>
          <img src={require('../img/ram.svg')} alt='ram' width='200' />
        </div>
      </div>
    )
  }

}

module.exports = Logo;