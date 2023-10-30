let pr1Like = document.getElementById("proj-1-like")
let pr2Like = document.getElementById("proj-2-like")

pr1Like.addEventListener("click", function() {
    let likeCount = document.getElementById("like-count-1")
    if (pr1Like.src.substr(pr1Like.src.lastIndexOf('/')) == "/heart-1.png") {
        pr1Like.src = "/resources/heart-2.png"
        likeCount.textContent += 1
    } else {
        pr1Like.src = "/resources/heart-1.png"
        likeCount.textContent -= 1
    }
})

pr2Like.addEventListener("click", function() {
    let likeCount = document.getElementById("like-count-2")
    if (pr2Like.src.substr(pr2Like.src.lastIndexOf('/')) == "/heart-1.png") {
        pr2Like.src = "/resources/heart-2.png"
        likeCount.textContent += 1
    } else {
        pr2Like.src = "/resources/heart-1.png"
        likeCount.textContent -= 1
    }
})