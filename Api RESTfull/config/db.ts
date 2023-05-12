import mongoose from "mongoose";
import config  from "config";
import Logger from "./logger";

async function connect() {

    const dbUri = config.get<string>("dbUri")

    try {

        await mongoose.connect(dbUri);
        console.log("Conectou ao banco de dados");


    } catch(e) {
        Logger.info("Não foi possível conectar")
        Logger.error(`Erro: ${e}`)
        process.exit(1);
    }
}

export default connect;