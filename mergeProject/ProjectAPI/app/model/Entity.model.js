module.exports = (sequelize, Sequelize) => {
    const Entities= sequelize.define('Entitie', {
     Name:{
          type: Sequelize.STRING(50)
      },
     QuantityAvailable:{
        type: Sequelize.INTEGER
      },
      RequestedProduct:{
        type: Sequelize.INTEGER
         },
    AmounttoPay:{
        type: Sequelize.DOUBLE(10,2)
     }
    });

    return Entities;
   }
