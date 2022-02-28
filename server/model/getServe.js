const { Sequelize } = require("sequelize");
const { sequelize } = require('../services/verification/initServices');
const user=require('./users')
const getServe=sequelize.define('get-serve',{
    user_id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    definition_part:{
        type:Sequelize.STRING
    },
    created_at:{
       
    type: Sequelize.DATE,
    defaultValue: new Date()
    }
})
user.hasMany(get-Serve, {foreignKey:'give-serve-fk'})
get-Serve.belongsTo(user,{foreignKey:'give-serve-fk'})
module.exports=get-Serve;