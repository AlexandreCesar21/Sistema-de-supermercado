console.log("Testanto")

let num = document.querySelector("#fnum")
let resu = document.querySelector("#resu")
let totalDiv = document.getElementById("totalValue")
let valores = []




function adicionar() {
    let numericValue = parseFloat(num.value.replace(/[^\d.,]/g, "").replace(',', '.'));
    if (!isNaN(numericValue)) {
        valores.push(numericValue);
        let item = document.createElement('option');
        item.text = `R$ ${numericValue.toFixed(2)} foi adicionado`; 
        resu.appendChild(item);

        num.value = '';
        num.focus();
    }
}




function formatapreco() {
    let preco = num.value.replace(/[^\d.,]/g, ""); 
    let numericValue = parseFloat(preco.replace(',', '.')); 
    if (!isNaN(numericValue)) {
        num.value = `R$ ${numericValue.toFixed(2)}`; 
    }

}

function calcularTotal() {
    let total2 = 0;
    for (let i = 0; i < valores.length; i++) {
        total2 += valores[i];
    }
    totalDiv.textContent = `R$ ${total2.toFixed(2)}`;
}

function calcularTroco() {
    let totalValue = parseFloat(totalDiv.textContent.replace(/[^\d.,]/g, "").replace(',', '.'));
    let receivedValue = parseFloat(document.getElementById("rece").value);
    let trocoValue = receivedValue - totalValue;
    
    let trocoDiv = document.getElementById("trocado1");
    trocoDiv.textContent = `R$ ${trocoValue.toFixed(2)}`;
}

