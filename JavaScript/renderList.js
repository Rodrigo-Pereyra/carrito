import { listaProductos, productosSeleccionados } from "./index.js"


export const renderList = () => {
    for (const element of listaProductos.displayList()){
        const listaContainer = document.getElementById('lista-container')
        const otraListaContainer = document.getElementById('productos-seleccionados')
        const listItem = document.createElement('li')
        const listBttn = document.createElement('button')
        listItem.innerText = `${element.nombre} ${element.precio}`
        listBttn.innerText = 'agregar'
        listaContainer.appendChild(listItem)
        listaContainer.appendChild(listBttn)
        listBttn.addEventListener('click', function addItem(){
            const listItem2 = document.createElement('li')
            listItem2.innerText = `${element.nombre} ${element.precio}`
            listItem2.addEventListener('click', function removeItem(){
                this.parentElement.removeChild(this)
                productosSeleccionados.removeItem(element.id)
                renderResultado()
            } )
            productosSeleccionados.addItem(element.id)
            otraListaContainer.appendChild(listItem2)
            renderResultado()
        })
    }}



export const renderProductosSeleccionados = () => {
    for (const element of productosSeleccionados.displayList()){
        const listaContainer = document.getElementById('productos-seleccionados')
        const listItem = document.createElement('li')
        listItem.innerText = `${element.nombre} ${element.precio}`
        listItem.addEventListener('click', function removeItem(){
            this.parentElement.removeChild(this)
            productosSeleccionados.removeItem(element.id)
            renderResultado()
        } )
        listaContainer.appendChild(listItem)
        
}}





    export const calcularResultado = () =>{
        let resultado = 0
        for (const element of productosSeleccionados.displayList()) {
            resultado += element.precio
        }
        return resultado
    }


    export const renderResultado = () =>{
        const h1 = document.getElementById('resultado')
        h1.innerText = `Total: ${calcularResultado()}`
    }

    