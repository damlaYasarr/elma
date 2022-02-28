const express= require("express");
const dotenv=require('dotenv');
const router=require("./server/routers/index")
const cors = require('cors');
const app = express();
const middleware=require('./server/middleware/token/token')
dotenv.config({
    path: "./server/config/"
})

app.use(cors({origin: true, credentials: true}));
app.use(express.json());

app.use("/elma", router);

middleware(app);
  
const PORT=process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`halloooowwww ${PORT}`);
   
});