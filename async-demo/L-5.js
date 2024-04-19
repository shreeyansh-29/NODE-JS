//Callback Hell

// console.log("before");
// const user = getUser(1, (user) => {
//   console.log("User", user);
//   getRepo(user.name, (res) => {
//     console.log("Repos", res);
//   });
// });
// console.log("after");

// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log("Reading...");
//     callback({id: id, name: "Shree"});
//   }, 2000);
// }

// function getRepo(name, callback) {
//   setTimeout(() => {
//     console.log("Preparing");
//     callback(["repo1", "repo2", "repo3"]);
//   }, 2000);
// }

//Resolving using Promises

console.log("before");
const user = getUser(1, (user) => {
  console.log("User", user);
  getRepositories(user.gitHubUsername, (res) => {
    console.log("Repos", res);
  });
});
console.log("after");

function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({id: id, gitHubUsername: "mosh"});
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}
