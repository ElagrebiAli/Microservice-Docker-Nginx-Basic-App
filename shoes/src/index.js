const express=require('express')
const {Shoes}=require('./model/shoe-model')
const router=express.Router()

router.get("/", (req, res) => {
    res.json({ msg: "shoes" });
  });
  
router.get("/shoes", async (req, res) => {
    const shoes = await Shoes.find({});
    res.json(shoes);
  });
  
router.post("/shoes", async (req, res) => {
    const shoes = new Shoes({ name: req.body.name });
    const savedShoes = await shoes.save();
    res.json(savedShoes);
  });
  
module.exports=router