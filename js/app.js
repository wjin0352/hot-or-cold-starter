// Global var for count of guesses
var guessCount = 0;

$(document).ready(function(){
  /*-- start new game --*/
    newGame();

  /*-- New game button feature --*/
    $('.new').click(function(){
      // guessCount = 0;
      // $('#userGuess').val('');
      newGame();
    });

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  // When the page loads, JavaScript should start a new game. Since you'll need to be able to start a new game when the user clicks the "New Game" button, you'll want to create a newGame function that does everything necessary to start a new game.
    function newGame() {
      $('#feedback').text('Make your Guess!');
      guessCount = 0;
      $('#userGuess').val('');
      $('#count').text('');
      $('#guessList').empty();
      var number = getRandomInt();
      console.log(number + '!');
      getsAnswer(number);
    };

  // When a new game starts, a secret number between 1 and 100 should be generated that the user will have to guess. You should write a named function that takes care of this. You should try to start a new game without refreshing or reloading the page.
    function getRandomInt() {
      return Math.floor(Math.random() * (100 - 1)) + 1;
    };

  // The user should get feedback about each guess – if it was too low, too high, or just right. This means that you'll need to write a named function that takes a user guess and determines which feedback to provide.
    function getsAnswer(number) {
      $('#userGuess').off('keydown').on('keydown', function(event) {
        if (event.keyCode == 13) {
          event.preventDefault();
          console.log(number);
          var guess = parseInt($(this).val(), 10);
          if (!isNaN(guess)) {
            compareAnswer(number, guess);
          } else {
            showMessage('Please enter a number:')
          }
        }
      });

      $('#guessButton').off('click').on('click', function(event) {
        event.preventDefault();
        var guess = parseInt($(this).val(), 10);
        if (!isNaN(guess)) {
          compareAnswer(number, guess);
        } else {
          showMessage('Please enter a number:')
        }
      });

    }

    function compareAnswer(number, guess) {
      // console.log(guess);
      var comparision = Math.abs(number - guess);
      var message;
      // console.log(comparision);

      if (comparision <= 10) {
        message = 'hot';
      } else if (comparision <= 20) {
        message = 'getting warmer';
      } else if (comparision <= 30) {
        message = 'warm';
      } else if (comparision <= 40) {
        message = 'cold';
      } else if (comparision <= 50) {
        message = 'ice cold';
      } else if (comparision > 50) {
        message = 'frozen tundra';
      };

      console.log(message);
      showMessage(message);
    }

  // Feedback about the guess should appear in #feedback. By default, when the page loads, the text in this field is set to "Make Your Guess!"
    function showMessage(message) {
      $('h2#feedback').text(message);
      trackGuesses();
    };

  // The game should track how many guesses the user has made. Feedback about this should appear in span#count (which defaults to 0, when the page loads).
    function trackGuesses() {
      // jQuery.type( "test" ) === "string"
      var condition = ($('#userGuess').val() != '');
        if (condition)  {
          guessCount ++;
          showGuessNum();
          console.log(guessCount);
        };
    };


  // The game should also supply users with a list of the numbers they have guessed so far. The CSS for this game is set up in such a way that you can simply add each guessed number as an <li> to ul#guessList.
    function showGuessNum() {
      $('#guessList').append('<li>' + guessCount + '</li>');
      $('#count').text(guessCount);
    };
});






