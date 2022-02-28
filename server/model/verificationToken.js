const Sequelize = require('sequelize');
const { sequelize } = require('../services/verification/initServices');
const VerificationToken = sequelize.define('verification_tokens', {

  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING,

    onUpdate: "cascade",
    onDelete: "cascade",
    references: { model: "users" }
  },
 
  token: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdat: {
  
    type: Sequelize.DATE,
    defaultValue: new Date()
  },
  updatedat: {
  
    type: Sequelize.DATE,
    defaultValue: new Date()
  }

}, { timestamps: false }
);


module.exports = VerificationToken;