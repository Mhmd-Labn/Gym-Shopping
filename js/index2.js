var productImg = document.querySelectorAll('.get-target');
var allproducts = document.querySelectorAll('ul li')
var content = document.querySelector('.contentt')
var btn22 = document.querySelector('.btn22')
var tootal1 = document.querySelector('.tootal1')
var tootalprice = 0



productImg.forEach(function (item) {
    item.onclick = function () {

        var target = this.dataset.target
        document.getElementById(target).classList.remove("d-none")

    }
})

allproducts.forEach(function (item2) {
    item2.onclick = function () {
        tootalprice += +(item2.getAttribute("price"))
        content.innerHTML += item2.textContent + "//"

        if (content.innerHTML != "") {
            btn22.style.display = "block";
        }
    }
})

btn22.onclick = function () {
    tootal1.innerHTML = tootalprice
}

