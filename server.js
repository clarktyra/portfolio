const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
//var profile = require('./profile');
const FormData = require('form-data');


const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('dist'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    const data = {
        person: {
            firstName: 'Clark',
            lastName: 'Tyra',
        }
    }
    res.render('index', data);
});

app.get('/contact', (req, res) => {
    res.render('contact');
  });

app.get('/philosophy', (req, res) => {
    res.render('philosophy');
  });

app.get('/projects', (req, res) => {
    res.render('projects');
  });
  
app.post('/thanks', (req, res) => {
    const url = 'https://script.google.com/macros/s/AKfycbx-0KZiBTHAxwzi4ZXNLxPoYcp529OqOHMRzRgX26EkYSbiiAc/exec'  
   const data = new FormData();
   const fields = Object.keys(req.body);
   console.log(fields);
   fields.forEach(field => {
       data.append(field, req.body[field])
   })
   const config = { headers: { 'Content-Type': 'multipart/form-data' } }
   data.submit(url, function(err, res) {
       console.log(res);  
   });
    
    res.render('thanks', { contact: req.body })
  });

//app.use('/profile', profile);

app.listen(8080, () => {
    console.log('listening at http://localhost:8080');
});



