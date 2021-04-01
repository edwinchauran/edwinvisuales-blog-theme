//HIGHLIGHTS
let highlights = document.getElementsByClassName('highlight');
let info = document.getElementsByClassName('info');
//change highlight info color to yellow when mouseover
for(let i = 0;  highlights.length > i; i++){

    highlights[i].addEventListener('mouseover',function() {
        info[i].style.color = "black";
        info[i].style.backgroundColor = "rgba(251, 255, 0, 0.75)";  
    })
    highlights[i].addEventListener('mouseleave', function() {
        info[i].style.color = "white";
        info[i].style.backgroundColor =   "rgba(0, 0, 0, 75%)"; 
    })
}
//document.querySelector(".navbar-toggler").addEventListener("click", function(e){ document.querySelector("#navbarSupportedContent").classList.toggle("show"); });
