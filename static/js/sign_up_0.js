
function viewPassword(){
    var x = document.querySelectorAll(".password");
    for(let i = 0; i<x.length; i++){
        if (x[i].type === "password") {
          x[i].type = "text";
        } else {
          x[i].type = "password";
        }
    }
}

