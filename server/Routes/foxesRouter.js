const express = "express";
const router = express.Router();
const {list,show,create,update,remove} = require(
    "../Controllers/foxesControl");

router.get("/foxes", list);
router.get("/foxes/:id", show);
router.post("/foxes", create);
router.put("/foxes/:id", update);
router.delete("/foxes/:id", remove);
    
module.exports = router; 