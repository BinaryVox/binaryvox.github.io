for (image of document.getElementsByClassName("slideshow-image")) {
    image.addEventListener("click", (event) => {
        primaryImage = document.getElementsByClassName("slideshow-image-primary")[0].src
        console.log(event.target.src)
        console.log(document.getElementsByClassName("slideshow-image-primary")[0].src)
        document.getElementsByClassName("slideshow-image-primary")[0].src = event.target.src
        event.target.src = primaryImage
    })
}

function rotatePictures(direction) {
    images = []
    for (image of document.getElementsByClassName("slideshow-image")) { 
        images.push(image.src)
    }
    if (direction == "next") {
        images.push(images.shift());
    } else {
        images.unshift(images.pop());
    }
    i = 0
    for (image of document.getElementsByClassName("slideshow-image")) { 
        image.src = images[i]
        i++
    }
}

document.getElementById("slideshow-back").addEventListener("click", () => {
    rotatePictures("back")
})

document.getElementById("slideshow-next").addEventListener("click", () => {
    rotatePictures("next")
})