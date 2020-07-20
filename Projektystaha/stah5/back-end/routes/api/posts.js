const express = require('express');
const mongodb = require('mongodb');
const { request } = require('express');

const router = express.Router();

//Get posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollectiion();
    res.send(await posts.find({}).toArray());
});

//Add posts
router.post('/', async(req, res) => {
    const posts = await loadPostsCollectiion();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date(),
    });
    res.status(201).send();
});



//Delete posts
router.delete('/:id', async (req, res) =>{
    const posts = await loadPostsCollectiion();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();

});

async function loadPostsCollectiion(){
    const client = await mongodb.MongoClient.connect
    ('mongodb://localhost:27017/vue_express', {
    useNewUrlParser: true
    });

    return client.db('vue_express').collection('posts');
}

module.exports = router;