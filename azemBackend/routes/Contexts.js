const { createContext,getContext,deleteContext } = require("../controllers/Context");
const router = require("express").Router();

router.post("/createContext", createContext);
router.get("/getContext",getContext);
router.delete("/deleteContext/:id",deleteContext);


module.exports = router;
