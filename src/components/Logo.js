var React = require('react');


class Logo extends React.Component {

  render() {
    return (
      <div className='col'>
        <h1>WoolyWatch</h1>
        <p><img src={require('../img/ram.svg')} alt='ram' width='200' /></p>
      </div>
    )
  }

}

module.exports = Logo;