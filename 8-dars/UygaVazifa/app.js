const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const path = require("path")
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "Desitnations.html"))
})
app.get('/hotels', (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "Hotels.html"))
})
app.get('/flights', (req,res)=>{
    res.sendFile(path.join(__dirname, "public", "Flights.html"))
})
app.get('/bookings', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', "Bookings.html"))
})
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "login.html"))
})
app.get('/sign', (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "SignUP.html"))
})
app.listen(PORT)