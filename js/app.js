var guessArray;
$(document).ready(function(){
  /* set dom elements and variables */
    var guessCount = 0;
    var userGuess = $('#userGuess');
    var guessList = $('#guessList');
    var count = $('#count');
    var feedBack = $('#feedback');
    var guessArray = [];
    var repeatGuess = false;

  /*-- start new game --*/
    newGame();

  /*-- New game button feature --*/
    $('.new').click(function(){
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
      feedBack.text('Make your Guess!');
      guessCount = 0;
      reset();
      count.text('');
      guessList.empty();
      guessArray = [];

      var number = getRandomInt();
      console.log(number + '!');
      getsAnswer(number);
    }

  // When a new game starts, a secret number between 1 and 100 should be generated that the user will have to guess. You should write a named function that takes care of this. You should try to start a new game without refreshing or reloading the page.
    function getRandomInt() {
      return Math.floor(Math.random() * (100 - 1)) + 1;
    }

  // The user should get feedback about each guess – if it was too low, too high, or just right. This means that you'll need to write a named function that takes a user guess and determines which feedback to provide.
    function getsAnswer(number) {
      $('form').off().submit(function(event) {
        // I put an off() here to unbind any event listeners for when the user clicks new game button, preventing multiple event handlers being run
        event.preventDefault();
        var guess = parseInt(userGuess.val(), 10);
          if (!isNaN(guess)) {
            reset();
            checkAnswer(number, guess);
            // compareAnswer(number, guess);
          } else {
            showMessage('Please enter a number:')
            alert('enter a number please!')
            reset();
          };
      });
    }

  // Reset my input box
    function reset() {
      userGuess.val('');
      userGuess.focus();
    }

  // compare user answer and you will need to write code that ensures that the user has supplied a numeric input between 1 and 100.
    function checkAnswer(number, guess) {
      if (guess < 0 || guess > 100) {
        alert('Stay within 0-100');
      } else if (guessArray.length > 0) {
        $.each(guessArray, function(index, val) {
          if (guess == val) {
            repeatGuess = true;
          };
        });
      };

      if (repeatGuess) {
        console.log(repeatGuess);
        alert('you chose this number already');
      };

        if (repeatGuess) {
          repeatGuess = false;
          return;
        } else {
          console.log(guessArray);
          guessArray.push(guess);
          compareAnswer(number, guess);
        };
    }

    function compareAnswer(number, guess) {
      var comparision = Math.abs(number - guess);
      var message;

      if (number == guess) {
        winner();
      } else if (comparision <= 10) {
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

      showMessage(message);
      trackGuesses(guess);
    }

  // Winner
    function winner() {
      feedBack.text('Great job, You won!!!');
    }

  // Feedback about the guess should appear in #feedback. By default, when the page loads, the text in this field is set to "Make Your Guess!"
    function showMessage(message) {
      feedBack.text(message);
    }

  // The game should track how many guesses the user has made. Feedback about this should appear in span#count (which defaults to 0, when the page loads).
    function trackGuesses(guess) {
      // jQuery.type( "test" ) === "string"
          guessCount ++;
          showGuessNum(guess);
          console.log(guessCount);
    }

  // The game should also supply users with a list of the numbers they have guessed so far. The CSS for this game is set up in such a way that you can simply add each guessed number as an <li> to ul#guessList.
    function showGuessNum(guess) {
      guessList.append('<li>' + guess + '</li>');
      count.text(guessCount);
    }
});






