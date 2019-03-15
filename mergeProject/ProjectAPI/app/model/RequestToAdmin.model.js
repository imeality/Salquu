
module.exports = (sequelize, Sequelize) => {
    const RequesttoAdmin= sequelize.define('RequesttoAdmin', {
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

    return RequesttoAdmin;
   }
  
