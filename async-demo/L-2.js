//Callback function to resolved previous issue

console.log("before");
const user = getUser(1, (user) => {
  console.log("User", user);
  getRepo(user.name, (res) => {
    console.log("Repos", res);
  });
});
console.log("after");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading...");
    callback({id: id, name: "Shree"});
  }, 2000);
}

function getRepo(name, callback) {
  setTimeout(() => {
    console.log("Preparing");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
