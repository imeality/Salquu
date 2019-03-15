var db = require('../config/db.config');

const Employee = db.employees;

//-----create employees-----------


function isEmailUnique (empEmail) {
    return db.employees.count({ where: { empEmail: empEmail } })
      .then(count => {
        if (count != 0) {
          return false;
        }
        return true;
    });
}



exports.create=(req,res)=>{
    isEmailUnique(req.body.empEmail).then(isUnique => {
        if (isUnique) {
            
            Employee.create({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                empMobile:req.body.empMobile,
                emergencyContact:req.body.emergencyContact,
                depName:req.body.depName,
                empEmail:req.body.empEmail,
                password:req.body.password,
                joiningDate:req.body.joiningDate,
                maritalStatus:req.body.maritalStatus,
                localAddress:req.body.localAddress,
                permanentAddress:req.body.permanentAddress,
                city:req.body.city,
                state:req.body.state,
                country:req.body.country,
                dob:req.body.dob,
                gender:req.body.gender,
                zipCode:req.body.zipCode,
                empImage:req.body.empImage,
                permission:req.body.permission
            }).then(employee=>{
                return res.send(employee);
            })
           
        }
        else{
            return res.send("email already register");
           
        }
    })
    .catch(err=>{
        res.status(500).send("error"+err);
    })

};

//------------find all employees

exports.findAll = (req,res)=>{
    Employee.findAll().then(employee=>{
        res.send(employee);
    }).catch(err=>{
        res.send("error"+err);
    })
}


// exports.create=(req,res)=>{
//     Employee.create({
//         firstName:req.body.firstName,
//         lastName:req.body.lastName,
//         empMobile:req.body.empMobile,
//         emergencyContact:req.body.emergencyContact,
//         depName:req.body.depName,
//         empEmail:req.body.empEmail,
//         password:req.body.password,
//         joiningDate:req.body.joiningDate,
//         maritalStatus:req.body.maritalStatus,
//         localAddress:req.body.localAddress,
//         permanentAddress:req.body.permanentAddress,
//         city:req.body.city,
//         state:req.body.state,
//         country:req.body.country,
//         dob:req.body.dob,
//         gender:req.body.gender,
//         zipCode:req.body.zipCode,
//         empImage:req.body.empImage,
//         permission:req.body.permission
//     }).then(employee =>{
//         isEmailUnique(req.body.empEmail).then(isUnique => {
//             if (isUnique) {
                
//                 return res.send(employee);
               
//             }
//             else{
//                 return res.send("email already register");
               
//             }
//         });
//     }).catch(err=>{
//         res.status(500).send("error"+err);
//     })
// };

// //------------find all employees

// exports.findAll = (req,res)=>{
//     Employee.findAll().then(employee=>{
//         res.send(employee);
//     }).catch(err=>{
//         res.send("error"+err);
//     })
// }

//-----------find by id-------

exports.findById=(req,res)=>{
    Employee.findById(req.params.empId).then(employee=>{
        res.send(employee);
    }).catch(err=>{
        res.send("error"+err);
    })
};

//--------update by id-------

exports.update=(req,res)=>{
    var employee =req.body;
    //const id = req.params.empId;
    Employee.update({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        empMobile:req.body.empMobile,
        emergencyContact:req.body.emergencyContact,
        depName:req.body.depName,
        empEmail:req.body.empEmail,
        password:req.body.password,
        joiningDate:req.body.joiningDate,
        maritalStatus:req.body.maritalStatus,
        localAddress:req.body.localAddress,
        permanentAddress:req.body.permanentAddress,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country,
        dob:req.body.dob,
        gender:req.body.gender,
        zipCode:req.body.zipCode,
        empImage:req.body.empImage,
        permission:req.body.permission
    },{
        where:{id:req.params.empId}
      }
    ).then(()=>{
        res.send(employee);
    }).catch(err=>{
        res.send("error"+err);
    })
}
