function log(req, res, next) {
  console.log("Logging");
  //to end up the function
  next();
}

module.exports = log;
