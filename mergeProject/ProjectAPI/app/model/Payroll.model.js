module.exports = (sequelize, Sequelize) => {
    const Payroll= sequelize.define('Payroll', {
      EmployeeEmail:
      { type: Sequelize.STRING(20)
      },
      WorkingDayAmount:{
        type: Sequelize.DOUBLE(10,2)
      },
      OvertimeAmount:{
        type: Sequelize.DOUBLE(10,2)
      },
     Tax:{
        type: Sequelize.DOUBLE(10,2)
      },
      PF:{
        type: Sequelize.DOUBLE(10,2)
      },
      OtherAmount:{
        type: Sequelize.DOUBLE(10,2)
      },
     FinalSalary:{
        type: Sequelize.DOUBLE(10,2)
     }
    });

    return Payroll;
   }
   
