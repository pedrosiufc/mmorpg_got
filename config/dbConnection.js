//importar o mongodb
var mongo = require('mongodb');

var connMongoDB = function(){
  console.log('entrou na conexão com o banco!')
  var db = new mongo.Db(
   //nome de banco
    'got', 
   // objeto de conexão com o servidor
    new mongo.ServerClosedEvent( //para minha versão
       'localhost', //endereço do banco de dados 
       27017, //porta de conexão
       {} //configurações opcinais
    ), 
      {} //configurações opcionais
  );
  return db; //para utilizar dentros dos models
}



module.exports = function(){
  return connMongoDB;
  
}
