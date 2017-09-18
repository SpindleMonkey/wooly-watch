var React = require('react');

class Calendar extends React.Component {

  render() {
    return (
      <div className='container'>
        <h1>Calendar of Wool Festivals</h1>
        <h2>May</h2>
        <ul>
          <li>Maryland Sheep & Wool Festival</li>
          <li>Massachusetts Sheep & Woolcraft Fair</li>
          <li>Shepherd's Harvest Sheep & Wool Festival</li>
        </ul>
        <h2>June</h2>
        <ul>
          <li>Black Sheep Gathering</li>
          <li>Estes Park Wool Market & Fiber Festival</li>
          <li>Iowa Sheep & Wool Festival</li>
          <li>Maine Fiber Frolic</li>
        </ul>
        <h2>August</h2>
        <ul>
          <li>Michigan Fiber Festival</li>
        </ul>
        <h2>September</h2>
        <ul>
          <li>Oregon Flock & Fiber Festival</li>
        </ul>
        <h2>October</h2>
        <ul>
          <li>New York State Sheep & Wool Festival</li>
          <li>Taos Wool Festival</li>
        </ul>
      </div>
    )
  }

}

module.exports = Calendar;