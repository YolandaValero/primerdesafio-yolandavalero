class ProductManager {
    constructor() {
        this.products = []
    }

    static id = 0

    addProduct(title, description, price, thumbnail, code, stock) {
        for(let i = 0; i < this.products.length; i++) {
            if(this.products[i].code === code) {
                console.log(`Este código ${code} está repetido`)
                break;
            }
        }

    const newProduct = {
        title, description, price, thumbnail, code, stock
    }
        if (!Object.values(newProduct).includes(undefined)){
            ProductManager.id++
            this.products.push({
                ...newProduct,
                id: ProductManager.id,
            })
        }else{
            console.log("Debes llenar TODOS los Campos")
        }
    }

    getProduct() {
        return this.products
    }

    existe(id){
        return this.products.find((producto) => producto.id===id)
    }

    getProductById(id){
        !this.existe(id) ? console.log("Sorry. Not Found") : console.log(this.existe(id))
    }
}

const productos = new ProductManager ()

//Primer Testeo Arreglo Vacío
console.log(productos.getProduct())

productos.addProduct("producto 1 prueba", "descripcion producto 1", 5000, "imagen producto prueba", "abc123", 5)
productos.addProduct("producto 2 prueba", "descripcion producto 2", 7000, "imagen producto prueba", "abc124", 8)
productos.addProduct("producto 3 prueba", "descripcion producto 3", 4000, "imagen producto prueba", "abc125", 3)
productos.addProduct("producto 4 prueba", "descripcion producto 4", 1000, "imagen producto prueba", "abc126", 6)

//Segundo Testeo Arreglo con Producto
console.log(productos.getProduct())

//Tercer Testeo Código Repetido
productos.addProduct("producto 2 prueba", "descripcion producto 2", 7000, "imagen producto prueba", "abc124", 8)

//Cuarto Testeo Búsqueda de Producto por ID
productos.getProductById(4)

//Quinto Testeo Búsqueda de Producto por ID No Encontrado
productos.getProductById(9)

