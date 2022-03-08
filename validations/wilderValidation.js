import { body, validationResult } from "express-validator";

export const create = [
    body("name")
        .isLength({ min: 4 })
        .withMessage('min 4 char'),
        (req, res) => {
            const errorsValidation = validationResult(req);
            if (!errorsValidation.isEmpty()) {
              let errors = {};

              errorsValidation.errors.map((err) => {
                errors = {...errors, [err.param]: err.msg}
              })
  
              res.json({
                  success: false,
                  result: errors
              })
            } else {
              next()
            }
        }
]