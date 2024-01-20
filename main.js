const form = document.getElementById('form-validador');
const campoA = document.getElementById('A');
const campoB = document.getElementById('B');
const menssagem = document.querySelector('.message');
let formEValido = false;

function validar(a,b) {
    return b > a;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    formEValido = validar(campoA.value, campoB.value)
    if (formEValido){
        menssagem.innerHTML = 'Sucesso: valor do Campo B é maior que o valor do Campo A';
        menssagem.classList.remove('erro');
        menssagem.classList.add('sucesso');
        campoA.value = '';
        campoB.value = '';
    }
    else {
        menssagem.innerHTML = 'Erro: valor do Campo B precisa ser maior que o valor do Campo A';
        menssagem.classList.remove('sucesso');
        menssagem.classList.add('erro');
    }
})