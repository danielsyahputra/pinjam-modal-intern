import { Model, DataTypes } from "sequelize";
import db from "../config/database.config";

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nomorKTP: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

export default User;