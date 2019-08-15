//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js")
const googleApi = require("../controllers/googleApi.js")
module.exports = function(app){

  app.get('/', template.index);
  app.get('/google', googleApi.index);

}
