module.exports = (sequelize,Sequelize)=>{

    const LeaveType = sequelize.define('leave_type',{
        leave_type:{
            type:Sequelize.STRING(25)
        }
    },{
        freezeTableName:true
    }
    );
    return LeaveType;
}