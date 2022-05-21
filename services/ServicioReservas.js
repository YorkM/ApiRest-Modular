// Importamos el modelo de habitacion
import {modeloReservas} from '../Models/modeloReservas.js'

 export class ServicioReservas{
    constructor(){}
    
    async registrar(reservas){
        let reservaARegistrar = new modeloReservas(reservas)
        return await reservaARegistrar.save()
    }

    async buscarTodas(){
        let reservas = await modeloReservas.find()
        return (reservas)
    }

    async buscarPorId(id){
        let habitacion = await modeloReservas.findById(id)
        return (habitacion)
    }

    async editar(id, datos){
        return await modeloReservas.findByIdAndUpdate(id, datos)
    }

    async eliminar(id){
        return await modeloReservas.findByIdAndRemove(id)
    }
}