// Variáveis



function regexEmail(email){
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}