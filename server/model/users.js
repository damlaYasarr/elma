
const { Sequelize } = require("sequelize");
const { sequelize } = require('../services/verification/initServices');
const VerificationToken = require('./verificationToken');
const User = sequelize.define('users', {
    name: {
        type: Sequelize.STRING,
    },
    lastname: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    online: {
        type: Sequelize.BOOLEAN
    },
    phone_number: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    adress: {
        type: Sequelize.STRING,
    },
    cart_number: {
        type: Sequelize.STRING,
    },
    cart_date: {
        type: Sequelize.STRING,
    },
    cart_cvc: {
        type: Sequelize.STRING,
    },
    cart_password: {
        type: Sequelize.STRING,
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date()
    },
    lastLogin: {
        type: Sequelize.DATE,
        defaultValue: new Date()
    }, image:{
        type:Sequelize.STRING
    }

});

User.hasOne(VerificationToken, { as: 'verificationtoken', foreignKey: 'email', foreignKeyConstraint: true });

module.exports = User;