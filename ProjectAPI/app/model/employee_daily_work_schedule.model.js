module.exports =(sequelize,Sequelize)=>{
    const Tracker = sequelize.define('employee_daily_work_schedule',{
        empId:{
            type:Sequelize.INTEGER
        },
        date:{
            type:Sequelize.DATEONLY
        },
        tracker_start_time:{
            type:Sequelize.TIME
        },
        tracker_end_time:{
            type:Sequelize.TIME
        },
        reason:{
            type:Sequelize.STRING(25)
        },
        totalTime:{
            type:Sequelize.TIME
        }
    },{
        freezeTableName:true,
    
    }
    );
    return Tracker;

}