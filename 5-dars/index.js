const http = require('http');
const fs = require('fs');
const path = require('path')
const  PORT = process.env.PORT || 3000

// http.createServer((req, res)=>{
//     res.writeHead(200, {"Content-type": "text/html"})
//     if(req.url==="/"){
//         fs.readFile(path.join(__dirname, "public", "index.html"),"utf-8", (err, data)=>{
//             if(err) throw err
//             else {
//                 res.end(data)
//             }
//         })
//     }
//     else if(req.url==="/about"){
//         fs.readFile(path.join(__dirname, "public", "about.html"),"utf-8", (err, data)=>{
//             if(err) throw err
//             else {
//                 res.end(data)
//             }
//         })
//     }
//     else if(req.url==="/blog"){
//         fs.readFile(path.join(__dirname, "public", "blog.html"),"utf-8", (err, data)=>{
//             if(err) throw err
//             else {
//                 res.end(data)
//             }
//         })
//     }
// }).listen(PORT, ()=>{
//     console.log(`${PORT} da server ochildi`);
// })
//NMA GAP

http.createServer((req, res)=>{
    res.writeHead(200, {"Content-type":"text/html"})
    if(req.url==="/"){
        fs.readFile(path.join(__dirname, 'public', "home.html"),"utf-8",( err, data)=>{
           if(err) throw  err
           else{
            res.end(data)
           }
        })
    }
    if(req.url==="/about"){
        fs.readFile(path.join(__dirname, 'public', "about.html"),"utf-8",( err, data)=>{
            if(err) throw  err
            else{
             res.end(data)
            }
         })
    }
    if(req.url==="/blog"){
        fs.readFile(path.join(__dirname, 'public', "blog.html"),"utf-8",( err, data)=>{
            if(err) throw  err
            else{
             res.end(data)
            }
         })
    }
}).listen(PORT)
