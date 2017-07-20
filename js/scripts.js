function Player(playerName,turn) {
  this.playerName = playerName;
  this.turn = turn;
  this.score = 0;
  this.scoreAmbition = 0;
};

var displayScores = function(playerA, playerB) {
  $(".playerA").append("<h3>" + playerA.score + "</h3>");
  $(".playerB").append("<h3>" + playerB.score + "</h3>");
};

var yourLuckyDay = function(number) {
  if (number > 1 && number <= 6) {
    return true;
  }
  else if (number === 1) {
    return false;
  }
  else {
    console.log("Something's Fishy Here!");
  }
};

var rolePigDice = function(player) {
  //generate random number and multiply by 6
  var diceValue = Math.random() * 6;
  diceValue = Math.ceil(diceValue);

  if (yourLuckyDay(diceValue)) {
    addToScore();
  }
  else {
    revertToOriginalScore(player);
  }
};

var saveScore = function(player) {
  currentPlayer.score = currentPlayer.scoreAmbition;
  evaluateWinner(currentPlayer);
}

var addToScore = function(currentPlayer, diceNumber) {
  currentPlayer.score += diceNumber;
};

var revertToOriginalScore = function(player) {
  currentPlayer.scoreAmbition = currentPlayer.score;
};

var evaluateWinner = function(player) {
  if (player.score >= 100) {
    congratulateWinner();
  }
};

var switchPlayer = function() {
  playerA.turn = !playerA.turn;
  playerB.turn = !playerB.turn;
}

var congratulateWinner = function() {
  alert("You Win! Congratulations, " + currentPlayer)
};

var player;

$(function() {

  $("#beginGame").click(function() {
    $(".wannaPlay").hide();
    $(".showGameBoard").show();

    var playerA = new Player("Player A", "true");
    var playerB = new Player("Player B", "false");
    var player = playerA;

    displayScores(playerA, playerB);
  });

  $("#letErRide").click(function() {
    rolePigDice(player);

  });

  $("#playItSafe").click(function() {
    switchPlayer(player);
    displayScores(playerA, playerB);
  });

});
