module.exports = (sequelize,Sequelize)=>{

    const Employee = sequelize.define('employee',{
        firstName:{
           type:Sequelize.STRING(25)
        },
        lastName:{
            type:Sequelize.STRING(25)
        },
        empMobile:{
            type:Sequelize.STRING(11)
        },
        emergencyContact:{
            type:Sequelize.STRING(11)
        },
        depName:{
            type:Sequelize.STRING(20)
        },
        empEmail:{
            type:Sequelize.STRING(30)
        },
        password:{
            type:Sequelize.STRING(55)
        },
        joiningDate:{
            type:Sequelize.DATEONLY
        },
        maritalStatus:{
            type:Sequelize.STRING(10)
        },
        localAddress:{
            type:Sequelize.TEXT
        },
        permanentAddress:{
            type:Sequelize.TEXT
        },
        city:{
            type:Sequelize.STRING(25)
        },
        state:{
            type:Sequelize.STRING(20)
        },
        country:{
            type:Sequelize.STRING(20)
        },
        dob:{
            type:Sequelize.DATEONLY
        },
        gender:{
            type:Sequelize.STRING(6)
        },
        zipCode:{
            type:Sequelize.STRING(10)
        },
        empImage:{
            type:Sequelize.STRING
        },
        permission:{
            type:Sequelize.STRING(10)
        },
    
        

    },{ freezeTableName:true,
        timestamps: false,
    });
    return Employee;
}