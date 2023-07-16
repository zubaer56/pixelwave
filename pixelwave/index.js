const button = document.getElementById("button"); 
const buttonPressed = (e) => {
  e.target.classList.toggle("active");
}
button.addEventListener("click", buttonPressed);