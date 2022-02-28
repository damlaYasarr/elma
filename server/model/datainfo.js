
const { Sequelize } = require("sequelize");
const { sequelize } = require('../services/verification/initServices');

const qa = sequelize.define('qas', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    definition:{
        type:Sequelize.TEXT,
    },
    questions: {
        type: Sequelize.TEXT,
    },
    answers: {
        type: Sequelize.TEXT,
      
    }
});


module.exports = qa;