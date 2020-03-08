// konami code (up up down down left right left right b a)
var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
// variable to track user's progress
var position = 0;
document.addEventListener('keydown', function(e) {
  var key = e.keyCode;
  var correctKey = konamiCode[position];
  if (key == correctKey) {
    position++;
    if (position == konamiCode.length) {
      success();
      position = 0;
    }
  } else {
    position = 0;
  }
});

function success() {
  alert('Congratulations');
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}