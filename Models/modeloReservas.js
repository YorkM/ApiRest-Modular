import mongoose from "mongoose";

const Schema = mongoose.Schema; // Esquema de datos(que datos tiene mi modelo) 

// Creo mi propio esquema de datos
const Reservas = new Schema({
    idCliente:{
        type: String,
        required: true
    },
    tarjetaCredito:{
        type: String,
        required: true
    },
    fechaIngreso:{
        type: Date,
        required: true
    },
    fechaSalida:{
        type: Date,
        required: true
    },
    idHabitacion:{
        type: String,
        required: true
    },
    costo:{
        type: Number,
        required: true
    } 
})

// Se envia el modelo de datos
export const modeloReservas = mongoose.model('reservas', Reservas);
