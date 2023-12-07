const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hai, Alvina Cantik!')
});

app.get('/kampus', (req, res) => {
    res.json({Politeknik_negeri_banyuwangi: 'informatika'})
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});