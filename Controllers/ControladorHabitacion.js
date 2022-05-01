// CONTROLADOR:
// Recibir peticiones
// Ejecutar logica de negocio
// llamar capa de servicio
// enviar respuestas al cliente

export class ControladorHabitacion{

    constructor(){
        
    }

    buscarTodas(request, response){
        let  datos =
        [
            {nombre: "York", edad: 32},
            {nombre: "Luz", edad: 35}
        ]

        try{
            // todo sale bien
            response.status(200).json({
                mensaje: "Exito buscando datos",
                data: datos,
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

    buscarPorId(request, response){
        let  datos =
        [
            {nombre: "York", edad: 32}
        ]

        let id = request.params.id
        console.log(id)

        try{
            // todo sale bien
            response.status(200).json({
                mensaje: "Exito buscando datos " + id,
                data: datos,
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

    registrar(request, response){
        let datosPeticion=request.body
        try{

            response.status(200).json({
                mensaje:"Exito agregando la habitacion",
                data:datosPeticion,
                estado:true
            })

        }catch(error){

            response.status(400).json({
                mensaje:"Fallamos agregando la habitacion",
                data:[],
                estado:false
            })

        }
    }

    editar(request, response){
        let id=request.params.id
        let datosPeticion=request.body
        try{

            response.status(200).json({
                mensaje:"Exito editando la habitacion",
                data:datosPeticion,
                estado:true
            })


        }catch(error){

            response.status(400).json({
                mensaje:"fallamos editando la habitacion "+error,
                data:[],
                estado:false
            })

        }
    }

    eliminar(request, response){
        let id=request.params.id
        try{

            response.status(200).json({
                mensaje:"Exito eliminando la habitacion",
                data:[],
                estado:true
            })


        }catch(error){

            response.status(400).json({
                mensaje:"fallamos eliminando la habitacion "+error,
                data:[],
                estado:false
            })

        }
    }

}