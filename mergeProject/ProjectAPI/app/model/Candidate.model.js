

module.exports = (sequelize, Sequelize) => {
    const Candidate= sequelize.define('CandidateList', {
      FirstName: {
        type: Sequelize.STRING(10)
      },
      LastName:{
        type: Sequelize.STRING(10)
      },
      Email:{
        type: Sequelize.STRING(25)
      },
      MobileNo:{
        type: Sequelize.INTEGER(10)
      },
    LocalAddress:{
      type: Sequelize.STRING(40)
      },
      PermanentAddress:{
        type: Sequelize.STRING(40)
        },
      Status: {
      type: Sequelize.STRING(50)
      },
      Selected:{
          type: Sequelize.BOOLEAN
    },
    Gender:{
        type: Sequelize.STRING(10)
    },
    DOB:{
        type: Sequelize.DATEONLY
    },
    InterviewDate :{
        type:Sequelize.DATEONLY
    },
    Referal:{
        type:Sequelize.STRING(35)
    },
    Interviewer :{
        type:Sequelize.STRING(35)
    }

});
    return Candidate;
}
