const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3500;

//app.use(express.static());
app.use(express.static(path.join(__dirname,'build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname,'build'),'index.html'));
  });
//creating a server using express
app.listen(PORT, () => {
    console.log(__dirname);
    console.log(`Server is running on port${PORT}`);
});


//getting web pages
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'frontend','src','loginsignup','SignIn.js'));
// }) 