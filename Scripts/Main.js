home = document.getElementById("home")
homeShown = true
about = document.getElementById("about")
aboutShown = true
projects = document.getElementById("projects")
projectsShown = true
articles = document.getElementById("articles")
articlesShown = true

window.onscroll = function() {
    if (checkVisible(home)) {
        if (homeShown == false) {
            homeShown = true
            home.style.animation = "fadeToSolid 1s"
        }
    } else {
        homeShown = false
        home.style.animation = "none"
    }
    if (checkVisible(about)) {
        if (aboutShown == false) {
            aboutShown = true
            about.style.animation = "fadeToSolid 1s"
        }
    } else {
        aboutShown = false
        about.style.animation = "none"
    }
    if (checkVisible(projects)) {
        if (projectsShown == false) {
            projectsShown = true
            projects.style.animation = "fadeToSolid 1s"
        }
    } else {
        projectsShown = false
        projects.style.animation = "none"
    }
    if (checkVisible(articles)) {
        if (articlesShown == false) {
            articlesShown = true
            articles.style.animation = "fadeToSolid 1s"
        }
    } else {
        articlesShown = false
        articles.style.animation = "none"
    }
};


function checkVisible(element) {
    var rect = element.getBoundingClientRect()
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
}