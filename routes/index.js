const express=require("express");
const router=express.Router();
const pool=require("../pool");

//index/
router.get("/",(req,res)=>{
  var sql=`SELECT * FROM xz_index_product
  where seq_recommended!=0
  order by seq_recommended`;
  pool.query(sql,[],(err,result)=>{
    if(err)
      console.log(err);
    res.send(result);
  })
})

module.exports=router;