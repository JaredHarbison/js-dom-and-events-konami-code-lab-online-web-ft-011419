const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init() {
  const body = document.querySelector('body');

  body.addEventListener('keydown', function(event) {
    const key = parseInt(event.detail || event.which);

    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}