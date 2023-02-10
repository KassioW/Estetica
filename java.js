document.querySelector(".inicio").addEventListener("click", inicioFunction);
document.querySelector(".precos").addEventListener("click", precoFunction);
document.querySelector(".agendar").addEventListener("click", agendarFunction);
document.querySelector(".servicos").addEventListener("click", servicoFunction);

function inicioFunction(){
  window.location.href = "inicio.html";
}

function precoFunction(){
  window.location.href = "preço.html";
}

function agendarFunction(){
  window.location.href = "agendar.html";
}

function servicoFunction(){
  window.location.href = "serviços.html";
}