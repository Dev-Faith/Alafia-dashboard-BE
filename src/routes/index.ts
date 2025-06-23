import {Router} from "express";

const router = Router();

router.get("/health", (req,res)=>{
    res.json({message: "API is running smoothly!"})
})


export default router;