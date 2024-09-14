const router = require("express").Router();
const { register, login } = require("../controllers/Admin");

router.post("/createAdmin",register)
router.post("/loginAdmin",login)


module.exports=router