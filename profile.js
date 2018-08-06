var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.render('index')
})
// define the about route
router.get('/about', function (req, res) {
  res.render('contact')
})

router.get('/philosophy', function (req, res) {
  res.render('philosophy')
})

router.get('/projects', function (req, res) {
  res.render('projects')
})

router.get('/thankyou', function (req, res) {
  res.render('thanks')
})

module.exports = router