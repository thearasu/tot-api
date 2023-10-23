import { DataTypes } from "sequelize";

export default {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(120),
        allowNull: false,
        unique: true
    },
    username: {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(256),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(256),
        allowNull: false,
    },
    profilePictureUrl: {
        type: DataTypes.STRING(300)
    }
}