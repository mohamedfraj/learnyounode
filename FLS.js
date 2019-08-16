var fs=require('fs');
var path=require("path");

var dir=process.argv[2];
var ext=process.argv[3];

 fs.readdir(dir, function callback(err,data){
    if(err){return err}
    
    var l = data.length

    for (var i = 0 ; i < l ; i++){
        var x=data[i]
        var e = path.extname(x)
        if (e == "."+ext){
            console.log(x)
        }
    }
})