var axios = require('axios');

module.exports = {
  fetchFestivals: function (filter) {
    //var encodedURI = window.encodeURI('/api/festival/all');

    return axios.get('/api/festival/all')
      .then(function (response) {
        console.log(response);
        return response.data.festivals;
      })
      .catch(function(error) {
        console.log(error);
        return error;
      });
  }

}