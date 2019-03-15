module.exports = (sequelize, Sequelize) => {
    const Meeting= sequelize.define('Meeting', {
      Subject: {
        type: Sequelize.STRING(20)
      },
      Date:{
        type: Sequelize.DATEONLY
      },
      Members:{
        type: Sequelize.STRING(30)
      },
      Result:{
        type: Sequelize.STRING(30)
      }


    });

    return Meeting;
   }
  
