scroll = 0
window.onload = () => {
    for (item of document.getElementsByClassName("pulse")) {
        if (checkVisible(item)) {
            item.style.animation = "pulse 1s 1"
            setTimeout(() => {
                item.style = "padding-top: 20vh !important;"
            }, 1001)
        } else {
            item.style.animation = "none"
        }
    }
}

window.onscroll = function() {
    for (item of document.getElementsByClassName("down")) {
        if (checkVisible(item)) {
            item.style.animation = "down 1s 1"
        } else {
            item.style.animation = "none"
        }
    }

    for (rightItem of document.getElementsByClassName("slide-right")) {
        if (checkVisible(rightItem)) {
            rightItem.style.animation = "slide-right 2s 1"
            setTimeout(() => {
                rightItem.style = "margin-left: 0% !important;"
            }, 2001)
        } else {
            rightItem.style.animation = "none"
        }
    }

    for (leftItem of document.getElementsByClassName("slide-left")) {
        if (checkVisible(leftItem)) {
            leftItem.style.animation = "slide-left 2s 1"
            setTimeout(() => {
                leftItem.style = "margin-left: 0% !important;"
            }, 2001)
        } else {
            leftItem.style.animation = "none"
        }
    }
};
  
function checkVisible(element) {
    var rect = element.getBoundingClientRect()
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
}