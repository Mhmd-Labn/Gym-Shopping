
//localStorage.setItem("frist car" ,"BMW")

//console.log(localStorage.getItem("frist car"))

//localStorage.setItem("student1" ,"mohamed")

//localStorage.removeItem("student1")

//localStorage.setItem("student2" ,"ali")

//localStorage.setItem("student3" ,"mena")

//localStorage.clear()

/////////////////////////////////








let user_info = document.querySelector("#user_info")
let userData = document.querySelector("#user")

let linksul = document.querySelector("#links")

if (localStorage.getItem("username")) {
    linksul.remove()
    user_info.style.display = "flex";
    userData.innerHTML = localStorage.getItem("username")

}

let logoutbtn = document.querySelector("#logout")
logoutbtn.addEventListener("click", function () {
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";

    }, 1500)
})

//////////////////////////////////
let allproduct = document.querySelector(".products")
let products = [{
    id: 1,
    title: "CHEST PRESS MACHINE",
    About: "CHEST PRESS MACHINE / M50I NEW CASH OR INSTALLMENT",
    color: "Color : darkolivegreen black",
    imageurl: "image/1.jpg"
},
{
    id: 2,
    title: "SEATED DIP MACHINE",
    About: "SEATED DIP MACHINE of compact executive GYM",
    color: "Color : darkslategrey",
    imageurl: "image/2.jpg"
},
{
    id: 3,
    title: "BENCH PRESS",
    About: "BENCH PRESS has embodied a combination of incomparable",
    color: "Color : yellow",
    imageurl: "image/3.jpg"
},
{
    id: 4,
    title: "PREACHER CURL",
    About: "PREACHER CURL / M50I NEW CASH OR INSTALLMENT",
    color: "Color : darkolivebrown",
    imageurl: "image/4.jpg"
},
{
    id: 5,
    title: "BENCH PRESS",
    About: "THE BBENCH PRESS GRAN COUPE", About: "BMW X6 M 2023 A/T / M50I NEW CASH OR INSTALLMENT",
    color: "Color : black",
    imageurl: "image/5.jpg"
},
{
    id: 6,
    title: "ADJUSTABLE BENCH",
    About: "ADJUSTABLE BENCH is a line of compact executive cars",
    color: "Color : darkslategrey",
    imageurl: "image/6.jpg"
},
{

    id: 7,
    title: "ARM CURL Gran",
    About: "ARM CURL SERIES GRAN COUPE",
    color: "Color : black",
    imageurl: "image/7.jpg"
},
{
    id: 8,
    title: "CABLE ROW MACHINE ",
    About: "CABLE ROW MACHINE has embodied a combination of incomparable",
    color: "Color : yellow",
    imageurl: "image/8.jpg"
},
]
function drawItem() {
    let y = products.map((item) => {
        return `
        <div class="product_item">
        <img class="product_item img" src="${item.imageurl}">
          <div class="product-item_dosc">
            <h2>${item.title}</h2>
            <p>${item.About}</p>
            <span>${item.color}</span>
          </div>
          <div class="product-item_action">
        <button class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
        <i class="far fa-heart fav"></i>
          </div>
        </div>
        `
    })
    allproduct.innerHTML = y;
}
drawItem()

let cartproductDiv = document.querySelector(".carts_products div")
let badge = document.querySelector(".badge")

//let addedItem = [];
let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

if (addedItem) {
    addedItem.map(item => {
        cartproductDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
}

if (localStorage.getItem = ("username")) {
    function addToCart(id) {
        let choosenItem = products.find((item) => item.id === id);
        cartproductDiv.innerHTML += `<p>${choosenItem.title}</p>`

        addedItem = [...addedItem, choosenItem]
        localStorage.setItem("productsInCart", JSON.stringify(addedItem))


        let cartproductLenght = document.querySelectorAll(".carts_products div p")
        //console.log(cartproductLenght.length)
        badge.style.display = "block";
        badge.innerHTML = cartproductLenght.length;

    }
} else {
    window.location = "Login.html"
}




///////////////////////////////
let shoppingcartIcon = document.querySelector(".shopping_cart")
let cartsproducts = document.querySelector(".carts_products")
shoppingcartIcon.addEventListener("click", opencart)

function opencart() {
    if (cartproductDiv.innerHTML != "") {
        if (cartsproducts.style.display == "block") {
            cartsproducts.style.display = "none"
        } else {
            cartsproducts.style.display = "block"
        }
    }
}
////////////////////////////////
/* <p>BMW X6 M 2023 A/T / M50I NEW CASH OR INSTALLMENT</p> */