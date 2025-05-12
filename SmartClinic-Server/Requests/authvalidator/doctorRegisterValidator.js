const { body } = require('express-validator');

const validateDoctor = [
  body('name')
    .notEmpty().withMessage('Name is required')
    .isString().withMessage('Name must be a string'),

  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Email is not valid'),

  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

  body('yearsExperience')
    .isInt({ min: 0 }).withMessage('Years of experience must be a non-negative integer'),

  body('profilePicture')
    .notEmpty().withMessage('Profile picture is required')
    .isString().withMessage('Profile picture must be a string'),
];

export default validateDoctor;
