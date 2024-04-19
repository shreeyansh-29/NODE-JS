console.log("Before");
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     });
//   });
// });

// const displayCommit = async () => {
//   try {
//     const user = await getUser(1);
//     const repos = await getRepositories(user.gitHubUsername);
//     const commit = await getCommits(repos[0]);
//     console.log(`Commits ${commit}`);
//   } catch (error) {
//     new Error(error);
//   }
// };

// displayCommit();

// getUser(1)
//   .then((res) => getRepositories(res.gitHubUsername))
//   .then((res) => getCommits(res[0]))
//   .then((res) => console.log(res))
//   .catch((err) => new Error(err));

console.log("After");

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

function getCommits(repo, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      reject("message");
    }, 2000);
  });
}
