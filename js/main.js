var card = function(name, suit, value){
  this.name = name;
  this.suit = suit;
  this.value = value;
};

var deck = function(){
  var _cards = [];
  this.names = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
  this.suits = ['Hearts','Diamonds','Spades','Clubs'];
  this.init = function(){
    for(var i=0;i<4;i++){
       for(var j=0;j<13;j++){
        _cards.push(new card(this.names[j],this.suits[i], (j+1)*(i+1)));
       }
    }
  };
  this.printCards = function(){
    console.log(_cards);

  };

  this.removeByValue = function(value) {

    for (var i = 0; i < _cards.length; i++) {

        if(_cards[i].value == value) {
          delete _cards[i];
        }
    }
  };

  this.draw = function(){
    //console.log(_cards.length);
    for (var i = 0; i < _cards.length; i++) {
      var div = document.createElement("div");

      var clicked = 0;
      var previousCards = [];

      div.addEventListener("click", function(event){

        if(clicked < 2) {

          //show this card
          this.querySelector(".name").classList.add("show");
          this.querySelector(".suit").classList.add("show");

          // add this card to previous cards
          previousCards[clicked] = this;

          console.log(previousCards);

          if (clicked == 1) {
            var scoreid = "score-"+ turn;

            //console.log(scoreid);

            if(previousCards[0].querySelector(".name").innerHTML == previousCards[1].querySelector(".name").innerHTML && previousCards[0].querySelector(".suit").innerHTML == previousCards[1].querySelector(".suit").innerHTML) {
              players[turn].score += 100;
              document.getElementById(scoreid).innerHTML = players[turn].score;
                var val1 = previousCards[0].getAttribute("data-row");
                var val2 = previousCards[1].getAttribute("data-row");
                this.removeByValue(val1);
                this.removeByValue(val2);
                previousCards[0].remove();
                previousCards[1].remove();
              // console.log(_cards);
              //playerWin(players[turn].name);
            } else if(previousCards[0].querySelector(".name").innerHTML == previousCards[1].querySelector(".name").innerHTML) {
              players[turn].score += 10;
              document.getElementById(scoreid).innerHTML = players[turn].score;

            } else {
                //switch turn
                if(turn == 0) {
                  turn = 1;
                  turnDiv.innerHTML = '<div> The current turn is for: ' + players[1].name + '</div>';
                } else if(turn == 1){
                  turn = 0;
                  turnDiv.innerHTML = '<div> The current turn is for: ' + players[0].name + '</div>';
                }

            }
          }

        } else {
          //show the new card
          this.querySelector(".name").classList.add("show");
          this.querySelector(".suit").classList.add("show");

          //remove previous cards
          previousCards[0].querySelector(".name").classList.remove("show");
          previousCards[0].querySelector(".suit").classList.remove("show");
          previousCards[1].querySelector(".name").classList.remove("show");
          previousCards[1].querySelector(".suit").classList.remove("show");

          //add current card to previousCards
          previousCards[0] = this;

          //setup click for zero
          clicked = 0;

          console.log(turn);

        }

        //console.log(previousCards);
        clicked++;

      });

      var ascii;
      div.className = "card";
      div.setAttribute('data-row', _cards[i].value);

      if(_cards[i].suit == 'Diamonds') {
        ascii = "&diams;";
      } else {
        ascii = "&" + _cards[i].suit.toLowerCase() + ';';
      }

      div.innerHTML = '<span class="name">' + _cards[i].name + '</span><span class="suit">' + ascii + '</span>';
      document.body.appendChild(div);
    }
  };

  this.shuffle = function() {
    for (var i = 0; i < _cards.length; i++) {
      var a = _cards[i];
      var b = parseInt(Math.random() * _cards.length);
      _cards[i] = _cards[b];
      _cards[b] = a;
    }
  };

};

var myDeck = new deck();
myDeck.init();
myDeck.init();

// var muDeck = new deck();
// muDeck.init();
//
// function shuffleBig(cards1, cards2){
//   var fullDeck = [];
//   fullDeck.push(cards1);
//
// }
//shuffleBig(deck1, deck2);
myDeck.printCards();
myDeck.shuffle();
myDeck.draw();
