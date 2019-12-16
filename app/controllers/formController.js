controllers.controller('formController', function ($scope, $rootScope, questionsFactory, entreprisesFactory, enseignantsFactory) {
  $scope.createStage = function (nometu, prenometu, idenseignant, nomtuteur, prenomtuteur, emailtuteur, nomentreprise,
    adresseentreprise, titrestage, descriptionstage, emailstage, debutstage, finstage) {
    console.log(nometu)
    console.log(prenometu)
    console.log(idenseignant)
    console.log(nomtuteur)
    console.log(prenomtuteur)
    console.log(emailtuteur)
    console.log(nomentreprise)
    console.log(adresseentreprise)
    console.log(titrestage)
    console.log(descriptionstage)
    console.log(emailstage)
    console.log(debutstage)
    console.log(finstage)

    //TODO
  }

  $scope.update = function () {
    // $scope.$apply()
    console.log("ok")
  }

  questionsFactory.getQuestionsByCat(1)
    .then(function (success) {
      $scope.categorie1 = success.data
    }, function (error) {
      console.log(error)
    })

  questionsFactory.getQuestionsByCat(2)
    .then(function (success) {
      $scope.categorie2 = success.data
    }, function (error) {
      console.log(error)
    })

  entreprisesFactory.getEntreprises()
    .then(function (success) {
      $scope.entreprises = success.data
    }, function (error) {
      console.log(error)
    })

  entreprisesFactory.getEntreprisesName()
    .then(function (success) {
      $scope.entreprisesName = []
      for (var i = 0 in success.data)
        $scope.entreprisesName.push(success.data[i].nomcomplet)
      //initialisation de l'autocomplete avec les données souhaitées
      $('#nomentreprise').mdbAutocomplete({
        data: $scope.entreprisesName
      })
    }, function (error) {
      console.log(error)
    })

  enseignantsFactory.getEnseignants()
    .then(function (success) {
      $scope.enseignants = success.data
    }, function (error) {
      console.log(error)
    })

  $(document).ready(function () {
    $('.mdb-select').materialSelect();
    $('.datepicker').pickadate({
      min: new Date(),
      monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre',
        'Novembre', 'Décembre'],
      weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
      today: 'aujourd\'hui',
      clear: 'effacer',
      format: 'ddd d mmmm yyyy',
      formatSubmit: 'dd/mm/yyyy'
    })
  })
  $rootScope.checkConnexion()
})