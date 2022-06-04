import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Reserva = new Schema({
    nombreCliente: {
        type: String,
        required: true
    },

    apellido: {
        type: String,
        required: true
    },

    telefono: {
        type: String,
        required: true
    },

    fechaIngreso: {
        type: Date,
        required: true
    },

    fechaSalida: {
        type: Date,
        required: true
    },

    numeroPersonas:{
        type: Number,
        required: true
    },

    costo: {
        type: Number,
        required: true
    }
})

export const modeloReserva = mongoose.model('reservas', Reserva);