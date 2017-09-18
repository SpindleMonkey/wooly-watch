var axios = require('axios');

function compareState(a,b) {
  console.log(a.state);
  if (a.state < b.state)
    return -1;
  if (a.state > b.state)
    return 1;
  return 0;
}

function compareRegion(a,b) {
  console.log(a.region);
  if (a.region < b.region)
    return -1;
  if (a.region > b.region)
    return 1;
  return 0;
}

function compareMonth(a,b) {
  console.log(a.when);
  if (a.when < b.when)
    return -1;
  if (a.when > b.when)
    return 1;
  return 0;
}

function compareName(a,b) {
  // console.log(a.name);
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}


module.exports = {
  fetchFestivals: function (filter) {
    console.log('filter: ' + filter);

    return axios.get('/api/festival/all')
      .then(function (response) {
        console.log(response);
        switch (filter) {
          case 'By State':
            console.log(response.data.festivals);
            response.data.festivals.sort(compareState);
            break;

          case 'By Region':
            response.data.festivals.sort(compareRegion);
            break;

          case 'By Month':
            response.data.festivals.sort(compareMonth);
            break;

          case 'All':
          default:
            response.data.festivals.sort(compareName);
            break;
        }
        return response.data.festivals;
      })
      .catch(function(error) {
        console.log(error);
        return error;
      });
  },

  fetchUserInfo: function() {
    console.log('fetchUserInfo');
    return axios.get('/api/user')
      .then(function(response) {
        console.log('user data retrieved');
        console.log(response);
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
        return error;
      });
  },

  updateVisited: function(festival, id) {
    console.log('id: ' + id + ' is ' + festival);
    return axios.post('/api/user/visited', festival)
      .then(function(response) {
        console.log('festival added to visited list');
      })
      .catch(function(error) {
        console.log(error);
        return error;
      });
  },

  updateWishlist: function(festival, id) {
    return axios.post('/api/user/wishlist', festival)
      .then(function(response) {
        console.log('festival added to wishlist');
      })
      .catch(function(error) {
        console.log(error);
        return error;
      })
  }

}