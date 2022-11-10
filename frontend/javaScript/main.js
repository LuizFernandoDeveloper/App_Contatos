const form = document.getElementById('form_contatos');
let linhas = ' <h1>Contatos Salvos</h1>';
form.addEventListener('submit', function(e){

    e.preventDefault();

    const personsName = document.getElementById('personsName');
    const phoneNumber = document.getElementById('phoneNumber');

    const corpoLista = document.querySelector('article');

    

    let linha  = '<div class="contato">';
    linha += '<div class="img-contatos">';
    linha += ' <img src="./imagens/icons/Logo-Barra-Contatos3.svg" alt="logo contatos salvos">';
    linha += '</div>';
    linha += `<h2>Nome do contato:<span>${personsName.value}</span></h2>`;
    linha += `<h2>Numero do Contato:<span>${phoneNumber.value}</span></h2>`;
    linha += '</div>';

    linhas += linha;

    corpoLista.innerHTML = linhas ;

    personsName.value = '';
    phoneNumber.value = '';

});

