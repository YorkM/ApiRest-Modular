import express from 'express'

// importo el Controlador de habitaciones y reservas
import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
import { ControladorReservas } from '../Controllers/ControladorReservas.js'

// creo un objeto de la clase controlador habitacion
let controladorHabitacion = new ControladorHabitacion()
let controladorReservas = new ControladorReservas()

// Utilizo el metodo router() de express
export let rutas = express.Router()

// lista de servicios que ofrece el api
rutas.get('/api/v1/sabado', controladorHabitacion.buscarTodas)
rutas.get('/api/v1/sabado/:id', controladorHabitacion.buscarPorId)
rutas.post('/api/v1/sabado', controladorHabitacion.registrar)
rutas.put('/api/v1/sabado', controladorHabitacion.editar)
rutas.delete('/api/v1/sabado', controladorHabitacion.eliminar)

rutas.get('/api/v1/sabado/reservas/:id', controladorReservas.buscarPorId)
rutas.post('/api/v1/sabado/reservas', controladorReservas.registrar)
rutas.put('/api/v1/sabado/reservas', controladorReservas.editar)
rutas.delete('/api/v1/sabado/reservas/:id', controladorReservas.eliminar)
