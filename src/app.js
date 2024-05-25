import express from 'express';
import productsRouter from './routes/products.router.js';
import cartRouter from './routes/cart.router.js';
import ProductsManager from './bd/ProductsManager.js';



const app = express();

 const PORT = process.env.PORT||8080;

 app.listen(PORT,()=>console.log('listening on PORT ${PORT}'));

const manager = new ProductsManager();

app.use('/api/products',productsRouter);
app.use('/api/cart',cartRouter);

app.post('./api/products',async(res,req)=>{
const products = req.body;
if(!products.price||!products.name||!products.size||!products.code||!products.category){
    return res.statusCode(400).send({status:"error",error:"Incomplete Values"});
}


const result = await manager.createProducts(products);

if(result === -1){
    return res.status(500).send({status:"error",error:"couldn't create products"});
}
res.send({status:"success",message:'products created whit id: ${result}'})
});