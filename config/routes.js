//Update the name of the controller below and rename the file.
const jwt = require('jsonwebtoken')
const template = require("../controllers/template.js")
const cors = require('cors')
module.exports = function(app){

  app.use(cors())

  app.get('/field_reports', template.field_reports);

  app.get('/vox_dispatch', template.vox_dispatch);

  app.post('/file_search', template.file_search)

  app.post('/name_search', template.name_search)

  app.post('/location_search', template.location_search)

}
