
//Recebendo a conexão
function UsuariosDAO(connection){
  //faz parte do contexto da função o _ por convenção
  this._connection = connection();

}

//função interna recebendo dados do formulário
UsuariosDAO.prototype.inserirUsuario = function(usuario){
  this._connection.open(function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){
        collection.insert(usuario);

        mongoclient.close();
     });

  });
}

module.exports = function(){ //para carregar a função no consigne
  return UsuariosDAO;
}