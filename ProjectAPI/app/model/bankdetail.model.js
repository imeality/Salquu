module.exports = (sequelize,Sequelize)=>{
    const BankDetails = sequelize.define('bankdetail',{
        empId:{
            type:Sequelize.INTEGER
        },
        accountNumber:{
            type:Sequelize.STRING
        },
        ifacCode:{
           type:Sequelize.STRING
        },
        bankName:{
            type:Sequelize.STRING
        }
    },{
        freezeTableName:true
    }
    );
    return BankDetails;
}