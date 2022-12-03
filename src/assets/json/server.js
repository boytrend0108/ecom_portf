const express = require('express')
const fs =  require('fs')
const path = require('path');
const advantagesJSONPath = path.resolve(__dirname, './db/advantages.json');
const publicPath = path.resolve(__dirname, '../public')
const app =  express();
app.use(express.json());
app.use('/', express.static(publicPath))

app.get('/api/advantages', (req, res)=>{
    fs.readFile(advantagesJSONPath, (err, data)=>{
        if(err) res.end(JSON.stringify({result:0, err}));
        return res.end(data)
    })
});
app.get('/api/catalobItems', (req, res)=>{});
app.get('/api/category', (req, res)=>{});
app.get('/api/menu', (req, res)=>{});
app.get('/api/userCart', (req, res)=>{});
app.post('/api/userCart', (req, res)=>{});
app.put('/api/userCart/:id', (req, res)=>{})

app.listen(5555, ()=>{console.log("Server started")});
