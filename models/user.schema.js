const { DataTypes } = require("sequelize");
const  { sequelize } = require("../config/dbConfig");

const userSchema = sequelize.define('user', {
    name : { type : DataTypes.STRING, allowNull : false },
    email : { type : DataTypes.STRING, allowNull : false }
}, {
    timestamps : false
})

module.exports = {
    userSchema
}