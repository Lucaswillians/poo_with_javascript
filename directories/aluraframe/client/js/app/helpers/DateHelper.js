class DateHelper 
{
  static textoParaData (texto)
  {
     return new Date (...texto.split('-').map((item, index) => {

        if (index === 1) return item - 1; // o spread ..., tornou esse linha possivel, pois, foi ele que tornou com o date, fosse passado como parametros na execucação de dia, mes e ano, (params D = 0, M = 1, A = 2)
        
        return item;
    })) 
  }
 
  // utilizando o static, não preciso criar uma instancia do objeto para pode chamar esse meu metodo criado abaixo
  // o static, faz com que o metodo seja chamado dentro da propria classe, e não do objeto
  // com isso, posso chamar ele direto, sem fazer a instancia.
  static dataParaTexto (data)
  {
    return data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear(); 
  }
}