const username = "umu"
const password = "161204"

function auth (){
    let userInput = document.getElementById('username').value
    let passwordInput = document.getElementById('password').value
    let form = document.getElementById('form')

    if(userInput == username && passwordInput == password){
        alert("Login Beerhasil!")
        form.submit()
    } else {
        alert("Login Gagal!")
    }
}