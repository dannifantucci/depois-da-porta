const botaoEntrar = document.querySelector(' .botao-entrar');

botaoEntrar.addEventListener('click', function() {

    document.querySelector('#textos').scrollIntoView({
         behavior: 'smooth'
         });
});