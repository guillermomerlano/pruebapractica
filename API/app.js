const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3050;
const app = express();
const request = require('request');
app.use(bodyParser.json());
const cors = require('cors');


app.get('/', (req, res) => {

    res.send('Bienvenido a la API de Mercado Libre');

});

app.get('/api/items', cors(), (req, res) => {
    respuesta = { author: { name: 'Guillermo', lastname: 'Merlano' } };
    var qry = req.query.search;
    respuesta.items = [];
    respuesta.categories = []

    request('https://api.mercadolibre.com/sites/MLA/search?q=' + qry, { json: true }, (err, result, body) => {
        if (err) { return console.log(err); }

        result.body.results.slice(0, 9).map(x => {
            var item = {};
            item.id = x.id;
            item.title = x.title;
            item.picture = x.thumbnail;
            item.condition = x.condition;
            item.free_shipping = x.shipping.free_shipping;
            item.price = {};
            item.price.currency = x.currency_id;
            item.price.amount = x.price;
            item.price.decimals = 'Información no disponible';
            respuesta.items.push(item);
        });
        var categorias = [];

        //solo se deben tomar en cuenta los items de tipo category no se sabe si hay mas de uno por eso se hace un filtro:
        //No se dejó el resultado como un array de string porque la app necesita también las categorías más repetidas para hacer el breadcrumb
        categorias = result.body.available_filters.filter(x => x.id == 'category');

        categorias.map(categoria => {
            categoria.values.map(valor => {
                respuesta.categories.push(valor);
            });
        });

        res.send(JSON.stringify(respuesta));
    });

});

app.get('/api/items/:id', cors(), (req, res) => {
    respuesta = { author: { name: 'Guillermo', lastname: 'Merlano' } };
    const qry = req.params.id;


    request('https://api.mercadolibre.com/items/' + qry, { json: true }, (err, result, body) => {
        if (err) { return console.log(err); }

        var item = {};
        item.id = result.body.id;
        item.title = result.body.title;
        item.title = result.body.title;
        item.price = {};
        item.price.currency = result.body.currency_id;
        item.price.amount = result.body.price;
        item.price.decimals = "0";
        respuesta.item = item;
        respuesta.picture = result.body.pictures[0].url;

        condiciones = result.body.attributes.filter(x => x.id == 'ITEM_CONDITION');
        respuesta.condition = condiciones[0].value_name;

        respuesta.free_shipping = result.body.shipping.free_shipping;
        respuesta.sold_quantity = result.body.sold_quantity;
        respuesta.description = "Encontrar";


        request('https://api.mercadolibre.com/items/' + qry + '/description', { json: true }, (err, result, body) => {
            if (err) { return console.log(err); }
            respuesta.description = result.body.plain_text;
            res.send(JSON.stringify(respuesta));
        });


    });

});

app.listen(PORT, () => console.log("Escuchando"));
