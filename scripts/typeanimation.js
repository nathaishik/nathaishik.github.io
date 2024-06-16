export default function typeAnimation(text, textArray, prev, next) {
  const timer = ms => new Promise(res => setTimeout(res, ms));
  var i = 0;

  typewriter(textArray, text, i); // calling the function

  // controls the buttons for navigating through the links
  function textNav() {
    const length  = parseInt(textArray.length) - 1;
    switch (i) {
      case 0:
        prev.disabled = true;
        break;
      case length:
        next.disabled = true;
        break;
      default:
        prev.disabled = false;
        next.disabled = false;
    }
    
  };

  var clicks = setTimeout(textNav(), 100); // just a var to hold the click condition

  // controls the next button
  next.onclick = () => {
    i++;
    textNav();
    typewriter(textArray, text, i);
  };

  // controls the prev button
  prev.onclick = () => {
    i--;
    textNav();
    typewriter(textArray, text, i);
  };

  // the actual animation function
  async function typewriter(textArray, location, index) {
    const inDelay = 50;
    const outDelay = 20;
    // clearing the already written text
    for (let k = location.textContent.length; k > 0; k--) {
      if (index !== i) {
        return;
      };
      // replaces the text string with a substring that excludes the last char
      location.textContent = location.textContent.substr(0, k - 1); 
      await timer(outDelay) // an artificial delay to make it appear like writting
    };
    // inserting new text
    for (let j = 0, n = textArray[i].length; j < n; j++) {
      if (index !== i) {
        return;
      };
      location.textContent += textArray[index][j];
      await timer(inDelay);
    };
  };
}
