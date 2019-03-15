module.exports = (sequelize,Sequelize)=>{

    const UserLog = sequelize.define('userLog',{
        empId:{
            type:Sequelize.INTEGER
        },
        loginDate:{
            type:Sequelize.DATEONLY
        },
        loginTime:{
            type:Sequelize.TIME
        },
        logoutTime:{
            type:Sequelize.TIME
        },status:{
            type:Sequelize.STRING(10)
        }
    },{
        freezeTableName:true
    });
    return UserLog;
}