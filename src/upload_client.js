var fs = require('fs');
var request = require('request'); //https://github.com/request/request#custom-http-headers



var r = request.post('http://localhost:3002/upload',
  function optionalCallback(err, httpResponse, body) {
    if (err) {
      return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
  })
var form = r.form()
//single file only under the same form-field name
form.append('files', fs.createReadStream('./src/test-upload-files/httpRequest.md'))
