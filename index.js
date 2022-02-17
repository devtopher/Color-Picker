const schemeEl= document.getElementById("color-scheme")
const colorEl = document.getElementById("color-picker")
let chosenScheme = schemeEl.value
let chosenColor = colorEl.value
const hexOne = document.getElementById("hex-one")
const hexTwo = document.getElementById("hex-two")
const hexThree = document.getElementById("hex-three")
const hexFour = document.getElementById("hex-four")
const hexFive = document.getElementById("hex-five")
const hexElementArray = [hexOne, hexTwo, hexThree, hexFour, hexFive]
const colorOne = document.getElementById("color-one")
const colorTwo = document.getElementById("color-two")
const colorThree = document.getElementById("color-three")
const colorFour = document.getElementById("color-four")
const colorFive = document.getElementById("color-five")
const colorElementArray = [colorOne, colorTwo, colorThree, colorFour, colorFive]
let colorsFromApiArr = []
let clickableElements = hexElementArray.concat(colorElementArray)

function copyToClipboard(){}


for (let i = 0; i<hexElementArray.length; i++){
    hexElementArray[i].addEventListener("click",()=> console.log(hexElementArray[i].textContent) )
}
for (let i = 0; i<colorElementArray.length; i++){
    console.log(colorElementArray[i].style.backgroundColor)
}

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
         for(let i=0; i<hexElementArray.length; i++){
             hexElementArray[i].textContent = colorsFromApiArr[i]
             colorElementArray[i].style.background = colorsFromApiArr[i] 
         }
    }) 
})

