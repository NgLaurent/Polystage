'use strict';

var Entreprise = require('../models/EntrepriseModel.js');

exports.list_all_entreprises = function(req, res) {
  Entreprise.getAllEntreprise(req.query.fields, function(err, entreprises) {

    if (err)
      res.send(err);
    res.send(entreprises);
  });
};




/*module.exports = {
  newEntreprise: (req, res) => {
    var nom = req.body.nom;
    let query = "SELECT identreprise FROM entreprises WHERE nomcomplet = ?";
    db.query(query, [nom], (err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        if (result && result.length){
          res.status(200).send(result);
        }else{
          let queryCreate = "INSERT INTO entreprises SET ?"
          var sigle = nom.substring(0,2);
          db.query(queryCreate, [{sigle:sigle, nomcomplet:nom}], (err, newid) => {
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
    }
}
*/
