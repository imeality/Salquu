module.exports = (sequelize, Sequelize) => {
    const Holiday= sequelize.define('Holiday', {
      Date: {
        type: Sequelize.DATEONLY
      },
      Day: {
        type: Sequelize.STRING(15)
    },
      Holiday:{
        type: Sequelize.STRING(15)
      },
      Optional:{
          type: Sequelize.BOOLEAN
    }
    });
    return Holiday;
    }
