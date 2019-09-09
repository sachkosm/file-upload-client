var fs = require('fs');
var request = require('request'); //https://github.com/request/request#custom-http-headers
request.post({
    url: 'http://localhost:3002/upload',
    formData: {
        //multiple files as an array - this is expected in the server middle tier
        files: [fs.createReadStream('./src/test-upload-files/form_data.md'), fs.createReadStream('./src/test-upload-files/excel_limit.png')],
        firstName: 'Daniel',
        lastName: 'Bethoven',


    }
}, function (error, response, body) {
    console.log(body);
});
