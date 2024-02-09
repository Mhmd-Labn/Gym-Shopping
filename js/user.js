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