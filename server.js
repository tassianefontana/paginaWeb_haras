const express = require('express')
const path =  require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

app.use(express.static(path.join(__dirname, './static')))

app.get('/',(request, response) => {
    response.render('layout/template', {conteudo:'index'})
})

app.get('/nossahistoria',(request, response) => {
    response.render('layout/template', {conteudo:'historia'})
})

app.get('/modalidades',(request, response) => {
    response.render('layout/template', {conteudo:'modalidades'})
})

app.listen(8000,function(){
    console.log('O servidor está rodando na porta 8000')
})