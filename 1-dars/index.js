  //   var http = require("http")

  // http.createServer(function(req, res){
  //   res.writeHead(200, {"Content-type": "text/html"});
  //   res.end("salom dunyo")
  // }).listen(4020)










  //http moduli bilan  File tizimini yaratdik


  // var http = require("http")
  // var fs = require("fs")
  //   http.createServer(function (req , res){
  //  fs.readFile("index.one.html", function(err , data){
  //   res.writeHead(200, {"Content-type": "text/html"});
  //   res.write(data)
  //   return res.end
  //  })
  //   }).listen(4988)



const fs = require("fs")
const path = require("path")

// fs.mkdir(path.join(__dirname, "okno"), err=>{
// if(err) throw console.log(err)

// console.log("Succesfully")
// })

// fs.writeFile(path.join(__dirname, "okno", "text.html"),"men Bugun Html Ga Yozdim", err=>{
//   if (err) throw console.log(err);

//   console.log("Succesfully Write file NodeJs")
// })

// fs.appendFile(path.join(__dirname, "okno", "text.html")," Va Unga AppendFile Qilib Yangilik kiritdim ", err=>{
//   if (err) throw console.log(err);
//   console.log("succesfully apeendFile") 
// })

// fs.readFile(path.join(__dirname, "okno", "text.html") ,"utf-8", (err, dat)=>{
//   if(err) throw new Error()
//   console.log(dat)
// })





   var http = require("http")
     http.createServer(function (req , res){
    fs.readFile("./okno/text.html", function(err , data){
     res.writeHead(200, {"Content-type": "text/html"});
     res.write(data)

     return res.end
    })
     }).listen(4988)


// --------------------------------
// os platform
// 

// --------------------------------

// os cpus
// console.log(os.cpus()) 