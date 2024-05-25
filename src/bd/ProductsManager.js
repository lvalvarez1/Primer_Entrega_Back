import fs from 'fs'

const PATH =  './src/bd/products.json';
class ProductsManager{
    constructor(){
        this.init();
    }
    async init(){
        if(fs.existsSync(PATH)){
            console.log("archivo de productos encontrados")
        }
        else{
            try{
                await fs.promises.writeFile(PATH,json.stringify([]))
            }
            catch(error){
                console.log("el archivo no pudo crearse porque no sabes crear rutas XD",error);
                process.exit(1);
            }
        }
    }

async saveProducts(products){
    try{
 await fs.promises.writeFile(PATH,JSON.stringify(products,null,'\t'));
 return true;
    }
    catch(error){
        console.log("No se porque no funciona, en mi PC si anda...XD", error)
        return false;
    }
}

    async getProducts(){
try{
    const data = await fs.promises.readFile(PATH,'utf-8');
     return JSON.parse(data);
}
catch(error){
    throw new error("no se que paso, pero estan ahi...") 
}
    }


async createProducts({price,name,category,size,code}){
const newProducts = {
    code,
    price,
    name,
    category,
    size,
}
const Products = await this.getProducts();
if(!Products){
    return -1;
}
if(Products.length===0){
    newProducts.id = 1;
}
else{
    newProducts.id = Products [Products.length-1].id+1;
}
Products.push(newProducts);

const created = await this.saveProducts(Products);

if(!created){
    return -1;
}
return newProducts.id;
}
}

export default ProductsManager;