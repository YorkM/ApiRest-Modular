// CONTROLADOR:
// Recibir peticiones
// Ejecutar logica de negocio
// llamar capa de servicio
// enviar respuestas al cliente

export class ControladorReservas{

    constructor(){
        
    }
   
    buscarPorId(request, response){
        let  datos =
        [
            {nombreCliente: "York", fechaEntrada: "07/05/2022", fechaSalida: "10/05/2022", numeroPersonas: 3}
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
                mensaje:"Reserva registrada exitosamente",
                data:datosPeticion,
                estado:true
            })

        }catch(error){

            response.status(400).json({
                mensaje:"No se puede registrar la reserva",
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
                mensaje:"Exito editando la reserva",
                data:datosPeticion,
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

    eliminar(request, response){
        let id=request.params.id
        try{

            response.status(200).json({
                mensaje:"Exito eliminando la reserva",
                data:[],
                estado:true
            })


        }catch(error){

            response.status(400).json({
                mensaje:"fallamos eliminando la reserva"+error,
                data:[],
                estado:false
            })

        }
    }

}