// CONTROLADOR:
// Recibir peticiones
// Ejecutar logica de negocio
// llamar capa de servicio
// enviar respuestas al cliente

import { ServicioReservas } from '../services/ServicioReservas.js'
export class ControladorReservas{

    constructor(){
        
    }

    async buscarPorId(request, response){
        let servicioReserva = new ServicioReservas()

        let id = request.params.id
        console.log(id)

        try{
            // todo sale bien
            response.status(200).json({
                mensaje: "Exito buscando datos " + id,
                data: await servicioReserva.buscarPorId(id),
                estado: true
            })
        }catch(error){
            response.status(400).json({
                mensaje: `Error buscando datos ${error}`,
                data: [],
                estado: false
            })
        }
    }

    async registrar(request, response){
        let servicioReserva = new ServicioReservas()

        let datosPeticion=request.body
        try{
            await servicioReserva.registrar(datosPeticion)
            response.status(200).json({
                mensaje:"Exito agregando la resreva",
                data: null,
                estado:true
            })

        }catch(error){

            response.status(400).json({
                mensaje:"Fallamos agregando la reserva",
                data:[],
                estado:false
            })

        }
    }

    async editar(request, response){
        let servicioReserva = new ServicioReservas()

        let id=request.params.id
        let datosPeticion=request.body
        try{
            await servicioReserva.editar(id, datosPeticion)
            response.status(200).json({
                mensaje:"Exito editando la reserva",
                data: null,
                estado:true
            })


        }catch(error){

            response.status(400).json({
                mensaje:"fallamos editando la reserva "+error,
                data:[],
                estado:false
            })

        }
    }

    async eliminar(request, response){
        let servicioReserva = new ServicioReservas()

        let id=request.params.id
        try{
            await servicioReserva.eliminar(id)
            response.status(200).json({
                mensaje:"Exito eliminando la reserva",
                data: null,
                estado:true
            })


        }catch(error){

            response.status(400).json({
                mensaje:"fallamos eliminando la reserva "+error,
                data:[],
                estado:false
            })

        }
    }

}