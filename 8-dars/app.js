const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const path = require("path")
app.use(express.static(path.join(__dirname, "Publcik")))

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "publcik", "index.html"))
})
app.get("/help",(req, res)=>{
    res.sendFile(path.join(__dirname, "publcik", "help.html"))
})

app.listen(PORT)