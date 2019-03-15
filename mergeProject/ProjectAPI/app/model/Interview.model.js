module.exports = (sequelize, Sequelize) => {
    const Interview= sequelize.define('Interview', {
      Date: {
        type: Sequelize.DATEONLY
      },
      Venue:{
        type: Sequelize.STRING(30)
      },
      Interviewer:{
        type: Sequelize.STRING(100)
      },
      SortlistedCandidate:{
        type: Sequelize.STRING(100)
      }
      
  
    });
  return Interview;
   }
