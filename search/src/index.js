const fetch = require("node-fetch");
const express = require("express");

const {Shoes} = require("./models/shoe-model");
const {Tshirt} = require("./models/tshirt-model");
const router=express.Router()

router.get("/", (req, res) => {
  res.json({ msg: "search" });
});

router.get("/search", async (req, res) => {
  const shoePromise = Shoes.find({});
  const thsirtPromise = Tshirt.find({});
  const promises = [thsirtPromise, shoePromise];
  const [tshirts, shoes] = await Promise.all(promises);

  res.json(tshirts.concat(shoes));
});

router.get("/search/list", async (req, res) => {
  try {
    const shoePromise = fetch("http://shoes:3000/");
    const thsirtPromise = fetch("http://tshirts:3000/");
    const promises = [thsirtPromise, shoePromise];
    const [tshirts, shoes] = await Promise.all(promises);
    const tshirtsJson = await tshirts.json();
    const shoesJson = await shoes.json();

    res.json({ tshirts: tshirtsJson, shoes: shoesJson });
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;