module.exports = (sequelize,Sequelize)=>{
    const Project = sequelize.define('project',{

        project_name:{
           type: Sequelize.STRING(25)
        },
        project_start_date:{
            type: Sequelize.DATEONLY
        },
        project_end_date:{
            type: Sequelize.DATEONLY
        },
        project_desc:{
            type: Sequelize.TEXT
        },
        project_references:{
            type: Sequelize.STRING
        },
        project_status:{
            type: Sequelize.STRING(10)
        }
    },{ freezeTableName:true
    });
    return Project;
}