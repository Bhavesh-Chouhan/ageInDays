let currentYear = new Date().getFullYear();

const ageInDay = () => {
  let birthYear = prompt("What is your birth year?");
  let calculateAge = (currentYear - birthYear) * 365;
  document.getElementById("result").innerHTML = calculateAge;
};
const reset = () => {
  document.getElementById("result").innerHTML = "";
};
