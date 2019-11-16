var greeting = "kokot"
console.log(greeting)

var search = document.querySelector("#product-search")
console.log(search)


var searchInput = document.querySelector("#search-input")
var products = document.querySelector(".products-section li")
function eventHandeler (event){
    console.log("formSubmition")
    event.preventDefault()
    console.log(searchInput.value)
    Array.from(products).forEach(product => {
        console.log(product.firstChild.textContent)
        console.log("Hi")
    })
}
search.addEventListener("submit", eventHandeler)
