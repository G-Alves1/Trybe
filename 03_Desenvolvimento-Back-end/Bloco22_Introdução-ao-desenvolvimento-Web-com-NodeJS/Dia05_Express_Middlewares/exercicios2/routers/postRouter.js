/*******3*******/
const express = require('express');

const router = express.Router();

const posts = [];

router.get('/', (_req, res) => {
  res.status(200).json({ posts });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const post = posts.find((post) => post.id === +id);

  if(!post) return res.status(404).json({ "message": "post not found" });

  res.status(200).json(post);
});

module.exports = router;
