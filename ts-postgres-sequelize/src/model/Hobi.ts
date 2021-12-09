import { Model, DataTypes } from "sequelize";
import db from "../config/database.config";
import User from "./User";

interface HobiAtribut {
    id: number,
    nama: string
}

export default class Hobi extends Model<HobiAtribut> { };

Hobi.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'Hobi',
    tableName: 'hobbies'
})

Hobi.belongsToMany(User, {
    through: 'UserHobbies'
})