
// const mongoose = require("mongoose")

// //connection url for mongodb
// const URI = "mongodb+srv://shelbygall:Rustyboy461!@cluster0.whpdwvg.mongodb.net/portfolio?retryWrites=true&w=majority"

// //uses mongoose to connect to our database 
// //.connect() is async and therefore returns a promise
// //once promise is fullfilled it returns a result which we do not need
// mongoose.connect(URI)
// .then((result) => console.log("connected to DB"))
// .catch((err) => console.log(err))

let pr1Like = document.getElementById("proj-1-like")
let pr2Like = document.getElementById("proj-2-like")

let pr1Comm = document.getElementById("proj-1-comm")
let pr2Comm = document.getElementById("proj-2-comm")



pr1Like.addEventListener("click", function() {
    let likeCount = document.getElementById("like-count-1")
    if (pr1Like.src.substr(pr1Like.src.lastIndexOf('/')) == "/heart-1.png") {
        pr1Like.src = "/resources/heart-2.png"
        likeCount.textContent = 1
    } else {
        pr1Like.src = "/resources/heart-1.png"
        likeCount.textContent = 0
    }
})

pr2Like.addEventListener("click", function() {
    let likeCount = document.getElementById("like-count-2")
    if (pr2Like.src.substr(pr2Like.src.lastIndexOf('/')) == "/heart-1.png") {
        pr2Like.src = "/resources/heart-2.png"
        likeCount.textContent = 1
    } else {
        pr2Like.src = "/resources/heart-1.png"
        likeCount.textContent = 0
    }
})

pr1Comm.addEventListener("click", function(){
    if (document.getElementById("proj-1-descr").style.display == "block")
        document.getElementById("proj-1-descr").style.display = "none"
    else
        document.getElementById("proj-1-descr").style.display = "block"
})

pr2Comm.addEventListener("click", function(){
    if (document.getElementById("proj-2-descr").style.display == "block")
        document.getElementById("proj-2-descr").style.display = "none"
    else
        document.getElementById("proj-2-descr").style.display = "block"
})

