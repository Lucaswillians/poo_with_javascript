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

    let negociacao = new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );

    console.log(negociacao);
    console.log(DateHelper.dataParaTexto(negociacao.data));
  }
}