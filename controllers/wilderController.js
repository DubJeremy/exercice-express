import { validationResult } from "express-validator";
import Wilders from "../models/Wilders";
import { listErrors } from "../utilities/tools"


const methods = {
    create : (req, res, next) => {
        const {name, city, skills} = req.body;
        
        
        console.log("Wilder is coming...")
        
        Wilders
        .init()
        .then(() => {
            const wilder = new Wilders({
                name,
                city,
                skills
            });

            const errorsValidator = validationResult(req)
            if (!errorsValidator.isEmpty()) {
                return res.status(422).json({ errors: errorsValidator.array() })
            }

            wilder
                .save()
                .then((result) => {
                    console.log('success', result);
                    res.json({success: true, result: result})
            })
                .catch((err) => {
                    
                    res.json({
                        success: false, 
                        result: listErrors(err),
                    });
                });
        });
        // next();
    }
};

export default methods;
