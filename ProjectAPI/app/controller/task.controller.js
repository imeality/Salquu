var db = require('../config/db.config') ;

const Tasks = db.task;

//-----------create task----------

exports.create =(req,res)=>{
    Tasks.create({
        project_id:req.body.project_id,
        task_name:req.body.task_name,
        task_start_date:req.body.task_start_date,
        task_end_date:req.body.task_end_date,
        task_desc:req.body.task_desc,
        task_status:req.body.task_status

    }).then(task=>{
        return res.send(task);
    }).catch(err=>{
        return res.status(500).send("error"+err);
    })
}

//--------find All tasks--------


exports.findAll =(req,res)=>{
    Tasks.findAll().then(task=>{
        return res.send(task);
    }).catch(err=>{
        return res.send("error"+err);
    })
    
 };


 //-------find by project ID----------

 exports.findByprojectId=(req,res)=>{
    Bankdetail.findAll({where:{projectId:req.params.projectId}
    }).then(project=>{
       return res.send(project);
    }).catch(err=>{
        return res.send("error"+err);
    })
};


//--------update task by project Id--

exports.update=(req,res)=>{
    var task =req.body;
    Tasks.update({
       
        task_name:req.body.task_name,
        task_start_date:req.body.task_start_date,
        task_end_date:req.body.task_end_date,
        task_desc:req.body.task_desc,
        task_status:req.body.task_status

        
    },{
        where:{projectId:req.params.projectId}
      }
    ).then(()=>{
        return res.send(task);
    }).catch(err=>{
       return res.send("error"+err);
    })
}


 
