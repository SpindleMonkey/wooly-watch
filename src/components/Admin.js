var React = require('react');

var AddFestivalForm = require('./AddFestivalForm');


class Admin extends React.Component {

  render() {
    return (
      <div className='container'>
        <h1>Add New Festival</h1>
        <AddFestivalForm />
      </div>
    )
  }

}

module.exports = Admin;