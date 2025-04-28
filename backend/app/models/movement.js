const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Movement = sequelize.define('Movement', {
    id: {
        type: DataTypes.INTEGER,
        autoincrement: true,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    payment_type: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    }, {
        tableName: 'movement',
        timestamps: false
    });

module.exports = Movement;