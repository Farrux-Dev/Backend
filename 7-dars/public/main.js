fetch('http:localhost:3000').then(data => data.json()).then(data => {
    data.forEach(element => {
        console.log(element);
    });
})