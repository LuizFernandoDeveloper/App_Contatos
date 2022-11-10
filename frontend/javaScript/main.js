const form = document.getElementById('form_contatos');
 alert("ssadawdaw")
form.addEventListener('submit', function(e){

    e.preventDefault();

    const personsName = getElementById('personsName');
    const phoneNumber = getElementById('phoneNumber');

    alert(`Nome da pessoa:${personsName}`);
    alert(`Numero da pessoa:${phoneNumber}`);

});