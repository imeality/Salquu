module.exports =(sequelize,Sequelize)=>{
    const Task = sequelize.define('task',{
        project_id:{
            type:Sequelize.INTEGER
        },
        task_name:{
            type:Sequelize.STRING(30)
        },
        task_start_date:{
            type:Sequelize.DATEONLY
        },
        task_end_date:{
            type:Sequelize.DATEONLY
        },
        task_desc:{
            type:Sequelize.TEXT
        },
        task_status:{
            type:Sequelize.STRING(20)
        }

    },{ freezeTableName:true
    })
    return Task;
}