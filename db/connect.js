// const connectString =''

const mongoose = require('mongoose');


const connectDb = (url)=>{
   return mongoose.connect(url)
    // .then(()=>console.log('connected....'))
    // .catch((err)=>console.log(err));
}


module.exports=connectDb;
