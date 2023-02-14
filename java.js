document.querySelector(".inicio").addEventListener("click", inicioFunction);
document.querySelector(".precos").addEventListener("click", precoFunction);
document.querySelector(".servicos").addEventListener("click", servicoFunction);
document.querySelector(".agendar").addEventListener("click", agendarFunction);
document.querySelector(".btnagendar").addEventListener("click", btnagendarFunction);
document.querySelector(".btnagendar1").addEventListener("click", btnagendarFunction);
document.querySelector(".btnagendar2").addEventListener("click", btnagendarFunction);
document.querySelector(".btnagendar3").addEventListener("click", btnagendarFunction);
document.querySelector(".btnagendar4").addEventListener("click", btnagendarFunction);
document.querySelector(".btnagendar5").addEventListener("click", btnagendarFunction);
document.querySelector(".btnconsulta").addEventListener("click", btnagendarFunction);
document.querySelector(".btnconsulta1").addEventListener("click", btnagendarFunction);


function inicioFunction(){
  window.location.href = "inicio.html";
}

function precoFunction(){
  window.location.href = "preço.html";
}

function agendarFunction(){
  window.location.href = "agendar.html";
}
function btnagendarFunction(){
  window.location.href = "agendar.html";
}

function servicoFunction(){
  window.location.href = "serviços.html";
}

// seleciona todos os botões
const botoes = document.querySelectorAll('span, a');

// adiciona um event listener para cada botão
botoes.forEach(botao => {
botao.addEventListener('mouseover', () => {
botao.style.backgroundColor = 'yellow';
});
botao.addEventListener('mouseout', () => {
botao.style.backgroundColor = '';
});
botao.addEventListener('click', () => {
botao.classList.add('animacao');
setTimeout(() => {
botao.classList.remove('animacao');
}, 1000);
});
});