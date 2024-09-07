var imgList = Array.from(document.querySelectorAll(".item img"))
var boxModal = document.getElementById("boxModal")
var innerBox = document.getElementById("innerBox")
var prevElement = document.getElementById("prev")
var nextElement = document.getElementById("next")
var closeElement = document.getElementById("close")
var indexNumber = 0;

for(var i =0; i < imgList.length ; i++){
    imgList[i].addEventListener('click' , function(e){
        boxModal.style.display = "flex"
        var imgPath = e.target.getAttribute("src")
        innerBox.style.backgroundImage = "url("+imgPath+")"
        indexNumber = imgList.indexOf(e.target)
    })
}

closeElement.addEventListener('click' ,closeModal  )
function closeModal(){
    boxModal.style.display = "none"
}

nextElement.addEventListener('click', nextSlide)
function nextSlide(){
    indexNumber++
    if(indexNumber == imgList.length){
        indexNumber=0;
    }
    var imgPath = imgList[indexNumber].getAttribute("src")
    innerBox.style.backgroundImage = "url("+imgPath+")"
}

prevElement.addEventListener('click', prevSlide)
function prevSlide(){
    indexNumber--
    if(indexNumber == -1){
        indexNumber = imgList.length -1;
    }
    var imgPath = imgList[indexNumber].getAttribute("src")
    innerBox.style.backgroundImage = "url("+imgPath+")"
}

document.addEventListener('keyup' , function(e){
    if(e.code == "ArrowRight"){
        nextSlide()
    }else if(e.code == "ArrowLeft"){
        prevSlide()
    }else if(e.code == "Escape"){
        closeModal()
    }
})

boxModal.addEventListener('click', function(e){
    if(e.target.getAttribute("id") == "boxModal" ){
        closeModal()
    }
})