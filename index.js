//milestone 11 (module- 63)
//63.1
const express = require('express');
var cors = require('cors')
const app =express();
const port = 4000;

// const handler = (res, req) => {
//     res.send("hello from my first ever node");
// }

app.use(cors());
app.use(express.json());

app.get ('/', (req, res) => {
    res.send('hello from my first ever node and express');
    
});

app.listen(port, () => {
    console.log('listening to port   ',port);
});



//63.3
const wUsers = [
    { id:1, name: "Savana", gmail:"savana@gmail.com", phone:"017-38761543"},
    { id:2, name: "Ravana", gmail:"ravana@gmail.com", phone:"017-38761543"},
    { id:3, name: "Tavana", gmail:"tavana@gmail.com", phone:"017-38761543"},
    { id:4, name: "Yavana", gmail:"yavana@gmail.com", phone:"017-38761543"},
    { id:5, name: "Uavana", gmail:"uavana@gmail.com", phone:"017-38761543"},
    { id:6, name: "Iavana", gmail:"iavana@gmail.com", phone:"017-38761543"}
]





//63.4
app.get ('/users', (req, res )=>{
    res.send(wUsers);
});

//dynamic api
app.get ('/users/:id', (req, res )=>{
   
   // console.log(req.params.id);
   const index = req.params.id;
   const user = wUsers[index];
   res.send(user);

});


//63.4  use search query parameter
app.get ('/users' , (req, res) =>{
  const search =req.query.search;
  if (search ) {
      const searchResult = wUsers.filter(user => user.name.toLocaleLowerCase().includes(search));
      res.send (searchResult);
  }else {
      res.send (wUsers);
  }
});

//app.method 63.7
app.post('/users', (req, res)=>{
   
   const newUser = req.body;
    newUser.id = wUsers.length;
     wUsers.push(newUser);
 console.log('hitting the post', req.body);   
//     res.send(JSON.stringify(newUser))
      res.json(newUser)

 


});



