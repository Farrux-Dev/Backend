const http = require("http")
const PORT = process.env.PORT || 3000
const {v4} = require("uuid")
const getBodyData = require("./mdware")
const Film = [
    {
    id:v4(),
    title:"Qasoskor",
    author:"Marvel",
    year:2008
}
]

const server = http.createServer( async(req, res)=>{
if(req.url==="/" && req.method==="GET"){
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.writeHead(200, {"Content-type":"application/json charset-utf8"})
    res.end(JSON.stringify(Film))
}
else if(req.url==="/film" && req.method==="POST"){
    const data = await getBodyData(req)
    const {title, author, year} = JSON.parse(data)
    const newFilm = {
        id:v4(),
        title, 
        author,
        year
    }
    Film.push(newFilm)
    res.writeHead(200, {"Content-type":"application/json charset-utf8"})
    res.end(JSON.stringify(Film))
}
else if(req.url.match(/\/film\/\w+/)&& req.method==="GET"){
    const id = (req.url.split('/')[2])
    const Films = Film.find(m=>m.id==id)
    res.writeHead(200, {"Content-type":"application/json charset-utf8"})
    res.end(JSON.stringify(Films))
}
else if(req.url.match(/\/film\/\w+/)&& req.method==="PUT"){
    const id = (req.url.split('/')[2])
    const data = await getBodyData(req)
    const {title, author, year} = JSON.parse(data)
    const index = Film.findIndex(film =>film.id===id)
    Film[index] = {id: Film[index].id, title, author, year}
    res.writeHead(200, {"Content-type":"application/json charset-utf8"})
    res.end(JSON.stringify(Film))
}
else if(req.url.match(/\/film\/\w+/)&& req.method==="DELETE"){
    const id = (req.url.split('/')[2])
	const Filter = Film.findIndex(fil => fil.id === id);
    if(Filter !== -1){
        Film.splice(Filter, 1)  
    }

    res.writeHead(200, {"Content-type":"application/json charset-utf8"})
    res.end(JSON.stringify(Filter))
}
})

server.listen(PORT, ()=>{
console.log("Server ishladi")
})