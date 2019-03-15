module.exports = (sequelize, Sequelize) => {
    const RequesttoHR= sequelize.define('RequesttoHR', {
     Request:{
          type: Sequelize.STRING(50)
      },
      Status:{
        type: Sequelize.STRING(10)
      },
      Response:{
        type: Sequelize.STRING(20)
         },
     Sender:{
        type: Sequelize.STRING(30)
     }
    });

    return RequesttoHR;
   }
