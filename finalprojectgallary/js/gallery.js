function upDate(previewPic) {
    console.log("upDate triggered");
    console.log("alt: " + previewPic.alt);
    console.log("src: " + previewPic.src);

    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.textContent = previewPic.alt;
}

function unDo() {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
}

function addTabIndex() {
    console.log("addTabIndex triggered - page loaded");
    var figures = document.querySelectorAll("figure");
    for (var i = 0; i < figures.length; i++) {
        figures[i].setAttribute("tabindex", "0");
    }
}
