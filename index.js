import 'dotenv/config';
import express from 'express';

import logger from './logger.js';
import morgan from 'morgan';


const port=process.env.PORT||3000;
const app=express();
app.use(express.json()); //using body data of frontend

const morganFormat=':method :url :status :response-time ms';

app.use(morgan(morganFormat,{
    stream:{
        write:(message)=>{
            const logObject={
                method:message.split(' ')[0],
                url:message.split(' ')[1],
                status:message.split(' ')[2],
                responsetime:message.split(' ')[3]
            };
            logger.info(JSON.stringify(logObject));
        }
    }
}))

let teaData=[];
let nextId=1;

//used to post data to array
app.post('/teas',(req,res)=>{
    const {name,price}=req.body;
    const newTea={id:nextId++,name,price};
    teaData.push(newTea);
    res.status(201).send(newTea);
})

//used to get all tea
app.get('/teas',(req,res)=>{
    res.status(200).send(teaData);
})

//used to return tea wrt provided id
app.get('/teas/:id',(req,res)=>{
    const tea=teaData.find(t=>t.id===parseInt(req.params.id));   //return id of desired tea
    if (!tea) {
        return res.status(404).send("File not found!!!");
    }else{
        return res.status(201).send(tea);
    }
})

//used to update item
app.put('/teas/:id',(req,res)=>{
    const tea=teaData.find(t=>t.id===parseInt(req.params.id));  //return id of desired tea
    if (!tea) {
        return res.status(404).send("File not found!!!");
    }else{
        const {name,price}=req.body;
        tea.name=name;
        tea.price=price;
        res.status(200).send(tea);
    }
})

//used to delete
app.delete('/teas/:id',(req,res)=>{
    const teaIndexToDelete=teaData.findIndex(t=>t.id===parseInt(req.params.id));
    if (teaIndexToDelete===-1) {
        return res.status(404).send("Tea not found!!!");
    }else{
        teaData.splice(teaIndexToDelete,1);
        return res.status(200).send("Deleted");
    }
})

//get basic message
app.get('/',(req,res)=>{
    res.send("Hello from tea manager");
})
app.get('/twitter',(req,res)=>{
    res.send("aayushdotcom");
})


//listen to server
app.listen(port,()=>{
    console.log(`Server is running at port : ${port}`);
})
