let lastClickedButtonId = null;

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.button');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      if (lastClickedButtonId !== null) {
        document.getElementById(lastClickedButtonId).style.backgroundColor = '';
      }

      this.style.backgroundColor = 'rgb(67, 224, 252)';
      lastClickedButtonId = this.id;
    });
  });
});