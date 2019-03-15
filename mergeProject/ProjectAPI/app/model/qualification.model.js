module.exports = (sequelize,Sequelize)=>{

    const Qualification = sequelize.define('qualification',{
        empId:{
            type:Sequelize.INTEGER
        },
        level:{
            type:Sequelize.STRING(20)
        },
        institude_name:{
            type:Sequelize.STRING(50)
        },
        board_name:{
            type:Sequelize.STRING(20)
        },
        year_of_passing:{
            type:Sequelize.DATEONLY
        },
        percentage:{
            type:Sequelize.STRING(5)
        }
    },{ freezeTableName:true
    })
    return Qualification;
}