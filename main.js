const form = document.getElementById('form-validador');
const campoA = document.getElementById('A');
const campoB = document.getElementById('B');
const menssagem = document.querySelector('.message');
let formEValido = false;

//Crie uma validação no JavaScript, na qual o formulário será válido caso o número B seja maior que o número A.

function validar(a,b) {
    return b > a;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    formEValido = validar(campoA.value, campoB.value)
    if (formEValido){
        menssagem.innerHTML = 'Sucesso: Campo B é maior que A';
        menssagem.style.backgroundColor = 'green';
        menssagem.style.color = 'white';
    }
    else {
        menssagem.innerHTML = 'Erro: Campo B não é maior que A';
        menssagem.style.backgroundColor = 'red';
        menssagem.style.color = 'white';
    }
})