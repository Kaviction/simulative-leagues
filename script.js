let teams = [];

function createLeague() {
  teams = [];
  document.getElementById("output").innerHTML = "League created!";
}

function addTeam() {
  let teamName = "Team " + (teams.length + 1);
  teams.push(teamName);

  document.getElementById("output").innerHTML =
    "Teams: " + teams.join(", ");
}
