const express = require('express');
const { storage } = require('./storage/storage');
const multer = require('multer');
const upload = multer({ storage });
const cors= require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('//website.com');
});

app.post('/upload', upload.single('post'), async(req, res) => {
  res.json(req.file);
  console.log(req.file)
})

app.listen(3000, () => {
  console.log('server started');
});
