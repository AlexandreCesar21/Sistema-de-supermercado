console.log("Testanto")

let num = document.querySelector("#fnum")
let resu = document.querySelector("#resu")
let totalDiv = document.getElementById("totalValue")
let valores = []

function isNumero(n){
    return Number(n) >= 0 && Number(n) <= 100;
}

function inLista(n, l) {
    return l.indexOf(Number(n)) !== -1;
}
/*
function adicionar() {   
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = num.value + " foi adicionado"
    resu.appendChild(item)
    
    num.value = ''
    num.focus()
}*/
function adicionar() {
    let numericValue = parseFloat(num.value.replace(/[^\d.,]/g, "").replace(',', '.'));
    if (!isNaN(numericValue)) {
        valores.push(numericValue);
        let item = document.createElement('option');
        item.text = `R$ ${numericValue.toFixed(2)} foi adicionado`; // Include "R$" prefix here
        resu.appendChild(item);

        num.value = '';
        num.focus();
    }
}

/*
function formatapreco() {
    let input = document.getElementById("fnum")
    let preco = input.value.replace(/\D/g, "")
    preco = (preco / 100).toFixed(2)
    input.value = `R$ ${preco}`
    
}*/


function formatapreco() {
    let preco = num.value.replace(/[^\d.,]/g, ""); // Remove all non-numeric characters except dots and commas
    let numericValue = parseFloat(preco.replace(',', '.')); // Replace commas with dots and convert to a float
    if (!isNaN(numericValue)) {
        num.value = `R$ ${numericValue.toFixed(2)}`; // Add "R$" and display the formatted price
    }

}

function calcularTotal() {
    let total2 = 0;
    for (let i = 0; i < valores.length; i++) {
        total2 += valores[i];
    }
    totalDiv.textContent = `R$ ${total2.toFixed(2)}`;
}



