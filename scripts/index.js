"use strict";
let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

function init() {
  const displayTeamButton = document.getElementById("displayTeamButton");
  displayTeamButton.onclick = displayTeam;
  

  selectTeamOption();
}

const footballTeamList = document.getElementById("footballTeamList");
const showTeam = document.getElementById("showTeam");
const valueOfTeam = document.getElementById("valueOfTeam");

function selectTeamOption() {
  for (const team of teams) {
    const option = document.createElement("option");
    option.innerText = team.name;
    option.value = team.code;

    footballTeamList.appendChild(option);

  }
}

function displayTeam() {
  const selectCode = footballTeamList.value;
  for(const team of teams) {
    if(team.code == selectCode) {
        showTeam.innerText = team.name;
        valueOfTeam.innerText = team.code;
    }
  }

}


window.onload = init;
