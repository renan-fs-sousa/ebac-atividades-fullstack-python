$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
    });

    $('#cpf').mask('000.000.000-00',{placeholder: "Insira seu CPF (apenas números)"});
    $('#telefone').mask('(00) 0000-00000',{placeholder: 'Insira seu telefone (apenas números)'});
    $('#cep').mask('00000-000',{placeholder: 'Insira seu CEP (apenas números)'});
})