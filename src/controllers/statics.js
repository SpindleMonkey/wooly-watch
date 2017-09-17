
let db = require('../models');

/*
 * Static Endpoints
 */

// GET /
function home(req, res) {  
  console.log('/');
  res.render('index');
}

// GET /festival
// function festivals(req, res) {
//   console.log('/festivals');
//   res.render('festival');
// }


module.exports = {
  home: home,
  // festivals: festivals
};
