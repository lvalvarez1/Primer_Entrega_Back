import { Router } from "express";


const router = Router();

router.get('/',(req,res)=>{
res.send("esto es products")

})

router.get('/:pid',(req,res)=>{
    
});



router.post('/',(req,res)=>{


})
router.put('/:pid',(req,res)=>{


})
router.delete('/',(req,res)=>{


})

export default router;