import  express from 'express'
import fs from 'fs';
import path from 'path'
const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.static(path.resolve('./build', 'build')));

app.get('*', (req, res) => {
  fs.readFile(path.resolve('./publid/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
      return res.status(500).send('There was an error')
    };
    return res.send(data);
  });
});

app.listen(PORT, () => {
  console.log('Server is listening')
});



