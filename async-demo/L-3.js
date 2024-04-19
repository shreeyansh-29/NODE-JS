// //Callback Hell or Christmas Tree Hell
// console.log("before");
// const user = getUser(1, (user) => { //anonymous function
//   getRepositories(user.name, (res) => { //anonymous function
//     getCommits(repo, (commits) => { //anonymous function
//     });
//   });
// });
// console.log("after");

// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log("Reading...");
//     callback({id: id, name: "Shree"});
//   }, 2000);
// }

// function getRepositories(name, callback) {
//   setTimeout(() => {
//     console.log("Preparing");
//     callback(["repo1", "repo2", "repo3"]);
//   }, 2000);
// }

// function getCommits(repo, callback) {
//   setTimeout(() => {
//     console.log("Preparing");
//     callback(["repo1", "repo2", "repo3"]);
//   }, 2000);
// }

// to resolve the Callback hell we need to declare named functions instead of anonymous function

console.log("before");
const user = getUser(1, getRepositories);
console.log("user", user);
console.log("after");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading...");
    callback({id: id, name: "Shree"});
  }, 2000);
}

function getRepositories(user) {
  getRepositories(user, getCommits);
}

function getCommits(repos) {
  getCommits(repo, displayCommit);
}

function displayCommit(commits) {
  console.log(commits);
}
