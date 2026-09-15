import database from "../config/database.js";
 
class Usuario {
    constructor() {
        this.model = database.db.define("usuarios", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: database.db.Sequelize.ISTRING,
                unique: true
            },
            senha: {
                type: database.db.Sequelize.ISTRING,
            }
        })
    }
}
 
export default new Usuario().model
