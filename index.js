let schemeEl= document.getElementById("color-scheme")
let colorEl = document.getElementById("color-picker")
let chosenScheme = schemeEl.value
let chosenColor = colorEl.value
let hexOne = document.getElementById("hex-one")
let hexTwo = document.getElementById("hex-two")
let hexThree = document.getElementById("hex-three")
let hexFour = document.getElementById("hex-four")
let hexFive = document.getElementById("hex-five")
let hexArr = [hexOne, hexTwo, hexThree, hexFour, hexFive]
let colorOne = document.getElementById("color-one")
let colorTwo = document.getElementById("color-two")
let colorThree = document.getElementById("color-three")
let colorFour = document.getElementById("color-four")
let colorFive = document.getElementById("color-five")
let colorElementArray = [colorOne, colorTwo, colorThree, colorFour, colorFive]
let colorsFromApiArr = []

document.getElementById("btn").addEventListener("click", function(e) {
    e.preventDefault()
    chosenColor = colorEl.value.substring(1)
    chosenScheme = schemeEl.value
    fetch(`https://www.thecolorapi.com/scheme?format=json&hex=${chosenColor}&mode=${chosenScheme}`)
    .then(res => res.json())
    .then(data => {
         colorsFromApiArr = []
         for(let i=0; i<data.colors.length;i++){
             colorsFromApiArr.push(data.colors[i].hex.value)
         }
         for(let i=0; i<hexArr.length; i++){
             hexArr[i].textContent = colorsFromApiArr[i]
             colorElementArray[i].style.background = colorsFromApiArr[i] 
         }
    }) 
})