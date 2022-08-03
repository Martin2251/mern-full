    const router = require("express").Router();
    //import todo model 

    const todoItemModal = require("../models/todoItems");


    //connect first route 

    router.post('/api/item', async (req, res) => {
        try{
const newItem = new todoItemsModel({
    item: req.body.item
})
// save this in the database 

const saveItem = await newItem.save()
res.status(200).json('Item added successfully');
        }catch(err){
            res.json(err)
        }
    })

    //export router 

    module.exports = router;