const express = require('express');
const app = express();
const path = require('path')
const router = require('./routers/myrouter')
const ejs = require('ejs')

let PORT = 3003;




app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, '/frontend/public')))
app.use(router)

app.set('views', path.join(__dirname, '../frontend/views'));
app.set('view engine', "ejs");
//app.set('views', path.join(__dirname, 'views'));





app.listen(PORT , () =>{
        console.log(`Server running  is PORT ${PORT}`);
})