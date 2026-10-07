function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
var slideIndex = 0;

function showSlide() {
    var slides = document.querySelectorAll(".portfolio-slide");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

function changeSlide(direction) {
    var slides = document.querySelectorAll(".portfolio-slide");

    slideIndex = (slideIndex + direction + slides.length) % slides.length;

    showSlide();
}

showSlide();