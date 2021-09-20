var listaFilmes = [];

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  //var nomeFilme = document.getElementById("nomeFilme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listaFilmes.push("<img src = " + filmeFavorito + ">");
    listarFilmeNaTela(filmeFavorito);
  } else {
    console.error("Formato de filme inválido");
  }
  var filmeFavorito = (document.getElementById("filme").value = "");
  //var nomeFilme = (document.getElementById("nomeFilme").value = "");
}

function listarFilmeNaTela(filme) {
  var elementoListaFilmes = document.getElementById("listaFilmes");
  var impressaoListaFilmes = "";

  for (var i = 0; i < listaFilmes.length; i++) {
    impressaoListaFilmes = impressaoListaFilmes + listaFilmes[i];
  }
  console.log(impressaoListaFilmes);

  elementoListaFilmes.innerHTML = impressaoListaFilmes;
}

function removerFilme() {
  var nomeFilme = document.getElementById("nomeFilme").value;
  const index = listaFilmes.indexOf(nomeFilme);
  if (index > -1) {
    listaFilmes.splice(index, 1);
  }
}
