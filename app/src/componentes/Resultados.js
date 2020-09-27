import React from 'react';
import { useHttp } from '../hooks/useHttp'
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Resultados = () => {

    let query = useQuery();
    var busqueda = query.get("search")
    var [resultado] = useHttp('http://localhost:3050/api/items?search=' + busqueda);
    var items = resultado.items;
    var categorias = [{ name: '', id: '0' }, { name: '', id: '0' }, { name: '', id: '0' },];
    if (resultado.categories && resultado.categories[0]) {
        resultado.categories.sort(fordenar)
        categorias = resultado.categories;
        // console.log(resultado.categories);      

    }


    function fordenar(a, b) {
        if (a.results < b.results) {
            return 1;
        }
        if (a.results > b.results) {
            return -1;
        }
        return 0;
    }

    function formatearpuntos(val) {
        return '$' + val.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }



    return (

        <>
            <div className="contenedor">
                <div className="miga">inicio | {categorias[2].name} | {categorias[1].name} | {categorias[0].name}</div>
            </div>
            <div className="contenedor contenedorresultados" >

                {items && items.map(x => {
                    return <div key={x.id} className="resultado">
                        <div className="imagen" ><a href={'/items/'+x.id}><img width="90px" height="90" src={x.picture} /></a></div>
                        <div className="precio"><span><b>{formatearpuntos(x.price.amount)} </b> <b className="enviogratis" hidden={!x.free_shipping} ><i className="fa fa-circle"> </i></b> <br></br><br></br><a className='vinculo' href={'/items/'+x.id}>{x.title}</a></span></div>
                        <div className="vendedor">{x.id}</div>
                    </div>;
                })}


            </div>
        </>


    )

}
export default Resultados;