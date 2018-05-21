const express = "express";
const router = express.Router();
const {list,show,create,update,remove} = require(
    "../Controllers/messageControl");


router.get("/messages", list);
router.get("/messages/:id", show);
router.post("/messages", create);
router.put("/messages/:id", update);
router.delete("/messages/:id", remove);

module.exports = router;
