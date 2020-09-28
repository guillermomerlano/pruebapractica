import React from 'react';

const Breadcrumb = (props) => {
    var categorias = props.categorias;

    return (

        <div className="contenedor">
            <div className="miga">
                {categorias && categorias.slice(0, 4).map(categoria => {
                    return categoria + ' | ';
                })}
            </div>
        </div>
    )

}
export default Breadcrumb;