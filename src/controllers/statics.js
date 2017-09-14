
let db = require('../models');

/*
 * Static Endpoints
 */

// GET /
function home(req, res) {  
  console.log('/');
  res.render('index');
}

// GET /inventory
function festivals(req, res) {
  console.log('/inventory');
  res.render('inventory');
}


module.exports = {
  home: home,
  festivals: festivals
};
