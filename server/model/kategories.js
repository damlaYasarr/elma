
const { Sequelize } = require("sequelize");
const { sequelize } = require('../services/verification/initServices');

const Category = sequelize.define('kategories', {
    kategory_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    temizlik: {
        type: Sequelize.STRING,
        paranoid: true
    },
    nakliyat: {
        type: Sequelize.STRING,
     
    },
    tadilat: {
        type: Sequelize.STRING
    },
    tamir: {
        type: Sequelize.STRING,
    },
    ozel_ders: {
        type: Sequelize.STRING,
       
    },
    saglik: {
        type: Sequelize.STRING,
    },
    dugun: {
        type: Sequelize.STRING,
    },
    kurumsal: {
        type: Sequelize.STRING,
    },
    organizasyon: {
        type: Sequelize.STRING,
    },
    evcil_hayvanlar: {
        type: Sequelize.STRING,
    },
    oto_ve_arac: {
        type: Sequelize.STRING
    },
    createdAt:{
        type:Date.now()
    },
    updatedAt:{
        type:Date.now()
    }
});
module.exports=Category;