# AnimeApp
Se trata de mi segundo proyecto en el 🌐 del backend. En este caso he trabajado con dos modelos de datos relacionados entre si (Mangas y Otakus) 🏯 

## Descripción 
En este proyecto podrás hacer consultas, editar o eliminar elementos tanto del listado de mangas como de otakus (fanáticos del manga y la cultura pop japonesa). También podrás crear tus propios elementos para agregarlos a la base. 

## Requisitos previos
Para replicar este proyecto es necesario tener instalado Node.js y haber descargado y configurado MongoDB.
A continuación deberías escribir el comando npm init -y en tu terminal y a continuación instalar las siguientes dependencias en tu package.json:

`npm i express npm i mongoose  npm i dotenv npm i cors npm i rate-limit npm i nodemailer npm i jsonwebtoken npm i bcrypt npm i multer  npm i cloudinary npm i multer-storage-cloudinary`

🔌¡No olvides configurar tus script en tu package.json! 🔌

```{
 "main": "index.js",
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
1. `GET /otakus:` Obtiene una lista de todos los otakus de la base y además podrás ver la información básica del manga favorito que hayan declarado (su id y el nombre del manga)
2.  `GET /otakus/:id` Obtiene un otaku en específico de la base a partir de su ID. En este endpoint también verás la información del ánime favorito del Otaku.
3. `POST /otakus` Crea un nuevo otaku.
4.  `DELETE /otakus/:id` Borra un otaku de la base seleccionado por su ID.
5.  `PUT /otakus/:id`: Edita cualquier campo de un otaku seleccionado por su ID. En este endpoint también podrás modificar el _favoriteManga que haya declarado y que se relaciona con el listado de Animes. 

   
🏯 Endpoints para Animes
1. `GET /mangas`:  Obtiene una lista de todos los animes de la base y además te mostrará los datos más relevantes de los Otakus relacionados (aquellos que lo hayan seleccionado como su manga favorito)
2. `GET /mangas/:id` Obtiene un manga en específico de la base a partir de su ID. En este endpoint podrás ver también los datos más relevantes del Otaku que haya declado a éste como su manga favorito. 
3. `POST /mangas` Crea un nuevo manga.
4. `DELETE /mangas/:id` Borra un manga de la base seleccionado por su ID.
5. `PUT /mangas/:id`: Edita cualquier campo de un elemento manga  seleccionado por su ID. En este caso también podrás modificar o agregar Otakus que sean _fans de este manga agregando su número de ID.


## Ejemplos

#### Ejemplo de solicitud GET para pedir un Manga por ID : 

Endpoint: `http://localhost:4001/api/mangas/653828689d27095aead006cb`

#### Ejemplo de una respuesta exitosa 
```{
      "_id": "653828689d27095aead006cb",
      "name": "One Piece",
      "author": "Eiichiro Oda",
      "format": [
        "manga",
        "manga"
      ],
      "year": 1997,
      "principalCharacter": "Monkey D. Luffy",
      "isOngoing": true,
      "fans": [
        {
          "_id": "653828689d27095aead006ec",
          "name": "Li Wei",
          "surname": "Chen",
          "email": "liwei.chen@example.com"
        }
      ],
      "__v": 0,
      "createdAt": "2023-10-24T20:26:16.410Z",
      "updatedAt": "2023-10-24T20:26:16.500Z"
}
```


#### Ejemplo de solicitud PUT para editar los campos de un Manga por ID : 

Endpoint: `http://localhost:4001/api/mangas/653828689d27095aead006cb`


#### Manga original 

``` {
  "data": {
    "_id": "653828689d27095aead006cc",
    "name": "Naruto Shippuden",
    "author": "Kishimoto 💜",
    "format": [],
    "year": 2005,
    "principalCharacter": "Uchiha Sasuke 👁️️",
    "isOngoing": false,
    "fans": [
      "653828689d27095aead006ea",
      "653828689d27095aead006df",
      "653828689d27095aead006dd",
      "653828689d27095aead006db",
    ],
    "__v": 0,
    "createdAt": "2023-10-24T20:26:16.410Z",
    "updatedAt": "2023-10-24T20:37:20.477Z"
  }
}
```


#### Ejemplo de una respuesta exitosa 

![image](https://github.com/GigiAvila/AnimeApp/assets/130833110/110f2886-1ceb-48cb-a5da-27eed583aba0)

