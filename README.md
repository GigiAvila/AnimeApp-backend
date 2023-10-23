# AnimeApp
Se trata de mi segundo proyecto en el 🌐 del backend. En este caso he trabajado con dos modelos de datos relacionados entre si (Animes y Otakus) 🏯 

## Descripción 
En este proyecto podrás hacer consultas, editar o eliminar elementos tanto del listado de animes como de otakus (fanáticos del anime y la cultura pop japonesa). También podrás crear tus propios elementos para agregarlos a la base. 

## Requisitos previos
Para replicar este proyecto es necesario tener instalado Node.js y haber descargado y configurado MongoDB.
A continuación deberías escribir el comando npm init -y en tu terminal y a continuación instalar las siguientes dependencias en tu package.json:

`npm i express npm i mongoose  npm i dotenv npm i cors npm i rate-limit `

🔌¡No olvides configurar tus script en tu package.json! 🔌

```{
 "main": "src/index.js",
  "scripts": {
    "start": "node .",
    "dev": "node --watch ."
  }
```

📎En este caso podrás encontrar un achivo "seed.js" donde encontrarás la base de datos para este ejercicio. Aquí puedes agregar nuevas propiedades o quitar algunas si lo deseas!

## Uso

Una vez instalado y configurado todo deberás lanzar el comando `npm run start` para abrir el servidor en tu local y `npm run dev` para ejecutar el modo watch de Node y listo! 🙏Ya puedes iniciar tus peticiones. 

En mi caso he utilizado la extensión "Thunder Client" en mi editor de código VS Code para poder simular las peticiones.

 ## Rutas 

 Se han creado rutas que incluyen los métodos GET, POST, PUT y DELETE.

Las rutas disponibles en esta API con sus respectivos endpoints son:

👘 Endpoints para Otakus
1. `GET /otakus:` Obtiene una lista de todos los otakus de la base y además podrás ver la información básica del anime favorito que hayan declarado (su id y el nombre del anime)
2.  `GET /otakus/:id` Obtiene un otaku en específico de la base a partir de su ID. En este endpoint también verás la información del ánime favorito del Otaku.
3. `POST /otakus` Crea un nuevo otaku.
4.  `DELETE /otakus/:id` Borra un otaku de la base seleccionado por su ID.

   
🏯 Endpoints para Animes
1. `GET /animes`:  Obtiene una lista de todos los animes de la base y además te mostrará los datos más relevantes de los Otakus relacionados (aquellos que lo hayan seleccionado como su anime favorito)
2. `GET /animes/:id` Obtiene un anime en específico de la base a partir de su ID. En este endpoint podrás ver también los datos más relevantes del Otaku que haya declado a éste como su anime favorito. 
3. `POST /animes` Crea un nuevo anime.
4. `DELETE /animes/:id` Borra un anime de la base seleccionado por su ID.


## Ejemplos

#### Ejemplo de solicitud PUT para editar los datos 


#### Ejemplo de una respuesta exitosa 
