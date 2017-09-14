let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let methodOverride = require('method-override');  // used to manipulate POST methods
let passport = require("passport");
let staticsController = require('../controllers/statics');
let usersController = require('../controllers/users');
let apisController = require('../controllers/apis');


// static routes
router.route('/')
  .get(staticsController.home);

router.route('/festivals')
  .get(staticsController.festivals);



// users routes
router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin);

router.route('/logout')
  .get(usersController.getLogout);



// user api routes
router.route('/api/user')
  .get(apisController.apiUser);

router.route('/api/user/visited')
  .post(apisController.apiNewVisited);

router.route('/api/user/visited/:id')
  .delete(apisController.apiDeleteVisited);

router.route('/api/user/wishlist')
  .post(apisController.apiNewWishlist);

router.route('/api/user/wishist/:id')
  .delete(apisController.apiDeleteWishlist);



// festival api routes
router.route('/api')
  .get(apisController.apiDoc);

router.route('/api/festival')
  .get(apisController.apiIndex);

router.route('/api/festival/all')
  .get(apisController.apiShowAll);

router.route('/api/festival/:name')
  .get(apisController.apiShow);

router.route('/api/festival')
  .post(apisController.apiNew);

router.route('/api/festival/:name')
  .put(apisController.apiUpdate);

router.route('/api/festival/:name')
  .delete(apisController.apiDelete);


module.exports = router;
