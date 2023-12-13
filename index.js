
function nextInfo(n){
    renderInfo(slideIndex += n)
}

function renderInfo(index){
    let aboutEl = document.getElementsByClassName("resume-info")
    if (index > aboutEl.length) {
        slideIndex = 1;
    }
    else if (index < 1) {
        slideIndex = aboutEl.length
    } 
    for (let i = 0; i < aboutEl.length; ++i) {
        aboutEl[i].style.display = "none"
    }
    aboutEl[slideIndex - 1].style.display = "block"
}

let slideIndex = 1
renderInfo(slideIndex)
let prevEl = document.getElementById("prev")
let nextEl = document.getElementById("next")

prevEl.addEventListener("click", function () {nextInfo(-1)})

nextEl.addEventListener("click", function () {nextInfo(+1)})