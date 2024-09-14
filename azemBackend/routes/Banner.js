const router = require("express").Router();
const {getBanner,updateBanner,deleteBanner,createBanner} =require("../controllers/Banner")


router.post("/createBanner", createBanner);
router.get("/getBanner",getBanner);
router.put("/updateBanner/:id",updateBanner);
router.delete("/deleteBanner/:id",deleteBanner);


module.exports=router;