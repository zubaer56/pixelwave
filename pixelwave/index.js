
var typed = new Typed('#typeit1', {
  strings: ["PixelWave Spectra"],
  typeSpeed: 50,
});
var typed = new Typed('#typeit2', {
  strings: ["Unleashing Digital Brilliance"],
  typeSpeed: 50,
  startDelay: 2000
});



const button = document.getElementById("button"); 
const buttonPressed = (e) => {
  e.target.classList.toggle("active");
}
button.addEventListener("click", buttonPressed);