import { validationResult } from "express-validator";
import Wilder from "../models/Wilders";
import { listErrors } from "../utilities/tools"


const methods = {
    create : (req, res, next) => {
        const {name, city, skills} = req.body;
        
        
        console.log("Wilder is coming...")
        
        Wilder
        .init()
        .then(() => {
            const wilder = new Wilder({
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
    },
    // readAll : (req, res, next) => {
    //     Wilder.find()
    //       .then(wilders => res.status(200).json(( wilders )))
    //       .catch(error => res.status(400).json({ error }));
    // },
    readAll : (req, res, next) => {
        let result = [];

        Wilder.find()
            .then((result) => {
            res.json({success: true, result: result})
            })
            .catch((err) => {
                res.json({success: false, result: listErrors(err)})
        })
    },
    // readOne : (req, res, next) => {
    //     Wilder.find({ _id: req.params.id })
    //       .then(wilder => res.status(200).json(( wilder )))
    //       .catch(error => res.status(400).json({ error }));
    // },
    readOne : (req, res, next) => {
        const {_id} = req.params;
        Wilder.findOne({_id})
            .then((result) => {
                if (!result) {
                   return res.json({
                       success: false, 
                       result: result})
                }
                res.json
            })
            .catch((err) => {
                console.log(err)
        })
    },
    // update : (req, res, next) => {
    //     Wilder.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    //       .then(() => res.status(200).json({ message: 'Wilder modifié !'}))
    //       .catch(error => res.status(400).json({ error }));
    // },
    update : (req, res, next) => {
        const {_id, name, city, skills} = req.body;
        Wilder.updateOne({_id}, {name, city, skills})
            .then((result) => {
                console.log("SUCCESS", result);
                if (result.matchedCount === 0) {
                    return res.json({
                        success: false,
                        result: 'ID n\'existe pas',
                    });
                }
                res.json({success: true, result});
            })
            .catch((err) => {
                res.json({ success: false, result: listErrors(err)});
            });
    },
    // delete : (req, res, next) => {
    //     Wilder.deleteOne({ _id: req.params.id })
    //         .then(() => res.status(200).json({ message: "Wilder supprimé !"}))
    //         .catch(error => res.status(404).json({ error }));
    // },
    delete : (req, res, next) => {
        const { _id } = req.body;
        Wilder.deleteOne({ _id })
            .then((result) => {
                if (result.deletedCount === 0){
                     return res.json({
                        success: false,
                        result: "Cet ID n'existe pas"
                    });    
                }
                res.status(200).json({ success: true , result  , message: "Wilder supprimé !"});
            })
            .catch((err) => res.status(404).json({ err }));
    }

};

export default methods;
