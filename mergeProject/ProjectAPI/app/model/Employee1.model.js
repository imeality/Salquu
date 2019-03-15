module.exports = (sequelize, Sequelize) => {
    const Employee= sequelize.define('Employee', {
      CandidateId:{
      type: Sequelize.INTEGER(100),
    },
      Designation:{
        type: Sequelize.STRING(15)
      },
      Password:{
        type: Sequelize.STRING(30)
      },

      JoiningDate:{
          type: Sequelize.DATEONLY
    },
    Salary:{
        type: Sequelize.DOUBLE(10,2)
    },
    Leaves:{
        type: Sequelize.INTEGER(100)
    },
    Requests:{
        type: Sequelize.STRING(100)
    },
    HealthStatus:{
        type: Sequelize.STRING(10)
    },
    SpecialNote:{
        type: Sequelize.STRING(100)
    },
    Quote:{
        type: Sequelize.STRING(100)
    },

    });

    return Employee;
   }
   
