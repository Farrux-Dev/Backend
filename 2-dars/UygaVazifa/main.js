const http = require('http')
const path = require('path')
const fs = require('fs')
const  slugify  = require('slugify')



http.createServer(function(req, res){
   fs.readFile(path.join(__dirname, "test", "index.html"), "utf-8", (err, data)=>{
    if(err) throw console.log(err)
    res.writeHead(200, {"Content-type": "text/html"})
    res.write(slugify(data, { lower: /[a,z]/g, replacement:" "}))
    
     return res.end
   })
}).listen(4988)


// fs.mkdir(path.join(__dirname , "test"), err=>{
//     if(err) throw console.log(err)
//     console.log("Well Done")
//    })

