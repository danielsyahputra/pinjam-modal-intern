import { Model, DataTypes } from "sequelize";
import db from "../config/database.config";
import Todo from "./Todo";
import Hobi from "./Hobi";

interface UserAtribut {
    id: number,
    username: string, 
    nomorKTP: string
}

export default class User extends Model<UserAtribut> { };

User.init({
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
}, {
    sequelize: db,
    modelName: 'User',
    tableName: 'users'
})

User.hasMany(Todo, {
    onDelete: 'cascade'
})
User.belongsToMany(Hobi, {
    through: 'UserHobbies'
})