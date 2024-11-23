const UsuariosDAO = require("../models/UsuariosDAO");

module.exports.cadastro = function(application, req, res){
  res.render('cadastro', {validacao: {}, dadosForm: {}});
}

module.exports.cadastrar = function(application, req, res){
  
  var dadosForm = req.body;
  
  req.assert('nome', 'Nome não pode ser vazio').notEmpty();
  req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
  req.assert('senha', 'Senha não pode ser vazio').notEmpty();
  req.assert('casa', 'Casa não pode ser vazio').notEmpty();

  var erros = req.validationErrors();

  if(erros){
    res.render('cadastro', {validacao: erros, dadosForm: dadosForm});
    return;
  }

  //abrindo a conexão com o banco navengando até o módulo
  var connection = application.config.dbConnection;
  //O Controller
  //Recebe a instanciação de usuário
  //passando a conexão para o dao
  var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

  //execução da inserção
  UsuariosDAO.inserirUsuario(dadosForm);

  res.send('podemos cadastrar');

}
