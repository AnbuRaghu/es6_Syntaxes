import express from 'express';
const app =express();
const port =8900;
app.get('/',(req,res)=>{
    res.send('es6 app')
});
app.listen(port);