import React from 'react';

const Precio = (props) => {
    var valor = props.valor;
    function formatearpuntos(val) {
        return '$ ' + val.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    return (

        <>
        
            {valor && formatearpuntos(valor)}

        </>
    )

}
export default Precio;