const express = require("express")
const userModel = require('./Schema/studentSchema')
const app = express()
const connectDbs = require('./db');

app.use(express.json())

const PORT = 8000;

// POST - create a student
app.post('/students', async (req, res) => {
    try{
        const { name, email, age } = req.body
        const student = await userModel.create({ name, email, age })
        res.status(201).json(student)
    }catch(err){
        res.status(400).json({ error: err.message })
    }
})

app.get('/students', async(req, res) => {
    try{
        const students = userModel.find();
    }
    catch(err){
        console.log(err);
    }
})

app.put('/updateStudent/:id', async(req, res)=>{
    try{
        const student = await userModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
    }catch(err){
        console.log(err);
    }
})

app.delete('/deleteId/:id', async(req, res) => {
    try{
        const student = await userModel.findByIdAndDelete(
            req.params.id
        )
        if(!student){
            console.log('stduent not found');
        }
    }
    catch(err){
        console.log(err)
    }
})

app.listen(PORT, async()=>{
    await connectDbs();
    console.log(`server is running at port ${PORT}`);
})