const express = require('express')
const hbs = require('hbs')
const path = require('path')
const bp = require('body-parser')
const f1 = require('./mongodb.js')

const app = new express();

const port = 5000

app.set('view engine','hbs')
app.set('views',path.join(__dirname,'..','views'))


const public = path.join(__dirname,'..','public')
app.use(express.static(public))

app.use(bp.urlencoded({extended:true}));

app.get('/',(req,res)=>{
	res.render('index')
})
app.get('/index',(req,res)=>{
	res.render('index')
})

app.get('/appointment',(req,res)=>{
	res.render('appointment')
})

app.get('/about',(req,res)=>{
	res.render('about')
})

app.get('/contact',(req,res)=>{
	res.render('contact')
})

app.get('/dlogin',(req,res)=>{
	res.render('dlogin')
})

app.get('/dportal',(req,res)=>{
	res.render('dportal')
})

app.get('/gallery',(req,res)=>{
	res.render('gallery')
})

app.get('/plogin',(req,res)=>{
	res.render('plogin')
})

app.get('/pportal',(req,res)=>{
	res.render('pportal')
})

app.get('/single',(req,res)=>{
	res.render('single')
})

app.post('/appointment',(req,res)=>{
	res.send(req.body)
	f1.insertData(req.body)
})

app.post('/pportal',(req,res)=>{
	res.send(req.body)
	f1.registerData(req.body)
})

app.listen(port, ()=>{
	console.log("server is up")
})

