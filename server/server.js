const express = require('express')
const app = express()
require('dotenv').config()
const { DB_USERNAME,DB_PASSWORD,DB_CLUSTER,DB_NAME } = process.env

// DB connection
const mongoose = require('mongoose')



mongoose
    .connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/${DB_NAME}`)
    .then(() => console.log('Conectado a la Base de Datos.'))


// CORS
const cors = require('cors')

app.use(express.json())
app.use(cors())


app.listen(5005, () =>{
    console.log(`Soy la api de MOVIES escuchando en http://localhost:5005}`)
    
})