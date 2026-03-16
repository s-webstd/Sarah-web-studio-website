// MOBILE MENU

function toggleMenu(){
const menu = document.getElementById("nav-menu");
menu.classList.toggle("active");
}


// GALLERY SYSTEM

document.addEventListener("DOMContentLoaded", function(){

const gallery = document.getElementById("gallery");
const galleryImg = document.getElementById("gallery-img");
const closeBtn = document.querySelector(".close-gallery");
const prevBtn = document.querySelector(".gallery-prev");
const nextBtn = document.querySelector(".gallery-next");

let images = [];
let index = 0;


// OPEN GALLERY

document.querySelectorAll(".btn-gallery").forEach(button => {

button.addEventListener("click", function(){

images = this.dataset.images.split(",");
index = 0;

gallery.style.display = "flex";
galleryImg.src = images[index];

});

});


// CLOSE BUTTON

closeBtn.onclick = function(){
gallery.style.display = "none";
};


// CLICK OUTSIDE IMAGE TO CLOSE

gallery.addEventListener("click", function(e){
if(e.target === gallery){
gallery.style.display = "none";
}
});


// NEXT IMAGE

nextBtn.onclick = function(){

index++;

if(index >= images.length){
index = 0;
}

galleryImg.src = images[index];

};


// PREVIOUS IMAGE

prevBtn.onclick = function(){

index--;

if(index < 0){
index = images.length - 1;
}

galleryImg.src = images[index];

};


// KEYBOARD CONTROLS

document.addEventListener("keydown", function(e){

if(gallery.style.display === "flex"){

if(e.key === "ArrowRight"){
nextBtn.click();
}

if(e.key === "ArrowLeft"){
prevBtn.click();
}

if(e.key === "Escape"){
gallery.style.display = "none";
}

}

});

});