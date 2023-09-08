const express = require('express')
const path = require('path')
const app = express()
const mongoDB= require("./db");
mongoDB();

app.use(express.static(path.join(__dirname, "../client/build")))

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with,Content-Type, Accept"
  );
  next();
})

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"))
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../client/build/index.html")
  );
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 