module.exports = (sequelize, Sequelize) => {
    const Notification= sequelize.define('Notification', {
      Subject:
      { type: Sequelize.STRING(20)
      },
      Message:{
        type: Sequelize.STRING(100)
      },
      Date:{
        type: Sequelize.DATE
         },
     GeneratedDate:{
        type: Sequelize.DATE
     }
    });

    return Notification;
   }
  
