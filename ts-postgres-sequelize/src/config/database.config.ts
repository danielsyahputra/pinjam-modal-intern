import { Sequelize } from "sequelize";

const db = new Sequelize('postgres://xkdlclbqefkjtf:ebe3ece8a2d047b1d502780f89a4197d373cdee7afbeb99a372a52334592d5ed@ec2-34-233-114-40.compute-1.amazonaws.com:5432/d2kq2nqstaeqrg', {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

export default db;