import express from 'express';  // Importa el módulo express
import connectToDatabase from './database.js';  // Importa la conexión a la base de datos
import { config } from 'dotenv';  // Importa el módulo dotenv para manejar variables de entorno
config();  // Carga las variables de entorno desde el archivo .env

const app = express();  // Crea una instancia de la aplicación express
app.use(express.json());  // Middleware para parsear JSON

// Ruta raíz que responde con 'Hello World'
app.get('/', (req, res) => {
    res.send(`Hola, estoy en el entorno: ${process.env.NODE_ENV}`);
  });

// Ruta para obtener todos los registros de la tabla fabricante
app.get('/api/fabricantes', async(req, res) => {
    try {
        const pool = await connectToDatabase();  // Conecta a la base de datos
        const [rows] = await pool.query("SELECT * FROM fabricante");  // Ejecuta la consulta SQL
        res.json(rows);  // Responde con los registros en formato JSON
    } catch (error) {
        res.status(500).json({ message: "Something goes wrong" });  // Manejo de errores
    }
});

// Iniciar el servidor
const PORT = process.env.APP_PORT_CONTAINER || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});