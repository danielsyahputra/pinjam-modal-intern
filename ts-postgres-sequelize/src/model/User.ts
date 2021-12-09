import { Model, DataTypes } from "sequelize";
import db from "../config/database.config";
import Hobi from "./Hobi";
import Todo from "./Todo";

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

User.hasMany(Todo);
User.belongsToMany(Hobi, { through: 'user_hobbies' });
Hobi.belongsToMany(User, { through: 'user_hobbies' });
db.sync({ alter: true }).then(() => {
    //
}).catch((err) => {
    console.log(err);
}) ;

export default User;