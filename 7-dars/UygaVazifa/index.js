const http = require("http")
const PORT = process.env.PORT || 3000
const {v4} = require("uuid")
const getBodyData = require("./mdware")
const Film = [
    {
        id:v4(),
        name:"Qasoskor",
        author:"Marvel",
        year:2008,
        country:"Amerika"
    }
]

const server = http.createServer(async(req, res)=>{
    if(req.url==="/" && req.method==="GET"){
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.writeHead(200, {"Content-type":"application/json charset-utf8"})
        res.end(JSON.stringify(Film))
    }
    else if(req.url==="/film" && req.method==="POST"){
     const data = await  getBodyData(req)
     const {name, year, author, country} = JSON.parse(data)
     const newFilm = {
        id:v4(),
        name,
        author,
        year,
        country
     }
     Film.push(newFilm)
     res.writeHead(200, {"Content-type":"application/json charset-utf8"})
     res.end(JSON.stringify(Film))
    }
    else if(req.url.match(/\/film\/\w+/)&& req.method==="GET"){
        const id = (req.url.split('/')[2])
        const IDFIlter = Film.find(m=>m.id==id)
        res.writeHead(200, {"Content-type":"application/json charset-utf-8"})
        res.end(JSON.stringify(IDFIlter))
    }
    else if(req.url.match(/\/film\/\w+/)&& req.method==="PUT"){
        const id = (req.url.split('/')[2])
        const data = await getBodyData(req)
        const {name, year, author, country} = JSON.parse(data)
        const index = Film.findIndex(film=>film.id===id)
        Film[index]= {id: Film[index].id, name, year, author, country}
        res.writeHead(200, {"Content-type":"application/json charset-utf8"})
        res.end(JSON.stringify(Film))
    }
    else if(req.url.match(/\/film\/\w+/)&& req.method==="DELETE"){
        const id = (req.url.split('/')[2])
        const FIlter = Film.findIndex(film => film.id===id)
        if(FIlter !== -1){
            Film.splice(FIlter,1)
        }
        res.writeHead(200, {"Content-type":"application/json charset-utf-8"})
        res.end(JSON.stringify(FIlter))
    }
})
server.listen(PORT)