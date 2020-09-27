import React from 'react';
import { useHttp } from '../hooks/useHttp'
import { useLocation } from 'react-router-dom';
import Breadcrumb from './Breadcrumb.js';
import Precio from './Precio.js';
import freeshipping from '../images/freeshipping.png';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Resultados = () => {

    let query = useQuery();
    var busqueda = query.get("search")
    var [resultado] = useHttp('http://localhost:3050/api/items?q=' + busqueda);
    var items = resultado.items;
    var categorias = [];
    

    return (

        <>

            <Breadcrumb categorias={resultado && resultado.categories} />
            <div className="contenedor contenedorresultados" >

                {items && items.map(x => {
                    return <div key={x.id} className="resultado">
                        <div className="imagenresultados" ><a href={'/items/'+x.id}><img className="imgresultados"  src={x.picture} /></a></div>
                        <div className="precio"><span><b><Precio valor={x.price.amount}/> </b> <b className="enviogratis" hidden={!x.free_shipping} ><img src={freeshipping} /></b> <div><a className='vinculo' href={'/items/'+x.id}>{x.title}<br></br>Completo Unico!</a></div></span></div>
                        <div className="vendedor">{x.id}</div>
                    </div>;
                })}


            </div>
            <p> </p>
            
        </>


    )

}
export default Resultados;