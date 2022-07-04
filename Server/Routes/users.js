const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
res.json('Cors working')
})



module.exports=router;