'use strict';
module.exports = function(app) {
  var EntrepriseControlleur = require('../controllers/entrepriseController');
  var EnseignantControlleur = require('../controllers/enseignantController');
  var EleveControlleur = require('../controllers/eleveController');
  var TuteurControlleur = require('../controllers/tuteurController');
  var StageControlleur = require('../controllers/stageController');
  var Authentification = require('../controllers/authentificationController');
  var FileControlleur = require('../controllers/fileController');
  var QuestionControlleur = require('../controllers/questionController');
  var FormControlleur = require('../controllers/formController');

  app.route('/entreprises')
    .get(EntrepriseControlleur.list_all_entreprises);

  app.route('/enseignants')
    .get(EnseignantControlleur.list_all_enseignants);

  app.route('/eleves')
    .get(EleveControlleur.list_all_eleve);

  app.route('/eleves/:eleveId')
    .get(EleveControlleur.get_eleve_infos);

  app.route('/tuteurs')
    .get(TuteurControlleur.list_all_tuteurs);

  app.route('/stages')
    .get(StageControlleur.list_all_stages);

  app.route('/authentification')
    .get(Authentification.authentification);

  app.route('/upload')
    .post(FileControlleur.uploadFile);

  app.route('/questionsByCat/:id')
    .get(QuestionControlleur.getQuestionsByCat);

  app.route('/forms/eleve')
    .post(FormControlleur.FormEleve);
};
