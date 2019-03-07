module.exports = (sequelize,Sequelize)=>{
    const LeaveBalance = sequelize.define('leave_balance',{

        empId:{
            type:Sequelize.INTEGER
        },
        leave_type:{
            type:Sequelize.STRING(25)
        },
        update_date:{
            type:Sequelize.DATEONLY
        },
        leave_taken_date:{
            type:Sequelize.DATEONLY
        },
        leave_remaining:{
            type:Sequelize.INTEGER
        }
    },{
        freezTableName:true
    });

    return LeaveBalance;
}