module.exports =(sequelize, Sequelize)=>{

    const WorkSchedule = sequelize.define('work_schedule',{
        shift_name:{
            type:Sequelize.STRING(25)
        },
        shift_desc:{
            type:Sequelize.TEXT
        },
        shift_start_date:{
            type:Sequelize.DATEONLY
        },
        shift_end_date:{
            type:Sequelize.DATEONLY
        }

    },{
        freezeTableName:true
    });
    return WorkSchedule;
}