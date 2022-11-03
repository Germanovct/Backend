const express = require('express')
const Contenedor = require('./controllers/Contenedor')
const routerProductos = require('./routes/productos/index')

const app = express()



const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

app.use('/api/productos', routerProductos)

