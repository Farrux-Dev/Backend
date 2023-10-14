const http = require("http")
const PORT = process.env.PORT || 3000
const {v4} = require("uuid")


const kino = [
    {
        id:v4(),
        "title":"Qasos",
        "Year":"2002"
    },
    {
        id:v4(),
        tit:"UZB",
        yer:2008,
    
    }
]
const server =http.createServer((req, res)=>{
    if(req.url=="/music" && req.method=="GET"){
        res.writeHead(200, {"Content-type":"application/json"})
        res.end(JSON.stringify(kino))
    }

})
server.listen(PORT)