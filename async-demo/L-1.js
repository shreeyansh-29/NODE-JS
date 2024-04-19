console.log("before");
const user = getUser(1);
console.log(user);
console.log("after");

function getUser(id) {
  setTimeout(() => {
    console.log("Reading...");
    return {id: id, name: "Shree"};
  },2000);
}

//2 console return undefined because the time code is executed the response might be not available to display as reading data from DB takes time for eg here its taking 2 sec.
