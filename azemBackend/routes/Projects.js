const { createProject,getProject,updateProject,deleteProject } = require("../controllers/Project");
const router = require("express").Router();

router.post("/createProject", createProject);
router.get("/getProject",getProject);
router.put("/updateProject/:id",updateProject);
router.delete("/deleteProject/:id",deleteProject);



module.exports = router;


