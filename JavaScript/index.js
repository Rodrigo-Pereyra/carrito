import {ListaProductos, ProductosSeleccionados} from './carrito.js';
import {Producto} from './producto.js';
import {renderList, renderResultado, renderProductosSeleccionados} from './renderList.js'



    const producto1 = new Producto(1, 'manzana', 10, 20)
    const producto2 = new Producto(2, 'naranja', 15, 20)
    const producto3 = new Producto(3, 'banana', 18, 20)
    const producto4 = new Producto(4, 'frutilla', 40, 20)
    const producto5 = new Producto(5, 'mandarina', 32, 20)
    const producto6 = new Producto(6, 'uva', 20, 20)
    const producto7 = new Producto(7, 'durazno', 43, 20)



export const listaProductos = new ListaProductos([producto1, producto2, producto3, producto4, producto5, producto6])
listaProductos.addItem(producto7)
export const productosSeleccionados = new ProductosSeleccionados()










renderList()
renderProductosSeleccionados()
renderResultado()




