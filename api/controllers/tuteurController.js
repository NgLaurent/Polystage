'use strict';

var Tuteur = require('../models/TuteurModel.js');

exports.list_all_tuteurs = function(req, res) {
  Tuteur.getAllTuteur(function(err, tuteurs) {

    if (err)
      res.send(err);
    res.send(tuteurs);
  });
};






/*module.exports = {
  newTuteur: (req, res) => {
    var email = req.body.email;
    var nom = req.body.nom;
    var prenom = req.body.prenom;
    var identreprise = req.body.identreprise;

    let query = "SELECT idtuteur FROM tuteurs WHERE email = ?";
    db.query(query, [email], (err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        if (result && result.length){
          res.status(200).send(result);
        }else{
          let queryCreate = "INSERT INTO tuteurs SET ?"
          db.query(queryCreate, [{nom:nom, prenom:prenom,email:email, identreprise:identreprise}], (err, newid) => {
            if (err) {
                res.status(500).send(err);
            }
            if (result && result.length){
              res.status(200).send(newid.insertId);
            }
            else {
              res.status(401).send("Failed");
            }
          })
        }
      })
  },
}; */
