var count = 0

var countHeader = document.getElementById("count")
const buttonAdd = document.getElementById("add")
var buttonCut = document.getElementById("cut")

countHeader.innerText = count

buttonAdd.addEventListener("click", () => {
    count++
    countHeader.innerText = count
    console.log(count)
})

buttonCut.addEventListener("click", () =>{
    count--
    countHeader.innerText = count
})