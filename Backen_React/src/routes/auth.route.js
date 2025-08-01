import express from "express";
import{signup,login,logout,checkAuth,PermisosAutorisacion} from "../controller/auth.controller.js"
import {protectRoute} from "../middleware/auth.middleware.js";


const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.put("/:controlNumber/permissions",PermisosAutorisacion);


router.get("/check",protectRoute, checkAuth);




export default router;