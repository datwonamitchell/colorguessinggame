const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
  COLORS_ARRAY.sort()
  console.log("Colors: " + COLORS_ARRAY)
  function runGame() {
    let guess = " ";
    let correct = false;
    let numTries = 0;
    const targetIndex = generateRandomIndex()
    console.log("Target Index: " + targetIndex);
    const target = COLORS_ARRAY[targetIndex]
    console.log("Target: " + target);
    do {
      guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.join(", ") + '\n\nWhat color am I thinking of?\n')
      guess = guess.toLowerCase();
      console.log(guess);
      if(guess === null) {
        console.log(guess);
        return;
      }
      numTries += 1
      correct = checkGuess(guess, target);
    }
    while(!correct);
    console.log("Correct: " + correct);
    document.body.style.background = guess;
    alert('Congrats! ' + guess + ' is correct! Number of tries: ' + numTries + '.')
  }
  
  function checkGuess(guess,target) {
    let correct = false;
    if(!COLORS_ARRAY.includes(guess)) {
      alert("Guess is not included in the array")
    }
    else if (guess < target) {
      alert("guessed color is out of range, too low")
    }
    else if (guess > target) {
      alert("guessed color is out of range, too high")
    }
    else {
      correct = true
    }
    return correct;
  }
  
  function generateRandomIndex() {
    let index = Math.floor(Math.random() * COLORS_ARRAY.length);
    console.log("Index: " + index);
    return index;
  }