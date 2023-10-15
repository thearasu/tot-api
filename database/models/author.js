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
    profilePictureUrl: {
        type: DataTypes.STRING(300)
    }
}