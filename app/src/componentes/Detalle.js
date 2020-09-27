import React, { Component } from 'react';
import { useHttp } from '../hooks/useHttp'
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Detalle = (props) => {
    var id = props.id;
    let query = useQuery();
    var busqueda = query.get("search")
    var resultado = { item: { title: '', price: { amount: '' } } };
    [resultado] = useHttp('http://localhost:3050/api/items/' + id);

    var st_resultado = JSON.stringify(resultado);

    var categorias = [{ name: '', id: '0' }, { name: '', id: '0' }, { name: '', id: '0' },];
    // if (resultado.categories && resultado.categories[0])
    // {
    //     resultado.categories.sort(fordenar)
    //         categorias = resultado.categories;
    //         // console.log(resultado.categories);      

    // }


    // function fordenar( a, b ) {
    //     if ( a.results < b.results ){
    //       return 1;
    //     }
    //     if ( a.results > b.results ){
    //       return -1;
    //     }
    //     return 0;
    //   }

    function formatearpuntos(val) {
        return '$' + val.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }



    return (

        <>
            <div className="contenedor">
                <div className="miga">inicio | {categorias[2].name} | {categorias[1].name} | {categorias[0].name}</div>
            </div>
            <div className="contenedor contenedordetalle" >
                <div className="imagengrande"><img src={resultado.picture} /></div>
                <div className="detalleyprecio">
                    <span>
                        {resultado.condition} {resultado.sold_quantity} vendidos <br></br>
                        {resultado.item && resultado.item.title}  <br></br>
                        $ {resultado.item && resultado.item.price.amount} <br></br> <br></br>
                        <button className="botoncomprar" type="button">
                            Comprar
                    </button>
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