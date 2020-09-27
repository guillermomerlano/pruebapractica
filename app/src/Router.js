import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cabecera from './componentes/Cabecera';
import Resultados from './componentes/Resultados';
import Detalle from './componentes/Detalle';



function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact='true' path="/" render={
                    () => (
                        <>
                            <Cabecera />
                        </>
                    )
                } />
                <Route exact='true' path="/items" render={
                    () => (
                        <>
                            <Cabecera />
                            <Resultados />
                        </>
                    )
                } />
                <Route exact='true' path="/items/:id" render={
                    
                    (props) => (
                        
                        <>
                            <Cabecera />
                            <Detalle id={props.match.params.id} />
                        </>
                    )
                } />
            </Switch>
        </BrowserRouter>

    )

}

export default Router;