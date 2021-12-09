import { DataTypes, Op } from "sequelize";
import db from "../config/database.config";

const Todo = db.define('todos', {
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
})

export default Todo;