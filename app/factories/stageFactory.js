simpleApp.factory('stageFactory', function ($http) {
    return {
        createStage: function (data) {
            return $http({
                method: 'POST',
                url: 'http://localhost:8080/forms/eleve',
                data: data
            })
        },
        editStage: function (idstage, data) {
            return $http({
                method: 'PUT',
                url: 'http://localhost:8080/stages/' + idstage,
                data: data
            })
        },
        getEleveStages: function (id) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/stages/eleves/' + id
            })
        },
        getCurrentStageEleve: function (annee, idEleve) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/current/eleve/stage',
                params: { "annee": annee, "eleveId": idEleve }
            })
        },
        getTuteurStages: function (id) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/stages/tuteurs/' + id
            })
        },
        getCurrentStageTuteur: function (annee, idTuteur) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/current/tuteur/stage',
                params: { "annee": annee, "tuteurId": idTuteur }
            })
        },
        getEnsStages: function (id) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/stages/ens/' + id
            })
        },
        getCurrentStageEns: function (annee, idEns) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/current/ens/stage',
                params: { "annee": annee, "ensId": idEns }
            })
        },
        getStageById: function (idStage) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/stages/' + idStage
            })
        },
        getStageByIdForEval: function (idStage) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/stages/eval/' + idStage
            })
        }
    }
})
