const knex = require("../db/knex.js");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')

module.exports = {
  login: function(req, res) {
    knex('users')
   .where('user_name', req.body.user_name)
   .then(user => {
     if(user.length < 1) {
       res.sendStatus(403)
     } else {
       if(bcrypt.compareSync(req.body.password, user[0].password)) {
         let token = jwt.sign({
           user: user[0]
         }, 'the super secret code');
         res.json({
           user: user[0],
           token
         })
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
            password: hash
          }, '*')
          .then(newUser => res.send('successful'))

      }
    })
    .catch(err => res.sendStatus(500))
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
      name: req.body.name
    })
    .then(data =>
    res.json(data))
  },

  file_search: function(req, res) {
    knex('case_files')
    .where('File_Number', req.body.case_number)
    .then(data =>
    res.json(data))
  },


  name_search: function(req, res) {
    knex('case_files')
    .where('First_Name', req.body.name)
    .then(name =>
      res.json(name))
  },

  location_search: function(req, res) {
    knex('case_files')
    .where('City', req.body.location)
    .then(location =>
      res.json(location))
  },

}
