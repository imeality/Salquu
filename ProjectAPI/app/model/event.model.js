
//---------------event model-----------
module.exports = (sequelize,Sequelize)=>{
    const Event = sequelize.define('event',{
        event_name:{
            type: Sequelize.STRING
          
        },
        event_desc:{
            type:Sequelize.STRING
          
        },
        event_start_date:{
            type:Sequelize.DATEONLY
            
        },
        event_end_date:{
            type:Sequelize.DATEONLY
            
        },
        event_start_time:{
            type:Sequelize.TIME
        
        },
        event_location:{
            type:Sequelize.STRING
           
        },
    },{ freezeTableName:true
    });
    return Event;
}



