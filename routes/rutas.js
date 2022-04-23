import express from 'express'

// importo el dontrolador de habitaciones
import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'

// creo un objeto de la clase controlador habitacion
let controladorHabitacion = new ControladorHabitacion()




// Utilizo el metodo router() de express
export let rutas = express.Router()

// lista de servicios que ofrece el api

rutas.get('/api/v1/sabado', controladorHabitacion.buscarTodas)

rutas.get('/api/v1/sabado/:id', controladorHabitacion.buscarPorId)

rutas.post('/api/v1/sabado', function (req, res) {
    res.send('Hola soy un POST')
 })

rutas.put('/api/v1/sabado', function (req, res) {
    res.send('Hola soy un PUT')
})

rutas.delete('/api/v1/sabado', function (req, res) {
    res.send('Hola soy un DELETE')
 })
