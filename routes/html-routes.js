// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenitcated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render('home.handlebars');
    }
    res.render('home.handlebars');
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render('login.handlebars');
    }
    res.render('login.handlebars');
  });

  app.get("/register", function(req, res) {
    // If the user already has an account send them to the register page
    if (req.user) {
      res.render('register.handlebars');
    }
    res.render('register.handlebars');
  });

  app.get("/booking", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render('booking.handlebars');
    }
    res.render('booking.handlebars');
  });

  app.get("/payment", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render('payment.handlebars');
    }
    res.render('payment.handlebars');
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/register", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../vendors/register.html"));
  });

};
