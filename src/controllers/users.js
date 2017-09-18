let passport = require('passport');

// GET /signup
function getSignup(request, response) {
  console.log('getSignup');
  response.render('signup.ejs', { message: request.flash('signupMessage') });
}

// POST /signup
function postSignup(request, response, next) {
  console.log('postSignup');
  let signupStrategy = passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup',
    failureFlash: true
  });

  return signupStrategy(request, response, next);
}

// GET /login
function getLogin(request, response, next) {
  response.render('login.ejs', { message: request.flash('loginMessage') });
}

// POST /login 
function postLogin(request, response, next) {
  let loginProperty = passport.authenticate('local-login', {
    successRedirect: '/dashboard',
    failureRedirect: '/signin',
    failureFlash: true
  });

  return loginProperty(request, response, next);
}

// GET /logout
function getLogout(request, response, next) {
  request.logout();
  response.redirect('/');
}

// Restricted page
function admin(request, response){
  if (request.user.admin) {
    response.redirect('/admin');    
  } else {
    response.redirect('/');
  }
}


module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  admin: admin
};