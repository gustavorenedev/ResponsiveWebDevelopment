const weigthInput = document.querySelector("#weigth")
const heigthInput = document.querySelector("#heigth")
const calculateButton = document.querySelector("#calculate")
const messageElement = document.querySelector("#message")

let weigth
let heigth

weigthInput.addEventListener("change", (event) => {
   weigth = event.target.value
})

heigthInput.addEventListener("change", (event) => {
    heigth = event.target.value
 })

 calculateButton.addEventListener("click", (event) => {
    // .preventDefault() = trava a execução padrão
    event.preventDefault()

    const imc = weigth/(heigth*heigth)

    if(imc < 18.5){
        // .textContent = concatena a frase com a div
        messageElement.textContent = "Abaixo do peso ideal"
    }else if (imc >= 18.5 && imc <= 24.9){
        messageElement.textContent = "Peso ideal"
    }else if (imc >= 25 && imc <= 29.9){
        messageElement.textContent = "Sobrepeso"
    }else if (imc >= 30 && imc <= 34.9){
        messageElement.textContent = "Obesidade I"
    }else if (imc >= 35 && imc <= 39.9){
        messageElement.textContent = "Obesidade II"
    }else if (imc >= 40){
        messageElement.textContent = "Obesidade III"
    }
 })