// Open the modal
function openModal() {
    console.log("modal open");
    document.getElementById("myModal").style.display = "block";
}

// Close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    console.log("Current Slide is "+n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    // slides numbers wrap
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Clear "active" designator from all thumbnails
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // show the correct slide
    slides[slideIndex - 1].style.display = "block";

    // mark the correct thumbnail as active
    dots[slideIndex - 1].className += " active";
    

    // Set the correct caption text
    captionText.innerHTML = dots[slideIndex - 1].alt;
}