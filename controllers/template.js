const knex = require("../db/knex.js");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')

module.exports = {
  login: function(req, res) {
    req.session.user = [];
    knex('users')
   .where('user_name', req.body.user_name)
   .then(user => {
     if(user.length < 1) {
       res.sendStatus(403)
     } else {
      req.session.user.push(user[0])
      req.session.save()
       if(bcrypt.compareSync(req.body.password, user[0].password)) {
         let token = jwt.sign({
           user: user[0]
         }, 'the super secret code');
         
         res.json({
           user: user[0],
           token
         })
       }else {
         res.sendStatus(403)
       }
     }
   })
},

register: function(req, res) {
  knex('users')
    .where('user_name', req.body.user_name)
    .then(user => {
      if(user.length > 0) {
        res.sendStatus(403)
      } else {
        let hash = bcrypt.hashSync(req.body.password)
        knex('users')
          .insert({
            user_name: req.body.user_name,
            password: hash,
            rank: req.body.rank,
            isAdmin: req.body.isAdmin
          }, '*')
          .then(newUser => res.send('successful'))

      }
    })
    .catch(err => res.sendStatus(500))
},

  users: function(req, res){
    knex('users')
    .then(data =>
    res.json(data))
  },

  delete_users: function(req, res) {
    knex('users').where('id', req.body.id)
    .del()
    .then(data =>
    res.json(req.body.id))
  },

  field_reports: function(req, res) {
    knex('field_reports')
    .then(data =>
      res.json(data))
  },

  vox_dispatch: function(req, res) {
    knex('vox_dispatch')
    .then(data=>
    res.json(data))
  },

  update_vox_dispatch: function(req, res) {
    knex('vox_dispatch').where('id', req.body.id)
    .update({
      content: req.body.content,
    })
    .then(data =>
    res.json(data[0]))
  },

  add_vox_dispatch: function(req, res) {
    knex('vox_dispatch')
    .insert({
      content: req.body.content,
      senderName: req.body.addSenderName,
      caseNumber: req.body.addCaseNumber,
      avatar: req.body.avatar
    }, '*')
    .then(data =>
    res.json(data[0]))
  },

  delete_vox_dispatch: function(req, res) {
    knex('vox_dispatch').where('id', req.params.id)
    .del()
    .then(data =>
    res.json(req.params.id))
  },

  delete_file: function(req, res) {
    knex('case_files').where('id', req.params.id)
    .del()
    .then(data =>
    res.json(req.params.id))
  },

  update_case_file: function(req, res) {
    knex('case_files').where('id', req.params.id)
    .update({
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      Address: req.body.Address,
      Hive: req.body.Hive,
      Hive_Stack: req.body.Hive_stack,
      Bio: req.body.Bio,
      file_number: req.body.file_number
    })
    .then(data =>
    res.json('successful'))
  },

  file_search: function(req, res) {
    knex('case_files')
    .where('file_number', req.body.case_number)
    .then(data =>
    res.json(data))
  },


  name_search: function(req, res) {
    knex('case_files')
    .where('First_Name', req.body.first_name).orWhere('Last_Name', req.body.last_name).orWhere('First_Name', req.body.last_name).orWhere('Last_Name', req.body.first_name)
    .then(data =>
      res.json(data))
  },

  location_search: function(req, res) {
    knex('case_files')
    .where('City', req.body.location)
    .then(location =>
      res.json(location))
  },

  case_file: function(req, res){
    knex('case_files')
    .insert({
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      Address: req.body.Address,
      Hive: req.body.Hive,
      Bio: req.body.Bio,
      file_number: req.body.file_number
    })
    .then(data =>
    res.json(data))
  },

  add_info: function(req, res){
    knex('glossary')
    .insert({
      Title: req.body.Title,
      Content: req.body.Content,
      file_number: req.body.file_number
    })
    .then(data =>
    res.json(data))
  },

  information_search: function(req, res) {
    var searchText = req.body.Title.replace(/\b[a-z]/g,function(f){return f.toUpperCase()})
    var queryBuilder = knex.select('*').from('glossary').rightJoin('case_files', 'glossary.id', 'case_files.id')
  
    queryBuilder.where('Title', 'like', `%${searchText}%`)
    .orWhere('Content', 'like', `%${searchText}%`)
    .orWhere('First_Name', 'like', `%${searchText}%`)
    .orWhere('Last_Name', 'like', `%${searchText}%`)
    .orWhere('Address', 'like', `%${searchText}%`)
    .orWhere('Bio', 'like', `%${searchText}%`)
    .orWhere('Hive', 'like', `%${searchText}%`)
    .orWhere('Hive_Stack', 'like', `%${searchText}%`)
      .then( query => 
        res.json(query))  
    
  },

  delete_information: function(req, res) {
    knex('glossary').where('id', req.params.id)
    .del()
    .then(data =>
    res.json(req.params.id))
  },

  update_info_file: function(req, res) {
    knex('glossary').where('id', req.params.id)
    .update({
      Title: req.body.Title,
      Content: req.body.Content,
      file_number: req.body.file_number
    })
    .then(data =>
    res.json('successful'))
  },

  all_information_search: function(req, res) {
    knex('glossary')
    .then(data => 
      res.json(data))
  },
}
