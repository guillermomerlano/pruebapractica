import React  from 'react';
import logop from '../images/logoP.png';
import { useLocation, Redirect  } from 'react-router-dom';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}





const Cabecera = () => {
    function enter(e){
        if (e.key === 'Enter') {
            buscar();
          }
    }
    function buscar(){
        window.location.replace("/items?search="+busqueda.current.value);
        }
    let query = useQuery();
    var qbusqueda = query.get("search");
    var busqueda = React.createRef();

    return (

        <header role="banner" className="header">
            <div className="contenedor">
                <img className="imagen" src={logop} />

                <div className="divbuscar">
                    <input type="text" className="inputbuscar" placeholder="Buscar" ref={busqueda} defaultValue={qbusqueda} onKeyDown={enter} />

                    <button className="botonbuscar" type="button" onClick={() => buscar() }>
                        <i className="fa fa-search"></i>
                    </button>
                </div>

            </div>

        </header>
    )

}
export default Cabecera;