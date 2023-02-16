import { Sequelize, DataTypes, DatabaseError } from "sequelize";

const sequelize = new Sequelize (
    'loginsystem',
    'root',
    'xR5XTepX2weaTQ',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully");
}).catch((err) => {
    console.err("Ubable to connect to the database", err);
})

const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

sequelize.sync().then(() => {
    console.log("User table has been created");
}).catch((err) => {
    console.log("Unable to create this table", err);
})

export default User;
