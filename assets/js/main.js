// Variáveis
const elemento = document.querySelector('.mail');

elemento.addEventListener('onblur', regexEmail);




function regexEmail(email){
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}