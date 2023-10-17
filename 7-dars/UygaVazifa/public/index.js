fetch("http:localhost:3000").then(data=>data.json()).then(data=>{
    data.forEach(Film=>{
      
       document.getElementById("Card").innerHTML += "FilmName: " + Film.name + "<br><br>";
       document.getElementById("item").innerHTML += "FilmCountry: " + Film.country + "<br><br>";
       document.getElementById("auth").innerHTML += "FilmAuthor: " + Film.author + "<br><br>";
       document.getElementById("year").innerHTML += "FilmYear: " + Film.year + "<br><br>";
       console.log(Film)
    })
})