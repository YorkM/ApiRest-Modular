// Importamos el modelo de habitacion
import {modeloHabitacion} from '../Models/modeloHabitacion.js'

 export class ServicioHabitacion{
    constructor(){}
    
    async registrar(habitacion){
        let habitacionARegistrar = new modeloHabitacion(habitacion)
        return await habitacionARegistrar.save()
    }

    async buscarTodas(){
        let habitaciones = await modeloHabitacion.find()
        return (habitaciones)
    }

    async buscarPorId(id){
        let habitacion = await modeloHabitacion.findById(id)
        return (habitacion)
    }

    async editar(id, datos){
        return await modeloHabitacion.findByIdAndUpdate(id, datos)
    }

    async eliminar(id){
        return await modeloHabitacion.findByIdAndRemove(id)
    }
}