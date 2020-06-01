import express from 'express';

const app = express();

app.get('/users', (request, response) => {
   response.json([
       'Diego',
       'Cleiton',
       'Robson',
       'Daniel'
   ]);
})

app.listen(3333)