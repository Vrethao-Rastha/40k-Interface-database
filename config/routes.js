//Update the name of the controller below and rename the file.
const jwt = require('jsonwebtoken')
const template = require("../controllers/template.js")
const cors = require('cors')
module.exports = function(app){

  app.use(cors())

  app.get('/users', template.users);

  app.delete('/users', template.delete_users)

  app.get('/field_reports', template.field_reports);

  app.get('/vox_dispatch', template.vox_dispatch);

  app.put('/vox_dispatch/:id', template.update_vox_dispatch);

  app.delete('/vox_dispatch/:id', template.delete_vox_dispatch)

  app.post('/vox_dispatch', template.add_vox_dispatch);

  app.post('/file_search', template.file_search)

  app.post('/name_search', template.name_search)

  app.post('/location_search', template.location_search)

  app.post('/login', template.login)

  app.post('/register', template.register)

  app.post('/add_case_file', template.case_file)

  app.put('/update_case_file/:id', template.update_case_file)

  app.delete('/delete_case_file/:id', template.delete_file)

  app.post('/add_info_file', template.add_info)

  app.get('/information_search/', template.all_info)

  app.post('/information_search/', template.information_search)

  app.put('/update_info_file/:id', template.update_info_file)

  app.delete('/information_search/:id', template.delete_information)

  app.post('/glossary_search', template.glossary_search)

}
