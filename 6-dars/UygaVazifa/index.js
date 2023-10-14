const http = require("http")
const {v4} = require("uuid")
const PORT = process.env.PORT || 3000
const getBodyData = require("./mdware")
const obje = [
    {
        id:v4(),
        name:"Farrux",
        year:2007,
        lastname:"G'aniboyev"
    },
    {
        id:v4(),
        name:"Sardor",
        year:2007,
        lastname:"Ergashovv"
    },
    {
        id:v4(),
        name:"Akmal",
        year:2007,
        lastname:"Mirixtioyor"
    },
    {
        id:v4(),
        name:"Egamberdi",
        year:2007,
        lastname:"Asomov"
    }

]

const server = http.createServer( async(req, res)=>{
    if (req.url === '/' && req.method === 'GET') {
        res.setHeader('Access-Control-Allow-Origin', "*")
        res.writeHead(200, { 'Content-type': "application/json" })
        res.end(JSON.stringify(obje))
    }
    //  if(req.url==="/music" && req.method==="GET"){
    //     res.setHeader('Access-Control-Allow-Origin', "*")
    //       res.writeHead(200, {"Content-type":"application/json"})
    //       res.end(JSON.stringify(obje))
    //  }
    //  else if(req.url==="/music" && req.method==='POST'){
    //     res.writeHead(200, {"Content-type":"application/json"})
    //   const data = await  getBodyData(req)
    //   const {name, year, lastname} = JSON.parse(data)
    //   const newMusic={
    //     id:v4(),
    //     name,
    //     year,               
    //     lastname
    //   }
    //   obje.push(newMusic)
    //   res.end(JSON.stringify(obje))
    //  }
  
})
server.listen(PORT, ()=> {
    console.log(`${PORT}`);
})