# Mutant Detector API

Este proyecto es una API que determina si una secuencia de ADN pertenece a un mutante el endpoint `POST /mutant/`.

## Índice
- [Requisitos](#requisitos)
- [Instalación](#Instalación-ylevantar-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Requisitos

- [Node.js]
- [Express]
- **Base de datos**: No posee.


## Instalación y levantar proyecto.

1. Clonar el repositorio y instalar dependencias:

   ```
   git clone <URL_DEL_REPOSITORIO>
   cd meli/nivel2
   npm i
   ```

2. Levantar el proyecto
   ```
    Si tiene node -> npm start
    Si tiene nodemon -> npm run server
    ```

3. Probar endpoint (postman)

- URL: http://localhost:3001/mutant/
- Método: POST
- Content-Type: "application/json"
- Body:  JSON
{
    "adn": ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]
}


- Respuestas: 

    1. 200 OK: Si el ADN es mutante: 
        ```
        {
            "ok": true,
            "message": "Mutant detected"
        }   
        ```
    2. 403 Forbidden: Si el ADN no es mutante.
        ```
        {
            "ok": false,
            "message": "No mutante"
        }   
        ```


## Estructura del proyecto.
/
├── controllers/
│   └── mutant.js          # Lógica para detectar mutantes
├── routes/
│   ├── index.js           # Rutas principales
│   └── mutant.js          # Ruta para el endpoint POST /mutant
├── seed/
│   └── data.json          # Archivo JSON que contiene la secuencia de ADN de ejemplo
├── app.js                 # Configuración principal de la aplicación Express
├── package.json           # Dependencias del proyecto
└── README.md              # Documentación del proyecto
