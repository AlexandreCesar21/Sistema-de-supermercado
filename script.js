console.log("Testanto")

let num = document.querySelector("#fnum")
let resu = document.querySelector("#resu")
let valores = []

function isNumero(n){
    return Number(n) >= 0 && Number(n) <= 100;
}

function inLista(n, l) {
    return l.indexOf(Number(n)) !== -1;
}

function adicionar() {   
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = num.value + " foi adicionado"
    resu.appendChild(item)
    
    num.value = ''
    num.focus()
}

function formatapreco() {
    let input = document.getElementById("fnum")
    let preco = input.value.replace(/\D/g, "")
    preco = (preco / 100).toFixed(2)
    input.value = `R$ ${preco}`
    
}





function total1() {

}
