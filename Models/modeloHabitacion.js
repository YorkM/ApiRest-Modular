import mongoose from "mongoose";

const Schema = mongoose.Schema; // Esquema de datos(que datos tiene mi modelo) 

// Creo mi propio esquema de datos
const Habitacion = new Schema({
    nombre:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    capacidad :{
        type: Number,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: true
    }
})

// Se envia el modelo de datos
export const modeloHabitacion = mongoose.model('habitaciones', Habitacion);

// const Reservas = new Schema({
//     nombre:{
//         type: String,
//         required: true
//     },
//     precio:{
//         type: Number,
//         required: true
//     },
//     capacidad :{
//         type: Number,
//         required: true
//     },
//     descripcion:{
//         type: String,
//         required: true
//     },
//     imagen:{
//         type: String,
//         required: true
//     }
// })