# pruebapractica

Este repositorio contiene 2 carpetas. API y app. La carpeta API contiene la api desarrollada en node y express y la carpeta app contiene la aplicación desarrollada con React en el cual se utilizaron los nuevos "hooks" con los que se accedieron a las peticiones http. Tambíen se instaló sass y se dejó la hoja de estilo en .scss.

Correr el servicio REST
Para correr el servicio solo hay que entrar a la carpeta API y ejecutar el comando node .
cd API
node . 

Correr la app
Para correr la app hay que entrar a la carpeta app y ejecutar el comando npm start
cd app
npm start

Comentarios adicionales
Fué necesario consultar el servicio https://api.mercadolibre.com/categories/ para armar el breadcrumb. Aunque se tenía la categoría en ambos casos(lista y detalle) no se tenía el listado de las categorías padre.

