let likeBtn = document.getElementById("like");
let number = document.getElementById("number");
let count = 0;

likeBtn.addEventListener("click", ()=> {
    count += 1;
    number.innerHTML = count;
})