const express=require('express')
const {Tshirt}=require('./model/tshirt-model')
const router=express.Router()

router.get("/", (req, res) => {
    res.json({ msg: "tshirts" });
  });
  
router.get("/tshirts", async (req, res) => {
    const tshirts = await Tshirt.find({});
    res.json(tshirts);
  });
  
router.post("/tshirts", async (req, res) => {
    const tshirt = new Tshirt({ name: req.body.name });
    const savedTshirt = await tshirt.save();
    res.json(savedTshirt);
  });
  
module.exports=router