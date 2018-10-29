const modules = require('../db');
const router = require('express').Router();

router.post('/create', (req, res) => {
  console.log(req.body.email);
  console.log(req.body.password);
  console.log(req.body)
  modules.User.findOrCreate({
    where: {
      email: req.body.email,
      password: req.body.password,
    }
  }).then(data => {
    res.send(data);
  }).catch(error => {
    res.send(error)
  })
})

module.exports = router