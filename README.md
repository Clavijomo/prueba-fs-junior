# Prueba Técnica: Desarrollador Full Stack Junior

# MoviesApp

MoviesApp es una aplicación de gestión de películas que permite a los usuarios crear, listar, y consultar detalles de películas. Incluye un backend desarrollado con Node.js y un frontend construido con React, integrando diversas herramientas modernas para ofrecer una experiencia completa.

## Tabla de Contenidos
- [Características](#características)
- [Endpoints](#endpoints)
  - [GET api/v1/movies](#get-movies)
  - [GET api/v1/movies/:id](#get-moviesid)
  - [POST api/v1/movies](#post-movies)
- [Frontend](#frontend)
- [Herramientas Utilizadas](#herramientas-utilizadas)
- [Instalación y Configuración](#instalación-y-configuración)
  - [Backend](#backend)
  - [Frontend](#frontend-1)
- [Credenciales](#credenciales)

## Características
- Listar todas las películas.
- Consultar detalles de una película específica por su ID.
- Crear nuevas películas con validaciones avanzadas.
- Interfaz moderna y fácil de usar.
- Indicador de carga para mejorar la experiencia del usuario.

## Endpoints

### **GET movies**
Devuelve una lista de todas las películas en la base de datos.

- **URL**: `api/v1/movies`
- **Método**: `GET`
- **Respuesta Ejemplo**:
```json
[
  {
    "id": 1,
    "title": "The Dark Knight",
    "year": 2008,
    "genre": "Action",
    "synopsis": "A vigilante known as Batman faces off against the Joker...",
    "cast": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    "createdAt": "2024-01-01T12:00:00Z",
    "updatedAt": "2024-01-01T12:00:00Z"
  }
]
```

### **GET /movies/:id**
Devuelve los detalles de una película específica.

- **URL**: `api/v1/movies/:id`
- **Método**: `GET`
- **Parámetros**:
  - `id` (requerido): ID de la película a consultar.
- **Respuesta Ejemplo**:
```json
{
  "id": 1,
  "title": "The Dark Knight",
  "year": 2008,
  "genre": "Action",
  "synopsis": "A vigilante known as Batman faces off against the Joker...",
  "cast": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
  "createdAt": "2024-01-01T12:00:00Z",
  "updatedAt": "2024-01-01T12:00:00Z"
}
```

### **POST /movies**
Crea una nueva película en la base de datos.

- **URL**: `/movies`
- **Método**: `POST`
- **Cuerpo Ejemplo**:
```json
{
  "title": "Inception",
  "year": 2010,
  "genre": "Sci-Fi",
  "synopsis": "A skilled thief is given a chance at redemption...",
  "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
}
```
- **Respuesta Ejemplo**:
```json
{
  "message": "Película creada exitosamente"
}
```

## Frontend
El frontend fue desarrollado con React y Tailwind CSS. Algunas características principales incluyen:
- **Pantalla principal**: Listado de todas las películas con opción de ver detalles.
- **Formulario**: Crear nuevas películas con validaciones en los campos.
- **Rutas**:
  - `/`: Listado de películas.
  - `/movies/:id`: Detalle de una película específica.
  - `/movies/create-movie`: Crear una nueva película.

## Herramientas Utilizadas

### Backend
- **Node.js**: Servidor principal.
- **Express**: Framework para construir la API.
- **Joi**: Validaciones en las entradas del usuario.
- **MySQL**: Base de datos relacional para almacenar películas.

### Frontend
- **React**: Biblioteca para construir la interfaz de usuario.
- **React Router**: Manejo de rutas en el frontend.
- **Tailwind CSS**: Diseño rápido y responsivo.
- **Axios**: Manejo de peticiones HTTP.

### DevOps
- **Vite**: Herramienta de construcción rápida para el frontend.
- **ESLint**: Linter para mantener código limpio.

## Instalación y Configuración

### Backend
1. Clona el repositorio.
   ```bash
   git clone <url-del-repositorio>
   cd backend
   ```
2. Instala las dependencias.
   ```bash
   npm install
   ```
3. Configura el archivo `.env` con las credenciales de tu base de datos MySQL.
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=tucontraseña
   DB_NAME=movies_db
   DB_PORT=3306
   ```
4. Ejecuta las migraciones y datos iniciales.
   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```
5. Inicia el servidor.
   ```bash
   npm start
   ```

### Frontend
1. Clona el repositorio.
   ```bash
   git clone <url-del-repositorio>
   cd frontend
   ```
2. Instala las dependencias.
   ```bash
   npm install
   ```
3. Configura el archivo `.env` con la URL de la API.
   ```env
   VITE_API_URL=http://localhost:4000
   ```
4. Inicia el servidor de desarrollo.
   ```bash
   npm run dev
   ```

## Credenciales
- **Base de datos**: MySQL
  - Usuario: `root`
  - Contraseña: `tucontraseña`
  - Nombre de la BD: `movies_db`

## Licencia
Este proyecto está bajo la licencia MIT. ¡Siéntete libre de contribuir!



## Objetivo de la prueba

El objetivo de esta prueba es evaluar tus habilidades en el desarrollo de aplicaciones Full Stack utilizando React para el frontend, Node.js para el backend, Sequelize como ORM, y una base de datos SQL. Queremos observar tu capacidad para estructurar y conectar una aplicación cliente-servidor, manejar datos en la base de datos, y trabajar con dependencias y herramientas estándar.

## Instrucciones Generales

Requisitos
- Hacer un fork del repositorio.
- En un directorio `api` desarrolla un backend con Node.js que permita administrar un recurso de películas.
- Integra el frontend suministrado en el directorio `ui` con el backend que construyas.
- Sube tus cambios al fork creado en tu GutHub en una rama nombrada con tu nombre.
- Haz un Pull Request de tu rama este repositorio.

## Requerimientos Específicos

## Backend

- Configuración:
  Usa Node.js como entorno de ejecución.
  Usa Express.js como framework para construir el servidor.
  Usa Sequelize como ORM para interactuar con una base de datos SQL.
  Configura una base de datos relacional (PostgreSQL, MySQL o SQLite).

- Endpoints:

  - POST /movies: Crear una nueva película.
    Recibe un objeto con: título, año, género, sinopsis, reparto (array de strings) e imagen (URL).
    Guarda los datos en la base de datos.
  - GET /movies: Consultar el listado de películas.
    Devuelve un array con los datos básicos de cada película (título, año, género, imagen).
  - GET /movies/:id: Ver el detalle de una película.
    Devuelve todos los datos de la película solicitada (título, año, género, sinopsis, reparto e imagen).

- Estructura de datos:
  Cada película deberá tener la siguiente estructura:

  ```json
  {
    "id": 1,
    "title": "Inception",
    "year": 2010,
    "genre": "Sci-Fi",
    "synopsis": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
    "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    "image": "https://example.com/inception.jpg"
  }
  ```

- Validaciones:
  Asegúrate de validar que todos los campos requeridos sean proporcionados.
  Maneja errores comunes (por ejemplo, al intentar consultar una película que no existe).

## Frontend

- Estructura:

  Usa el proyecto base suministrado en React para construir la UI.
  Configura una capa de servicios para conectar con los endpoints del backend.

- Requisitos funcionales:

  - Listado de películas:
    Muestra las películas en cards con la imagen, título y género.
    Al hacer clic en una card, debe mostrar el detalle de la película (navegación a un componente o vista de detalle).
  - Detalle de película:
    Muestra el resto de los datos: año, sinopsis, reparto, e imagen en un diseño claro.
  - Creación de películas:
    Implementa un formulario para agregar una nueva película.
    Envía los datos al backend utilizando el endpoint POST /movies.

- Estilo:

  Usa las dependencias ya incluidas en el proyecto base para los estilos (puedes usar CSS adicional si es necesario).
