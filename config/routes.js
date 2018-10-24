//Update the name of the controller below and rename the file.
const jwt = require('jsonwebtoken')
const template = require("../controllers/template.js")
const cors = require('cors')
module.exports = function(app){

  app.use(cors())

  app.get('/users', template.users);

  app.get('/field_reports', template.field_reports);

  app.get('/vox_dispatch', template.vox_dispatch);

  app.put('/vox_dispatch', template.update_vox_dispatch);

  app.delete('/vox_dispatch/:id', template.delete_vox_dispatch)

  app.post('/vox_dispatch', template.add_vox_dispatch);

  app.post('/file_search', template.file_search)

  app.post('/name_search', template.name_search)

  app.post('/location_search', template.location_search)

  app.post('/login', template.login)

  app.post('/register', template.register)

  app.post('/add_case_file', template.case_file)

  app.delete('/delete_case_file', template.delete_file)

}
