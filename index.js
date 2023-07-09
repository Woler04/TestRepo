const express = require("express");
const mySql = require('mysql2');
const app = express();

app.use(express.static('public'));
console.log("running...");

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'views' });
});

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM test_users;', (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Error retrieving data');
        return;
      }
  
      res.json(results);
    });
  });

//////////////////////////////////////////

const connection = mySql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'test_schema'
    }
);

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Connected to the database');
    }
  });

  //////////////////////////////////////////

  const port = 3000;
  app.listen(port, ()=> {
    console.log(`server is listenting on "http://localhost:${port}"`);
  });