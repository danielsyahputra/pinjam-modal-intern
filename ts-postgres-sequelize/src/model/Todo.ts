import { Model, DataTypes } from "sequelize";
import db from "../config/database.config";
import User from "./User";

interface TodoAtribut {
    id: number,
    judul: string,
    deskripsi: string,
    selesai: boolean
}

export default class Todo extends Model<TodoAtribut> {}

Todo.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    judul: {
        type: DataTypes.STRING,
        allowNull: false
    },
    deskripsi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    selesai: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize: db,
    modelName: 'Todo',
    tableName: 'todos'
})

Todo.belongsTo(User, {
    foreignKey: {
        allowNull: false
    }
})