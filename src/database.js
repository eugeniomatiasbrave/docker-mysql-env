import mysql from 'mysql2/promise';

async function connectToDatabase() {
  try {
    const Pool = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log('Conexión a la base de datos exitosa');
    return Pool;
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error.message);
    process.exit(1); // Terminar el proceso si hay un error grave
  }
}

export default connectToDatabase;
