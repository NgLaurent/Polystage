'use strict';

var Eleve = require('../models/EleveModel.js');
var Enseignant = require('../models/EnseignantModel.js')

exports.authentification = function(req, res) {
  Eleve.getEleveAuth(req.query.username, req.query.password, function(err, result) {
    if (err)
      res.status(500).send(err);
    if (result && result.length){
      Eleve.getEleveById(result[0].ideleve, function(err, eleve){
        eleve[0].role = "eleve";
        res.status(200).send(eleve);
      })
    }else {
      Enseignant.getEnsAuth(req.query.username, req.query.password, function(err, resEns) {
        if (err)
          res.status(500).send(err);
        if (resEns && resEns.length){
          result[0].role = "enseignant";
          res.status(200).send(resEns);
        }else {
          res.status(401).send("Authentification Failed");
        }
      })
    }
  });
};
