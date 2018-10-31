const modules = require('../db');
const router = require('express').Router();
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/create', [
  check('email', 'must be of email format').isEmail(),
  check('password', 'Password must be 6 or more characters').isLength({ min: 8, max: 100 }),
  check('password', "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
  check('password').custom((value,{req}) => {
    if (value !== req.body.rePassword && value.length >= 8) {
        // trow error if passwords do not match
        throw new Error("Passwords don't match");
    } else {
      return true;
    }})
], (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }

  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
  modules.User.findOrCreate({
    where: {
      email: req.body.email,
      password: hash,
    }
  })
  .then(data => res.json(data))
  .catch(error => res.send(error))
  });
})

module.exports = router