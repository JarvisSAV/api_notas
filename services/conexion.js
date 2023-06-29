// import dotenv from 'dotenv'
import mysql from 'mysql2'
// dotenv.config()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api_notes',
    port: 3306,
    // ssl: {"rejectUnauthorized":true}
  });

  connection.connect((error) => {
    if (error) {
      console.error('Error connecting to MySQL database:', error)
      return
    }
    console.log('Connected to MySQL database.')
  });

export default connection