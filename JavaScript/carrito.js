import {listaProductos} from './index.js'



export class ListaProductos{
    constructor(productos){
        this.lista = productos
    }
    displayList(){
        return this.lista
    }

    addItem(item){
        this.lista.push(item)
    }

    findOneByIdItem(itemId){
        const item = this.lista.find(element => element.id === itemId)
        if(!item){
            throw new Error('No existe el item id:' + itemId)
        }
        return item
    }
    
    deleteItem(itemId){
        const item = this.findOneByIdItem(itemId)
        const index = this.lista.indexOf(item)
        this.lista.splice(index, 1)
    }
    updateItem(itemId, newItem){
        const item = this.findOneByIdItem(itemId)
        const index = this.lista.indexOf(item)
        this.lista[index] = newItem
    }
}
export class ProductosSeleccionados{
    constructor(){
        this.productos = JSON.parse(localStorage.getItem('productos')) || []
    }
    findOneByIdItem(itemId){
        const item = this.productos.find(element => element.id === itemId)
        if(!item){
            throw new Error('No existe el item id:' + itemId)
        }
        return item
    }
    
    displayList(){
        return this.productos
    }
    addItem(itemId){
        this.productos.push(listaProductos.findOneByIdItem(itemId))
        localStorage.setItem('productos', JSON.stringify(this.productos))
    }
    removeItem(itemId){
        const item = this.findOneByIdItem(itemId)
        const index = this.productos.indexOf(item)
        this.productos.splice(index, 1)
        localStorage.setItem('productos', JSON.stringify(this.productos))
    }
}


