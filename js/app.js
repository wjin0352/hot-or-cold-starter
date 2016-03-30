$(document).ready(function(){
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
      $('#userGuess').keydown(function(event) {
        if (event.keyCode == 13) {
          var guess = $('#userGuess').val();
          compareAnswer(number, guess)
        }
      });
    };

    function compareAnswer(number, guess) {
      // console.log(guess);
      var comparision = Math.abs(number - guess);

      console.log(comparision);

      if (comparision <= 10) {
        console.log('hot');
        var message = 'hot';
      } else if ((comparision <= 20) && (comparision > 10)) {
          console.log('getting warmer');
          var message = 'getting warmer';
        } else if ((comparision <= 30) && (comparision > 20)) {
          console.log('warm');
          var message = 'warm';
        } else if ((comparision <= 40) && (comparision > 30)) {
          console.log('cold');
          var message = 'cold';
        } else if ((comparision <= 50) && (comparision > 40)) {
          console.log('ice cold');
          var message = 'ice cold';
        } else if (comparision > 50) {
          console.log('frozen tundra');
          var message = 'frozen tundra';
        };

        showAnswer(message);
    };

  // Feedback about the guess should appear in #feedback. By default, when the page loads, the text in this field is set to "Make Your Guess!"
    function showAnswer(message) {
      $('h2#feedback').text(message);
    };

  // The game should track how many guesses the user has made. Feedback about this should appear in span#count (which defaults to 0, when the page loads).
    function trackGuesses() {

    };


});






