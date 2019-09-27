const express = require('express')
const router = express.Router()
//const path = require('path')
const { Usuario } = require('../app/models')

router.get('/',  (req, res) => {
  Usuario.findAll().then((usuario) => {
    res.json(usuario)
  }).catch((err) => {
    console.log(err)
  })
  
}); //Listar todos

router.post('/', (req, res) => {
  Usuario.create({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha
  }).then((usuario) => {
    console.log(usuario)
    res.redirect('/usuarios')
  }).catch((err) => {
    console.log(err)
  })
  
}); // Criar

router.get('/:email', (req, res) => {
  Usuario.findOne({
    where: {
      email: req.body.email
    }
  }).then((usuario) => {
    res.json(usuario)
  }).then((err) => {
    console.log(err)
  })
  
}); //Buscar

router.put('/:email', (req, res) => {
  Usuario.update({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha
  }, {
    where: {
      email: req.params.email
    }
  }).then((usuario) => {
    res.json(usuario)
  }).catch((err) => {
    console.log(err)
  })
}); //Editar

router.delete('/:email', (req, res) => {
  Usuario.destroy({
    where: {
      email: req.params.email
    }
  }).then((usuario) => {
    console.log('usuario excluído', usuario)
  }).catch((err) => {
    console.log(err)
  })
}); //Deletar

module.exports = router