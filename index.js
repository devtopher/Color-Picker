

let schemeEl= document.getElementById("color-scheme")
let colorEl = document.getElementById("color-picker")
let chosenScheme = schemeEl.value
let chosenColor = colorEl.value
chosenColor = chosenColor.substring(1)

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
let colorElArr = [colorOne, colorTwo, colorThree, colorFour, colorFive]

let colorsFromApiArr = []






function createUrl(){
    let url = new URL("https://www.thecolorapi.com/scheme?format=json")
    let params = new URLSearchParams(url.search)
    chosenColor = colorEl.value
    chosenScheme = schemeEl.value
    params.append("hex",chosenColor)
    params.append("mode",chosenScheme)
    params.append("count",5)
    //console.log(params.toString())
    url.search = params.toString()
    //console.log(url.toString())
    return url
}


document.getElementById("btn").addEventListener("click", function(e) {
    e.preventDefault()
    let url = createUrl()
    //console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        for(let i=0; i<data.colors.length;i++){
            
            colorsFromApiArr.push(data.colors[i].hex.value)
        }
        for(let i=0; i<hexArr.length; i++){
            hexArr[i].textContent = colorsFromApiArr[i]
            colorElArr[i].style.background = colorsFromApiArr[i] 
        }
    }) 
})

// let url = `https://www.thecolorapi.com/id?hex=${chosenColor}&mode=${chosenScheme}&count=5`
// colorEl.addEventListener("input",()=>{
//     chosenColor = colorEl.value
//     console.log(chosenColor)
// })
// schemeEl.addEventListener("input",()=>{
//     chosenScheme = schemeEl.value
//     console.log(chosenScheme)
// })
