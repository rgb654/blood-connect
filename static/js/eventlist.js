
document.addEventListener('DOMContentLoaded', function() {
    var email = sessionStorage.getItem('email');
    document.getElementById('login').value = email;
  });


function toggleButtons(){
    var reg = document.getElementById('register');
    var canc = document.getElementById('cancel');
    var z1 = window.getComputedStyle(reg, null).getPropertyValue("z-index");
    var z2 = window.getComputedStyle(canc, null).getPropertyValue("z-index");
    var text = document.getElementById('reg');
    var textval = text.value;
    text.value = textval^1;
    reg.style.zIndex = z2;
    canc.style.zIndex = z1;

}