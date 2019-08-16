var fs = require('fs')

fs.readFile(process.argv[2], function callabck(err, data) {
    if (err) { return err }
    var l = data.toString().split('\n').length - 1;

    console.log(l)
})
