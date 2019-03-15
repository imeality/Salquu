module.exports = (sequelize,Sequelize)=>{

    const MailHistory = sequelize.define('mailHistory',{
        empId:{
            type:Sequelize.INTEGER
        },
        email_date:{
            type:Sequelize.DATEONLY
        },
        sender_email:{
            type:Sequelize.STRING(30)
        },
        subject:{
            type:Sequelize.STRING(10)
        },
        description:{
            type:Sequelize.TEXT
        }
    },{ freezeTableName:true
    });
    return MailHistory;
}