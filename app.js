//console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
/* const emailRef = document.querySelector(".email");
console.log(emailRef); */

//PROMISE = SOMETHING THAT GIVES YOU A VALUE SOME TIME IN THE FUTURE
// To unlock promises theres 2 option
// CTRL + / to comment the selected lines

// 1. Then
/* fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  // The above turns to a promise

  .then((data) => {
    console.log(data);
    emailRef.innerHTML = data.email;
  }); */
//This unlocks the promise

// 2. Async/Await (Recommended)
/* async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  console.log(data);
  emailRef.innerHTML = data.email;
}

main(); */

const statusRef = document.querySelector(".status");

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("VIP");
    }, 2000);
  });
}

/**
 * 1. Create a function called 'getVideo'
 * 2. Accept a parameter called 'subscriptionStatus'
 * 3. Returm a new Promise inside of the function that:
 *      - if "VIP" resolve ("show video")
 *      - if "FREE" resolve ("show trailer")
 *      - otherwise reject ("no video")
 * 4. console.log the result of getVideo() in main()
 */
async function main() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
}

main();
