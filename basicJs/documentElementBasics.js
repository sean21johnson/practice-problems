// Will return the first p result found in the document
const singlePara = document.querySelector('p')

// Will return all instances of p in the document
const allParas = document.querySelectorAll('p')
// Can loop over the above to add an event listener to each
for (let p of allParas) {
  p.addEventListener('click', function() {
    console.log('I be a paragarph')
  }
)};

// Create an element p
document.createElement('p');

// Add text content
singlePara.textContent('I am the best paragraph');

// Remember that you can also uses the querySelector to select class names
<p class="topPara"></p>
const topPara = document.querySelector('.topPara');

<button id="button_A">Press me</button>
// You can also use querySelector to select ids
const button = document.querySelector('#button_A')

// Add style to the paragraph
topPara.style.backgroundColor = 'green';

// This is a number input followed by a submit button
<div>
  <label for="guessField">Enter a guess: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" class="guessSubmit" value="Submit guess" />
</div>
// Get the value of the number entered by the user
const guess = document.querySelector('guessField').value;

// Focus the input field
document.querySelector('guessField').focus();
