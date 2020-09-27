import React, { Component } from 'react';
import { useHttp } from '../hooks/useHttp'
import { useLocation } from 'react-router-dom';
import Breadcrumb from './Breadcrumb.js';
import Precio from './Precio.js';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Detalle = (props) => {
    var id = props.id;
    var resultado = { item: { title: '', price: { amount: '' } } };
    [resultado] = useHttp('http://localhost:3050/api/items/' + id);

    var categorias = [];

    if (resultado.categories && resultado.categories[0]) {
        categorias = resultado.categories;
    }

    return (

        <>
            <Breadcrumb categorias={categorias} />

            <div className="contenedor contenedordetalle" >
                <div className="imagengrande"><img src={resultado.picture} /></div>
                <div className="detalleyprecio">
                    <span>
                        <div className="l1">{resultado.condition} {resultado.sold_quantity} vendidos</div>
                        <div className="l2">{resultado.item && resultado.item.title} </div>
                        <div className="l3"><Precio valor={resultado.item && resultado.item.price.amount} /></div>
                        <div className="l4">
                            <button className="botoncomprar" type="button">
                                Comprar
                        </button>
                        </div>

                    </span>
                </div>

                {/* <div className="imagengrande">{resultado.condition} {resultado.sold_quantity} vendidos <br></br> {resultado.item.title} <br></br> ${resultado.item.price.amount} <br></br></div> */}

                <div className="descripciondelproducto">Descripción del producto</div> <div className="descripcion">{resultado.description}</div>


            </div>
            <br></br>
        </>


    )

}
export default Detalle;