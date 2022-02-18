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
let toastContainer = document.getElementById("toast-container")

//Setting initial column colors here so that click to copy works from the start, 
//since element.style doesn't reference the stylesheet.

colorOne.style.background = '#02302D'
colorTwo.style.background = "#04615A"
colorThree.style.background = "#059388"
colorFour.style.background = "#06C5B7"
colorFive.style.background = "#06F8E6"


//regex taken from https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value
const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`

//shows "copied to clipboard" modal for 2 seconds
function showModal(){
    console.log("modal shown")
    toastContainer.classList.add("revealed")
    setTimeout(()=>toastContainer.classList.remove("revealed"), 2000)
}

//click to copy for the paragraphs under the columns
for (let i = 0; i<hexElementArray.length; i++){
    hexElementArray[i].addEventListener("click",()=> {
    navigator.clipboard.writeText(hexElementArray[i].textContent)
    showModal()
} )
}

//click to copy for the colored columns
for (let i = 0; i<colorElementArray.length; i++){
    colorElementArray[i].addEventListener("click",()=>{
    let valueToBeCopied = rgba2hex(colorElementArray[i].style.background)
    navigator.clipboard.writeText(valueToBeCopied)
    showModal()
})
}

//get data from the api on button click and update DOM
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

