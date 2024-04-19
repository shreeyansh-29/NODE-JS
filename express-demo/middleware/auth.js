function auth(req, res, next) {
  console.log("Authenticating");
  //to end up the function
  next();
}

module.exports = auth;
