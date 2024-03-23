
const others_check = document.getElementById("others_check");
const others_text = document.getElementById("others_text");


others_check.addEventListener("change", function() {
    if (others_check.checked){
        others_text.style.visibility = "visible";
    }
    else{
        others_text.style.visibility = "hidden";
    }
})

const next_button = document.getElementById("next_button");
const container1 = document.getElementById("container1");
const prev_button = document.getElementById("prev_button");

next_button.addEventListener("click", function(){
    container1.style.zIndex = -1;
})

prev_button.addEventListener("click", function(){
    container1.style.zIndex = 1;
})

