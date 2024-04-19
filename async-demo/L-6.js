//Async and Await

console.log("Before");

const displayCommit = async () => {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commit = await getCommits(repos[0]);
    console.log(`Commits ${commit}`);
  } catch (error) {
    new Error(error);
  }
};

displayCommit();

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
