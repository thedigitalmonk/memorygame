var turn = 0;

var player = function(name) {
  this.name = name;
  this.score = 0;
};

var players = [];
players[0] = new player('Thomson');
players[1] = new player('Sobin');

for (var i = 0; i < players.length; i++) {

  var playerDiv = document.createElement('div');
  playerDiv.className = "players";

  playerDiv.innerHTML = '<span class="playername"> Player '+ (i+1) +': ' + players[i].name + '</span><span class="playerscore"> | Score:  <span id="score-'+ i +'">' + players[i].score + '</span></span>';

  document.body.appendChild(playerDiv);
}

var turnDiv = document.createElement('div');
turnDiv.className = "turn";
turnDiv.innerHTML = '<div> The current turn is for: ' + players[turn].name + '</div>';
document.body.appendChild(turnDiv);

function playerWin(playerName) {
  var message = "Game over! " + playerName + " has won the game."
  alert(message);
}
