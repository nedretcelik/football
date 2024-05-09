"use strict";
let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

 function init() {

    selectTeamOption();

};

const footballTeamList = document.getElementById("footballTeamList");
function selectTeamOption() {
  for (const team of teams) {
    const option = document.createElement("option");
    option.innerText = team.name;
    option.value = team.code;

    footballTeamList.appendChild(option);

  }
}

window.onload = init;




