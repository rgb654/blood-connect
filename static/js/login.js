
function storeEmail(){
    var email = document.getElementById('email').value;
    console.log(email);
    sessionStorage.setItem('email', email);
}

