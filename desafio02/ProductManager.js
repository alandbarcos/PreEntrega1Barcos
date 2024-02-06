const fs = require('fs');

class ProductManager {

    constructor(path) {
        this.products = [];
        this.path = path;
    }

    //-------------------------------------------------------------------------------------
    async addProduct(product) {

        const products = await this.getProducts();

        const productsLength = products.length;

        const { title, description, price, thumbnail, code, stock } = product

        const newproduct = {

            id: productsLength > 0 ? products[productsLength - 1].id + 1 : 1,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        }

        const productRepeat = products.some(prod => prod.code === code);

        const data = Object.values(newproduct).includes(undefined);

        if (data) {
            return console.log("Incomplete values, por favor llene todos los campos solicitaods");
        }

        if (productRepeat) {
            return console.log('Este codigo de producto ya existe, por favor verifique');
        }

        products.push(newproduct);

        try {
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"));

        }
        catch (error) {
            return error
        }
    }

    //-------------------------------------------------------------------------------------
    async getProducts() {

        try {
            const products = await fs.promises.readFile(this.path, 'utf-8');
            return JSON.parse(products);

        } catch (error) {
            return this.products;
        }
    }

    //-------------------------------------------------------------------------------------
   async getProductById(id) {

        const products= await this.getProducts();

        const search = products.find(product => product.id === id);

        !search ? console.log("Error el producto que buscas no existe") : console.log(search);
    }

    //-------------------------------------------------------------------------------------

    async deleteProduct(id){

        const products = await this.getProducts();

        const productForDelete= products.findIndex(product => product.id === id);

        if( productForDelete == -1 ){
            return console.log("Error el producto que buscas no existe");
        }

        try{
            products.splice(productForDelete,1);
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"));
        }
        catch(error){
            console.log(error);
        }
    }

    //-------------------------------------------------------------------------------------

    async updateProduct(id,prod){

        const products = await this.getProducts();

        for(let key in products){

            if(products[key].id == id){
                products[key].title = prod.title ? prod.title : products[key].title;
                products[key].description = prod.description ? prod.description : products[key].description;
                products[key].price = prod.price ? prod.price : products[key].price;
                products[key].thumbnail = prod.thumbnail ? [...products[key].thumbnail, prod.thumbnail] : products[key].thumbnail;
                products[key].code = prod.code ? prod.code : products[key].code;
            }
        }

        try {  
            await fs.promises.writeFile(this.path, JSON.stringify(products, null, "\t"));

        }
        catch (error) {
            return error
        }
    }

}

const productManager = new ProductManager('./products.json');

productManager.updateProduct(1,{price:700,title:"Arroz Gallo"});

productManager.addProduct({
    title: "Arroz Molinos Ala",
    description: "Paquete de arroz x500gr",
    price: 430,
    thumbnail: "https://molinosala.com.ar/wp-content/uploads/2023/04/2022-12-03-RENDER-FINAL_MA_GranoSelecto_LargoFino_Frente_1kilo_FLAT-e1680578350684-887x1024.png",
    code: 1001,
    stock: 206
});
productManager.addProduct({
    title: "Fideos Matarazzo",
    description: "Paquete de fideos tipo spaghetti x500gr",
    price: 500,
    thumbnail: "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/5/15061.jpg",
    code: 1002,
    stock: 130
});
productManager.addProduct({
    title: "Harina Cañuelas",
    description: "Harina de trigo tipo 000 x500gr",
    price: 615,
    thumbnail: "https://delimart.com.ar/user-content/f0639281-7b90-42db-a3ee-7f5d3ea96eb0.PNG",
    code: 1003,
    stock: 310
});

productManager.getProductById(2);
productManager.deleteProduct(5);