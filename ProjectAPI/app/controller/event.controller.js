var db= require('../config/db.config');

const Event =db.events;

//-----------create events----------
exports.create =(req,res)=>{
    Event.create({
        event_name: req.body.event_name,
        event_desc:req.body.event_desc,
        event_start_date:req.body.event_start_date,
        event_end_date:req.body.event_end_date,
        event_start_time:req.body.event_start_time,
        event_location:req.body.event_location

    }).then(event =>{
        res.send(event); 
    }).catch(err=>{
        res.status(500).send("error"+err);
    })
};

//------------get all events findAll-------

exports.findAll =(req,res)=>{
   Event.findAll().then(event=>{
       res.send(event);
   }).catch(err=>{
       res.send("error"+err);
   })
   
};

//-------get event find by id--------

exports.findById=(req,res)=>{
    Event.findById(req.params.eventId).then(event=>{
        res.send(event);
    }).catch(err=>{
        res.send("error"+err);
    })
};

//-------------update event by id-------

exports.update=(req,res)=>{
    Event.update({
        event_name: req.body.event_name,
        event_desc:req.body.event_desc,
        event_start_date:req.body.event_start_date,
        event_end_date:req.body.event_end_date,
        event_start_time:req.body.event_start_time,
        event_location:req.body.event_location
    },{
        where:{id:req.params.eventId}
      }
    ).then(()=>{
        res.send(event);
    }).catch(err=>{
        res.send("error"+err);
    })
}
