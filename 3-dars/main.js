............





















// const os = require("os")
                    
// console.log(os.freemem())


// console.log(os.totalmem())
const slugify = require("slugify")
const path  = require("path")
const fs = require("fs")
fs.writeFile(path.join(__dirname, "uy ishi", "text.txt"), "sALOM mENING iSMIM fARRUX", err=>{
    if(err) throw console.log(err)
    else{
fs.readFile(path.join(__dirname, 'uy ishi', "text.txt"), "utf-8", (err, data)=>{
    if(err) throw err
    else{
        const arr =  data.split('')
        const arr2 = []
        arr.forEach(harf=>{
         if(harf==harf.toUpperCase()){
            arr2.push(harf.toLocaleLowerCase())
         }else{
            arr2.push(harf.toUpperCase())
         }
        })
       text = arr2.toString();
    }
   fs.writeFile(path.join(__dirname, "uy ishi", "text2.txt"), slugify( text," ", {remove:/[-,,]/g} ) ,err=>{
    if(err) throw new Error
    else{
        console.log("Bu uyga vazia bitdi InshaAllah");
    }
   })
})
}
})

//  