const app = require('./src/app')


app.listen(process.env.PORT,()=>{
    console.log("server runing on Port number",process.env.PORT);
    
})