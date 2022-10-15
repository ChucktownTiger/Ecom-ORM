const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
//find all tags
router.get('/', (req, res) => {
  try{
    const tagData = await  Tag.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//find tag by its id
router.get('/:id', (req, res) => {
  try{
    const tagData = await Tag.findByPk(req.params.id,{
      include: [{model: Product}]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//create new tag
router.post('/', (req, res) => {
  try{
    const tagData = await Tag.create(
      req.body
    );
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update tag name via id
router.put('/:id', (req, res) => {
  try{
    const tagData = await Tag.update(
      req.body,
      {where: {id: req.params.id}}
    );
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete tag base on its id
router.delete('/:id', (req, res) => {
  try{
    const tagData = await Tag.destroy(
      {where: {id: req.params.id}}
    );
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
