let homeScore = document.getElementById("home-points");
let visitorsScore = document.getElementById("visitor-points");

let box1 = document.getElementById("box-1");
let box2 = document.getElementById("box-2");
let box3 = document.getElementById("box-3");
let box4 = document.getElementById("box-4");
let box5 = document.getElementById("box-5");
let box6 = document.getElementById("box-6");

let sumHome = 0;
let sumVisitors = 0;

function onePointHome() {
  sumHome += 1;
  homeScore.textContent = sumHome;
  console.log(homeScore.textContent);
}

function twoPointHome() {
  sumHome += 2;
  homeScore.textContent = sumHome;
}

function threePointHome() {
  sumHome += 3;
  homeScore.textContent = sumHome;
}

function onePointVisitor() {
  sumVisitors += 1;
  visitorsScore.textContent = sumVisitors;
  console.log(homeScore.textContent);
}

function twoPointVisitor() {
  sumVisitors += 2;
  visitorsScore.textContent = sumVisitors;
}

function threePointVisitor() {
  sumVisitors += 3;
  visitorsScore.textContent = sumVisitors;
}
