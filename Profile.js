console.log("connected");

const favColor = document.querySelector("#color");
const favPlace = document.querySelector("#place");
const favRitual = document.querySelector("#ritual");

favColor.addEventListener("click", () => {
  alert("My favorite color is blue");
});

favPlace.addEventListener("click", () => {
  alert("My favorite place is Island Park, ID");
});

favRitual.addEventListener("click", () => {
  alert("My favorite ritual is to shoot hoops when I get home from work");
});
