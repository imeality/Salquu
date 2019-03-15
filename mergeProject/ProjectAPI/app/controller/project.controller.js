var db = require('../config/db.config');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Project = db.project;

//-----create project-----

exports.create =(req,res)=>{
    Project.create({
        project_name:req.body.project_name,
        project_start_date: req.body.project_start_date,
        project_end_date: req.body.project_end_date,
        project_desc: req.body.project_desc,
        project_references: req.body.project_references,
        project_status:req.body.project_status
    }).then(project=>{
      return  res.send(project);
    }).catch(err=>{
        return res.send("error"+err);
    })
}

//-------findAll---

exports.findAll =(req,res)=>{
    Project.findAll().then(project=>{
        res.send(project);
    }).catch(err=>{
        res.send("error"+err);
    })
    
 };

 //-----find project by Id------

 exports.findById =(req,res)=>{
     Project.findById(req.params.id)
    .then(project=>{
        return res.send(project);
    }).catch(err=>{
        return res.send("error"+err);
    })
 }

 //---update project by id----

 exports.update=(req,res)=>{
    var project =req.body;
    //const id = req.params.empId;
    Project.update({
        project_name:req.body.project_name,
        project_start_date: req.body.project_start_date,
        project_end_date: req.body.project_end_date,
        project_desc: req.body.project_desc,
        project_references: req.body.project_references,
        project_status:req.body.project_status
    },{
        where:{id:req.params.id}
      }
    ).then(()=>{
        return res.send(project);
    }).catch(err=>{
        return res.send("error"+err);
    })
}


//----search project----

exports.findByProjectName = (req,res)=>{
   
    Project.findAll({ where: {[Op.or]:[ {
         project_name: { 
                [Op.like]: '%'+req.body.project_name+'%'
            }
        },
             { project_desc: {
                                [Op.like]: '%'+req.body.project_name+'%'
                                }
                            },
                            {
                                project_start_date:{
                                    [Op.like]:'%'+req.body.project_name+'%'
                                }
                            }
                        ]}
            }
   ).then(project=>{
    //   for(var i=0;i<project.length;i++){
    //      console.log(project[i].project_name);
    //   }
      return res.send(project);
  }).catch(err=>{
      return res.send("errrrror"+err);
  })
}