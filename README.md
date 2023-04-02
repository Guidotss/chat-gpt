
# Chat-GPT clone 

Este es un clon del proyecto [Chat-GPT](https://chat.openai.com/chat) de OpenAI. El objetivo es crear un chatbot que pueda responder a preguntas de forma natural. Para ello se ha utilizado el modelo [GPT-3](https://openai.com/blog/gpt-3-apps/) de OpenAI.

## Instalación

Para instalar el proyecto, se debe ejecutar el siguiente comando:

```bash

npm install

# o 

yarn install


```

## Ejecución

1. Cambiar el nombre del archivo `.template.env` a `.env` y agregar las variables de entorno.
2. Reemplazar el valor de la variable `OPENAI_API_KEY` con la API key de OpenAI.
3. Reemplazar el valor de la variable de entorno `MONGO_URL` con la URL de la base de datos de MongoDB.
4. Reemplazar el valor de la variable de entorno `JWT_SECRET` con una cadena de texto aleatoria.

Para ejecutar el proyecto de forma local, se deben ejecutar los  siguientes comandos:

```bash
docker-compose up -d
```

este comando levantará un contenedor de MongoDB.

```bash

npm install

# o 

yarn install

```

este comando instalará las dependencias del proyecto.

```bash

npm run dev

# o

yarn dev

```

este comando ejecutará el proyecto en modo desarrollo.

## Ejecutar en producción

Para ejecutar el proyecto en producción, se deben ejecutar los siguientes comandos:

```bash

npm run build

# o

yarn build

```

este comando creará la carpeta `build` con el código compilado del proyecto.

```bash

npm run start

# o

yarn start

```

este comando ejecutará el proyecto en modo producción.


## Uso

Para usar el proyecto, se debe acceder a la ruta `http://localhost:3000/` y se podrá ver la aplicación.

### Rutas de la API

- `POST /api/auth/login` - Iniciar sesión.
- `POST /api/auth/register` - Registrar usuario.
- `POST /api/auth/validate-token` - Validar token de acceso del usuario.
- `POST /api` - Enviar mensaje al chatbot.

### Servicios

#### `UserService`

Este servicio se encarga de manejar la lógica de negocio de los usuarios.

##### Metodos de `UserService`

- `hashPassword(password: string)` - Encripta una contraseña y retorna una promesa con el hash de la contraseña.
-  `comparePassword(password: string, hash: string)` - Compara una contraseña con un hash y retorna una promesa con un booleano indicando si la contraseña es correcta.

- `register(name:string, email:string, password:string)` - Registra un usuario en la base de datos y retorna una promesa con el usuario registrado o un booleano indicando si el usuario ya existe.
- `login(email:string, password:string)` - Inicia sesión con un usuario y retorna una promesa con el usuario o un booleano indicando si el usuario no existe o la contraseña es incorrecta.
- `getUserById(id:string)` - Retorna una promesa con un usuario o un booleano indicando si el usuario no existe.


## Tecnologías

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [OpenAI](https://openai.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [JWT](https://jwt.io/)
- [Mongoose](https://mongoosejs.com/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
## Licencia

[MIT](https://choosealicense.com/licenses/mit/)

## Contribución

Las contribuciones son bienvenidas. Para contribuir, se debe crear un fork del proyecto, realizar los cambios y crear un pull request.

## Autor

[@Guidotss](https://github.com/Guidotss)





