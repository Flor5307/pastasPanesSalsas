import React from "react";
import Card from "./Card";

function ItemListContainer(props){
    return (
        <div>
            <div className="main container">
                <Card 
                precio={100}
                titulo="pasta"
                detalles="lorem ipsum"
                img="C:\Users\flore\OneDrive\Escritorio\carrito.png"
                />
                <Card 
                precio={300}
                titulo="pan"
                detalles="lorem ipsum"
                img="C:\Users\flore\OneDrive\Escritorio\carrito.png"
                />
                <Card 
                precio={600}
                titulo="salsa"
                detalles="lorem ipsum"
                img="C:\Users\flore\OneDrive\Escritorio\carrito.png"
                />
            </div>
        </div>
    )
}

export default ItemListContainer;
