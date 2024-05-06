var express = require('express');
var app = express();

app.get("/suma", (req, res) => {
let a = Number(req.query.a);
let b = Number(req.query.b);
let resu = a+   b;
if(isNaN(a) || isNaN(b)){
    res.json("uno de los 2 valores no es un numero")
}else{
res.json(resu);
}
})

app.get("/resta", (req, res) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let resu = a-b;
    if(isNaN(a) || isNaN(b)){
        res.json("uno de los 2 valores no es un numero")
    }else{
    res.json(resu);
    }
    })

app.get("/multiplicacion", (req, res) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let resu = a*b;
    if(isNaN(a) || isNaN(b)){
        res.json("uno de los 2 valores no es un numero")
    }else{
    res.json(resu);
    }
    })

app.get("/division", (req, res) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let resu = a/b;
    if(isNaN(a) || isNaN(b)){
        res.json("uno de los 2 valores no es un numero")
    }else{
    res.json(resu);
    }
    })

app.listen(3000, ()=>{
    console.log("hola")
})