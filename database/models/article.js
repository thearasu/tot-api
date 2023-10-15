import { DataTypes } from "sequelize";

export default {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: true
    },
    slug: {
        type: DataTypes.STRING(260),
        allowNull: false,
        unique: true
    },
    content: {
        type: DataTypes.TEXT('long'),
    },
    thumbnailUrl: {
        type: DataTypes.STRING(300)
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}