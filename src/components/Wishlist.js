var React = require('react');
var api = require('../utils/api');

var FestivalList = require('./FestivalList');


class Wishlist extends React.Component {

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
            festivals: userInfo.wishlist
          }
        })
      }.bind(this)); 
  }

  removeWishlist(festival, id) {
    console.log('removing from wishlist', festival)
    api.removeWishlist(festival, id).then( (res) => {
      console.log(res)
    }) 
  }

  render() {
    return (
      <div>
        <h1>My Wish LIst of Wool Festivals</h1>
        {!this.state.festivals
          ? <p> ...loading... </p>
          : <FestivalList 
              festivals={this.state.festivals} 
              listType={'wishlistList'}
              onRemoveWishlist={this.removeWishlist.bind(this)}
            />
        }
      </div>
    )
  }

}

module.exports = Wishlist;