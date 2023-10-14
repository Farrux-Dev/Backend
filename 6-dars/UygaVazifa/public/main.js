fetch("http:localhost:3000").then(data=>data.json()).then(data=>{


    data.forEach(val=>{
    document.write(val.name, val.lastname, val.year)
    
    })
})

// fetch("url").then(data=>data.json()).then(data=>{})