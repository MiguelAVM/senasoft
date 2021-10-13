//llamado de las librerias
const express = require('express');
const path = require('path');
const session = require('express-session');
const morgan = require('morgan');
const app  = express();

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,"public")))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'vista'))
//sesiones


app.use(express.urlencoded({extended:true}))
app.use(require('./routes/rutas'))
app.use=(err,req,res,next)=>{
    res.send({err:err.message})
}

//servidor
app.set('port',process.env.PORT || 3000)

app.listen(app.get("port"),()=>{
    // console.log(`en el servidor ${app.get("port")}`);
    console.log(`En el servidor ${app.get("port")}`)
});