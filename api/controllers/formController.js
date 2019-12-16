//Will manage all form received

var Eleve = require('../models/EleveModel.js');
var Tuteur = require('../models/TuteurModel.js');
var Entreprise = require('../models/EntrepriseModel.js');
var Stage = require('../models/StageModel.js');

exports.FormEleve = function(req, res){
  
  //Verification du tuteur crée si non existe
  var idtuteur = 0;
  var new_tuteur = new Tuteur(req.body);
  Tuteur.getTuteurId(new_tuteur,function(err, result) {
    if (err)
      res.status(500).send(err);
    if (!(result && result.length)){
      console.log("not found")
      Tuteur.createTuteur(newTuteur, function(err, tuteurId) {
        if (err)
          res.status(500).send(err);
        console.log(tuteurId)
      })
    }else {
      console.log(result);
    }
  })

  //Verification du Entreprise crée si non existe
  var idens = 0;
  var new_entreprise = new Tuteur(req.body);
  Entreprise.getEntrepriseId(new_entreprise,function(err, result) {
    if (err)
      res.status(500).send(err);
    if (!(result && result.length)){
      console.log("not found")
      Entreprise.createEntreprise(new_entreprise, function(err, entrepriseId) {
        if (err)
          res.status(500).send(err);
        console.log(entrepriseId)
      })
    }else {
      console.log(result);
    }
  })

  //Crée le stage
  var new_stage = new Stage(req.body, idtuteur, idens);
  Stage.createStage(new_stage, function(err, result){
    if (err)
      res.status(500).send(err);
    if (result && result.length){
      res.status(200).send(result);
    }
  })
}
