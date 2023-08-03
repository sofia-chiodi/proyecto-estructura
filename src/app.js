const express = require('express');
const app = express();
const path = require('path'); // paquete que unifica las rutas dentro de los distintos sistemas operativos, para que sea mas facil identificar donde estamos y donde queremos llegar

const publicPath = path.resolve(__dirname, './public'); // a traves de resolve resuelva la ruta que le indicamos // dirname hace referencia a la ubicacion en la cual me encuentro (archivo app)

app.use(express.static(publicPath))   //STATIC recibe como paramentro la ruta en la que se encuentra la carpeta de archivos piublic
// el objetivo de esta linea es decirle a express que queremos tener la carpeta public como un recurso de archivos estatiucos para que siempre los podamos consumir de manera sencilla 


// la carpeta views tendra como obj guardar todo lo que consideramos las vistas de nuestra app. Todos los archivos html.

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));   // sendFile permite mandar un archivo al navegador. Recibe 2 parametros
});

