const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/User');
const assert = require('assert');
const Assert = require('assert');

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
  // Form validation

  const {errors, isValid} = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({phone: req.body.phone}).then(user => {
    const newUser = new User({
      name: req.body.name,
      group: req.body.group,
      phone: req.body.phone,
      card: req.body.card,
      family: req.body.family
    });
    newUser
      .save()
      .then(user => res.json(user))
      .catch(err => console.log(err));
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {
  // Form validation

  const {errors, isValid} = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const phone = req.body.phone;

  // Find user by phone
  User.findOne({phone}).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({groupNotFound: 'Phone not found'});
    }

    // Check phone
    if (phone === user.phone) {
      // User matched
      // Create JWT Payload
      const payload = {
        id: user.id,
        name: user.name,
        group: user.group,
        card: user.card,
        family: user.family
      };

      // Sign token
      jwt.sign(
        payload,
        keys.secretOrKey,
        {
          expiresIn: 31556926 // 1 year in seconds
        },
        (err, token) => {
          res.json({
            success: true,
            token: 'Bearer ' + token
          });
        }
      );
    } else {
      return res
        .status(400)
        .json({phoneIncorrect: 'phone incorrect'});
    }
  });
});

module.exports = router;
