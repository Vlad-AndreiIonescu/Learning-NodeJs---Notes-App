const fs = require('fs')
// const book={
//     title:'aaaa',
//     author: 'Vlad PetrescuS'
// }

// const bookJson = JSON.stringify(book)//transforma obiectul in JSON
// fs.writeFileSync('1-json.json', bookJson)//cream un fisier in care stocam ce se afla in var bookJson

// const dataBuffer = fs.readFileSync("1-json.json")
// const dataJson = dataBuffer.toString()


const dataBuffer = fs.readFileSync("1-json.json")//citesc fisierul si stochez in buffer(biti)
const JsonData=dataBuffer.toString()//transform din buffer in JSON
const object = JSON.parse(JsonData)//TRANSFORM DIN JSON IN OB
object.age=98
object.name="Vladimir"
const string = JSON.stringify(object)//transforma obiectul in JSON
fs.writeFileSync("1-json.json",string)//scrie in fisierul respectiv




















