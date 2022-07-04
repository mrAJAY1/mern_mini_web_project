const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json('cors working again')
})



module.exports=router;