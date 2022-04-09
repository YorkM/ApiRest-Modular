// const express = require('express')
import express from 'express'

export class Servidor{
    constructor(){
        this.app = express()
        this.atenderPeticiones()
    }

    despertarServidor(){
        this.app.listen(process.env.PORT, function(){
            console.log(`SERVIDOR ENCENDIDO EN EL PUERTO ${process.env.PORT}`)
        })
    }

    atenderPeticiones(){
        this.app.get('/api/v1/sabado', function (req, res) {
            res.send('Hola soy un GET')
          })

        this.app.get('/api/v1/sabado:id', function (req, res) {
            res.send('Hola soy UN GET')
        })
    
        this.app.post('/api/v1/sabado', function (req, res) {
            res.send('Hola soy un POST')
         })

        this.app.put('/api/v1/sabado', function (req, res) {
            res.send('Hola soy un PUT')
        })

        this.app.delete('/api/v1/sabado', function (req, res) {
            res.send('Hola soy un DELETE')
         })
}
}