import express from 'express';  // Importa el módulo express
import { createPool } from "mysql2/promise";  // Importa el módulo mysql2/promise para manejar conexiones a MySQL
import { config } from 'dotenv';  // Importa el módulo dotenv para manejar variables de entorno
config();  // Carga las variables de entorno desde el archivo .env

const app = express();  // Crea una instancia de la aplicación express
app.use(express.json());  // Middleware para parsear JSON

// Crea un pool de conexiones a MySQL usando las variables de entorno
const pool = createPool({
    host: process.env.MYSQL_HOST,
    user: "root",
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_DOCKER_PORT
});

// Ruta raíz que responde con 'Hello World'
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Ruta para obtener todos los registros de la tabla fabricante
app.get('/api/fabricantes', async(req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM fabricante");  // Ejecuta la consulta SQL
        res.json(rows);  // Responde con los registros en formato JSON
    } catch (error) {
        res.status(500).json({ message: "Something goes wrong" });  // Manejo de errores
    }
});

// Inicia el servidor en el puerto definido en las variables de entorno
app.listen(process.env.NODE_DOCKER_PORT, () => {
    console.log(`Server is running on port ${process.env.NODE_DOCKER_PORT}`);
});