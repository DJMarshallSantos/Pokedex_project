let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("pokemon-card");
  console.log(slides.length)
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = "block";
  }
}

function displayImg() {
  let show = document.getElementById("display-img");
  show.innerHTML = "";
  const imgUrl = document.getElementById("url").value;
  let img = document.createElement("img");
  img.src = imgUrl;
  show.appendChild(img);
}

const closeMessage = document.querySelector("#close");
const message = document.querySelector("#message");

if (closeMessage) {
  closeMessage.addEventListener("click", function () {
    message.style.display = "none";
  });
}


setTimeout(() => {
  if (message) {
    message.style.display = "none"
  }
}, 5000);

function remove(el) {
  const element = el;
  element.remove();
}

function displayImg() {
  const show = document.getElementById("display-img");
  const imgUrl = document.getElementById("url").value;
  let img = document.createElement("img");
  img.src = imgUrl;
  show.appendChild(img);
}
console.log("loaded")


