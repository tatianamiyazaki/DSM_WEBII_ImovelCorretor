const express = require('express');
const http = require('http');

const corretorRoutes = require('./api/routes/corretorRoutes.js');
const imovelRoutes = require('./api/routes/imovelRoutes.js')

require('./database/indexDb.js');

const app = express();

app.set('porta', 3311);
app.set('url', 'http://localhost:');

app.use(express.json());

app.use(corretorRoutes);
app.use(imovelRoutes);

http.createServer(app).listen(app.get('porta'), function(){
    console.log('\nServidor Rodando em ' + app.get('url') + app.get('porta'));
})