// Importar mongoose
import mongoose from 'mongoose';

export async function conectarConBD(){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("Éxito conectándonos a la BD")
    }
    catch(error){
        console.log(`UPPS... ${error}`)
    }
}