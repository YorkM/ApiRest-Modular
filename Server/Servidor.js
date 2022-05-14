// const express = require('express')
import express from 'express'


import { rutas } from '../routes/rutas.js'

import {conectarConBD} from '../database/conexion.js' 

export class Servidor{
    constructor(){
        this.app = express()  //ATRIBUTO APP guarda a express
        this.conectarBD()
        this.llamarAuxiliares()  //activo midlewares o ayudas
        this.atenderPeticiones()
    }

    despertarServidor(){
        this.app.listen(process.env.PORT, function(){
            console.log(`SERVIDOR ENCENDIDO EN EL PUERTO ${process.env.PORT}`)
        })
    }

    atenderPeticiones(){
        // llamando al archivo de rutas
        this.app.use('/', rutas)
    }

    llamarAuxiliares(){
        this.app.use(express.json()) //ayudante para recibir datos por el body de la peticion
    }

    conectarBD(){
        conectarConBD()
    }
}