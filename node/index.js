const mysql = require('mysql');
const db_config = {
  host: 'app_db',
  user: 'root',
  password: 'root',
  database:'peopledb'
};

const connection = mysql.createConnection(db_config);

const bootstrap = async () => {
  const express = require('express');
  const random_name = require('node-random-name');
  const app = express();  
  
  app.get('/', (req, res) => {
    insert_people(random_name());
    res.send('<h1>Full Cycle Rocks!</h1>');
  })

  const port = 3000;
  app.listen(port, () => {
    console.log(`servidor iniciado na porta ${port}`);
  });
}

const insert_people = (name) => {
  const sql = `INSERT INTO people(name) values('${name}')`
  connection.query(sql, () => {
    console.log(`${name} inserido`);
  });
}

bootstrap();