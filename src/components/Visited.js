var React = require('react');
var api = require('../utils/api');

var FestivalList = require('./FestivalList');


class Visited extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      festivals: null
    };

    this.updateList = this.updateList.bind(this);
  }

  componentDidMount() {
    this.updateList();
  }

  updateList() {
    this.setState(function() {
      return {
        festivals: null
      }
    });

    api.fetchUserInfo()
      .then(function(userInfo) {
        console.log(userInfo);
        this.setState(function() {
          return {
            festivals: userInfo.visited
          }
        })
      }.bind(this)); 
  }

  removeVisited(festival, id) {
    console.log('removing from visited', festival)
    api.removeVisited(festival, id).then( (res) => {
      console.log(res)
    }) 
  }

  render() {
    return (
      <div>
        <h1>Wool Festivals I Have Visited</h1>
        {!this.state.festivals
          ? <p> ...loading... </p>
          : <FestivalList 
              festivals={this.state.festivals} 
              listType={'visitedList'}
              onRemoveVisited={this.removeVisited.bind(this)}
            />
        }
      </div>
    )
  }

}

module.exports = Visited;