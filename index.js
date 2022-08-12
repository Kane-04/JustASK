window.addEventListener("scroll", ()=>{
    var nav = document.querySelector("nav");
    console.log(nav.classList);
    nav.classList.toggle("sticky", window.scrollY > 0)
})

// Carousel
let imageIndex = 1;
showImage(imageIndex);

function moveImage(currentImageIndex) {
    showImage(imageIndex += currentImageIndex);
}

function currentImage(currentImageIndex) {
    showImage(imageIndex = currentImageIndex);
}

function showImage(currentImageIndex) {
    let i;
    let images = document.querySelectorAll(".carousel__image");
    let dots = document.querySelectorAll(".carousel__dot");

    if (currentImageIndex > images.length) {
        imageIndex = 1
    }    

    if (currentImageIndex < 1) {
        imageIndex = images.length
    }

    for (i = 0; i < images.length; ++i) {
      images[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; ++i) {
      dots[i].className = dots[i].className.replace(" carousel__dot--active", "");
    }

    images[imageIndex - 1].style.display = "flex";  
    dots[imageIndex - 1].className += " carousel__dot--active";
}