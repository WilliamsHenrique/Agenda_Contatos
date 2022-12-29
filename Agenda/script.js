const form = document.getElementById('contato')
const imgPhone = '<img src="./images/tel.png" alt="phone azul">'
const spanPhone = '<span class="tel-azul"></span>'

const Contatos = []
const numero = []

let tel = '';

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaContato()
    atualizaAgenda()

})

function adicionaContato(){
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

    if(Contatos.includes(inputNomeContato.value)){
        alert(`O Contato: ${inputNomeContato.value} já foi inserido`)
    } else{
        Contatos.push(inputNomeContato.value)
    numero.push(parseFloat(inputNumeroContato.value))

    let phone = `<tr>`;
    phone += `<td>${inputNomeContato.value}</td>`
    phone += `<td>${inputNumeroContato.value}</td>`
    phone += `<td>${inputNumeroContato.value = imgPhone}</td>`
    phone += `</tr>`

    tel += phone
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaAgenda(){
    const corpoAgenda = document.querySelector('tbody')
    corpoAgenda.innerHTML = tel
}