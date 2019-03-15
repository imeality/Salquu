module.exports = (sequelize,Sequelize)=>{

    const Experience = sequelize.define('experience',{
        empId:{
            type:Sequelize.INTEGER
        },
        employer_name:{
            type:Sequelize.STRING
        },
        employer_address:{
            type:Sequelize.TEXT
        },
        employer_designation:{
            type:Sequelize.STRING
        },
        employer_joining_date:{
            type:Sequelize.DATEONLY
        },
        employer_leave_date:{
            type:Sequelize.DATEONLY
        },
        employer_salary:{
            type:Sequelize.INTEGER
        }
    },{ freezeTableName:true
    })
    return Experience;
}