const http = require("http");
const path = require("path");
const PORT = process.env.PORT || 3500;

//creating a server using http
const server = http.createServer((req,res)=> {
    console.log(req.url,req.method);
})
console.log("hello");
server.listen(PORT ,()=> console.log(`server runnung on port ${PORT}`))
 