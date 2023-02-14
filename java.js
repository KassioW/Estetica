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

function selecionarPagina(span) {
  // Remove a classe "selecionado" de todas as spans
  let spans = document.querySelectorAll(".inicio, .precos, .agendar, .servicos");
  for (let i = 0; i < spans.length; i++) {
    spans[i].classList.remove("selecionado");
  }

  // Adiciona a classe "selecionado" à span clicada
  span.classList.add("selecionado");
}

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

function selecionarPagina(elemento) {
  // remove a classe "active" de todos os elementos de botão
  document.querySelectorAll(".inicio, .precos, .agendar, .servicos").forEach(function(botao) {
    botao.classList.remove("active");
  });
  
  // adiciona a classe "active" ao botão selecionado
  elemento.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function() {
  // obter todos os spans
  var spans = document.querySelectorAll(".inicio, .precos, .agendar, .servicos");

  // encontrar o span mais visível na janela do navegador
  var mostVisibleSpan;
  var smallestDistanceToTop = Infinity;
  for (var i = 0; i < spans.length; i++) {
    var distanceToTop = Math.abs(spans[i].getBoundingClientRect().top);
    if (distanceToTop < smallestDistanceToTop) {
      mostVisibleSpan = spans[i];
      smallestDistanceToTop = distanceToTop;
    }
  }

  // adicionar a classe "active" ao span mais visível
  mostVisibleSpan.classList.add("active");
});

