// // const a = 1;
// // const b = 2;
// // const c = 3;

// // console.log(a);
// // console.log(b);
// // console.log(c);

// let janji = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("Done"), 1000);
//   //   setTimeout(() => reject(new Error("alah")), 1000);
// });

// janji
//   .then((hasil) => {
//     console.log("[INI HASIL]", hasil);
//   })
//   .catch((error) => {
//     console.log("[INI ERROR]", error);
//   })
//   .finally(() => {
//     console.log("[INI RESOLVE], resolve maupun reject tetap dijalankan");
//   });

function fetchDadJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ERROR! Status: ${response.status}`);
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      console.log(data.id);
      console.log(`Dad Joke: ${data.joke}`);
    })
    .catch((error) => {
      console.error("Error fetching the joke:", error);
    });
}
