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

  file_search: function(req, res) {
    knex('case_files')
    .where('file_id', req.body.case_number)
    .then(data =>
    res.json(data))
  },


  name_search: function(req, res) {
    knex('case_files')
    .where('content', req.body.name)
    .then(name =>
      res.json(name))
  },

  location_search: function(req, res) {
    knex('case_files')
    .where('content', req.body.location)
    .then(location =>
      res.json(location))
  },

}
