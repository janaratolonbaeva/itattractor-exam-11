const express = require('express');
const multer = require('multer');
const {nanoid} = require('nanoid');
const path = require('path');
const config = require('../config');
const Goods = require("../models/Goods");
const auth = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  },
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const goods = await Goods.find();
    res.send(goods);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const goodsData = req.body;
    goodsData.user = req.user._id;

    if (req.file) {
      goodsData.image = 'uploads/' + req.file.filename;
    }

    const goods = new Goods(goodsData);
    await goods.save();
    res.send(goods);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const goods = await Goods.findOne({_id: req.params.id}).populate('category', 'title').populate('user', 'displayName phone');

    console.log(goods)
    if (goods) {
      return res.send(goods);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/category/:id', async (req, res) => {
  try {
    const goods = await Goods.find({category: req.params.id});

    if (goods) {
      return res.send(goods);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;
