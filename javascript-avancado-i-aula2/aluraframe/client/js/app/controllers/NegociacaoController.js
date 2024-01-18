class NegociacaoController
{

  constructor()
  {
    let $ = document.querySelector.bind(document); // o metodo bind, faz com o que o document seja colocado de lado, para o $ "substituir" ele, e essa linha, torne possivel;
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
  }

  adiciona(event)
  {
    event.preventDefault();

    let data = new Date (this._inputData.value.split('-'));
    console.log(data);
    // adicionar a negociacao em uma lista hehe

  }



}