const { Sequelize } = require("sequelize");
const { sequelize } = require('../services/verification/initServices');
const user=require('./users')
const giveServe=sequelize.define('giveserve',{
    user_id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    definition_part:{
        type:Sequelize.STRING
    },
    serve_created_at:{
       
    type: Sequelize.DATE,
    defaultValue: new Date()
    },
    image_profile:{
type:Sequelize.STRING,

    }
})
user.hasMany(giveServe, {foreignKey:'give-serve-fk'})
giveServe.belongsTo(user,{foreignKey:'give-serve-fk'})
module.exports=giveServe;