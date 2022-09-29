let clrBtn = document.getElementById("colorBtn")
const mnElem = document.getElementById("mainElem")
const txtBtn = document.getElementById("textBtn")
const imgBtn = document.getElementById("imageBtn")

clrBtn.addEventListener("click",()=>{
    let red = Math.random()*255
    let green = Math.random()*255
    let blue = Math.random()*255
    console.log(red)
    mnElem.style.backgroundColor = "rgb("+ red +","+ green +","+ blue +")"
})

const addSomeText = ()=>{
    let htmlElem = document.createElement("h3")
    let someText = "This is a string of text!"
    htmlElem.innerText = someText
    mnElem.appendChild(htmlElem)
}

txtBtn.addEventListener("click",addSomeText)

const addAnImage = ()=>{
    let imgElem = document.createElement("img")
    imgElem.src = "../img/SNice.svg"
    imgElem.alt = "smiley face"
    mnElem.appendChild(imgElem)
}

imgBtn.addEventListener("click",addAnImage)