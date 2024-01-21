$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val();
        const itemNovo = $(`<li>${nomeTarefa}</li>`);

        $(itemNovo).appendTo('ul');
        $('#nome-tarefa').val('');
    })
    $('#lista').on('click', 'li', function(){
        $(this).toggleClass('riscado');
    });
})