
let a = parseInt(document.getElementById("valor1").value)
let b = parseInt(document.getElementById("valor2").value)

function somar() {
    let a = parseInt(document.getElementById("valor1").value)
    let b = parseInt(document.getElementById("valor2").value)
    let c = document.getElementById("resposta")

    c.innerHTML = a+b
}

function subtrair() {
    let a = parseInt(document.getElementById("valor1").value)
    let b = parseInt(document.getElementById("valor2").value)
    let c = document.getElementById("resposta")

    c.innerHTML = a-b
}

function multiplicar() {
    let a = parseInt(document.getElementById("valor1").value)
    let b = parseInt(document.getElementById("valor2").value)
    let c = document.getElementById("resposta")

    c.innerHTML = a*b
}

function dividir() {
    let a = parseInt(document.getElementById("valor1").value)
    let b = parseInt(document.getElementById("valor2").value)
    let c = document.getElementById("resposta")

    c.innerHTML = a/b
}

