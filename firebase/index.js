const express = require('express');
const app = express();
const PORT = 3000;
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./data.json');

initializeApp({
  credential: cert(serviceAccount),

});
const db = getFirestore()

app.use(express.json());
app.post('/sendData', async(req,res)=>{
    try{
        const data = await db.collection('student').add(req.body);
        res.send(data);
    }
    catch (err) {
        res.send({msg:err.message})
    
    }
})
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})