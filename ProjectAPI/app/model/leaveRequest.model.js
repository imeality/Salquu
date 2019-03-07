module.exports = (sequelize,Sequelize)=>{

    const leaveRequest = sequelize.define('emp_leave_request',{

        empId:{
            type:Sequelize.INTEGER
        },
        application_date:{
            type:Sequelize.DATEONLY
        },
        leave_start_date:{
            type:Sequelize.DATEONLY
        },
        leave_end_date:{
            type:Sequelize.DATEONLY
        },
        leave_type:{
            type:Sequelize.STRING(20)
        },
        reason:{
            type:Sequelize.TEXT
        },
        status:{
            type:Sequelize.STRING
        },
    },{ freezeTableName:true
    })
    return leaveRequest;
}