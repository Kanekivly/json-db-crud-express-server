const express = require("express")
const Routes = express.Router();
const fs = require('fs');

const Path = './Database/usercredentials.json' 

// util functions 

const SaveAcc = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(Path, stringifyData)
}

const GetAcc = () => {
    const jsonData = fs.readFileSync(Path)
    return JSON.parse(jsonData)    
}


Routes.get('/account', (req, res) => {
    fs.readFile(Path, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });


  Routes.post('/account/addaccount', (req, res) => {
   
    var ExistAcc = GetAcc()
    const new_id = Math.floor(100000 + Math.random() * 900000)
   
    ExistAcc[new_id] = req.body
     
    console.log(ExistAcc);

    SaveAcc(ExistAcc);
    res.send({success: true, msg: 'your account has been created '})
})

// View All accounts at once
Routes.get('/account/list', (req, res) => {
  const accs = GetAcc()
  res.send(accs)
})

// updating a specific account with it's ID
Routes.put('/account/:id', (req, res) => {
   var ExistAcc = GetAcc()
   fs.readFile(Path, 'utf8', (err, data) => {
    const acc_Id = req.params['id'];
    ExistAcc[acc_Id] = req.body;

    SaveAcc(ExistAcc);
    res.send(`users ID ${accountId} updated account credentials`)
  }, true);
});

//delete  a specific account with it's ID
Routes.delete('/account/delete/:id', (req, res) => {
   fs.readFile(Path, 'utf8', (err, data) => {
    var ExistAcc= GetAcc()

    const user_Id = req.params['id'];

    delete ExistAcc[user_Id];  
    SaveAcc(Exist_Acc);
    res.send(`users ID ${userId} has been permanently terminated`)
  }, true);
})
module.exports = Routes
