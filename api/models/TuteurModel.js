'user strict';

//Task object constructor
var Tuteur = function(tuteur){
    this.nom = tuteur.nom;
    this.prenom = tuteur.prenom;
    this.email = tuteur.email;
};

Tuteur.getAllTuteur = function (result) {

        var query = "Select * from tuteurs"
        db.query(query, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                 result(null, res);
                }
            });
};

Tuteur.getTuteurId = function (tuteur, result) {
        db.query("Select idtuteur from tuteurs where nom = ? AND prenom = ? AND email = ? ", tuteur, function (err, res) {
                if(err) {
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};

Tuteur.createTuteur = function (newTuteur, result) {
        db.query("INSERT INTO tuteurs set ?", newTuteur, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res.insertId);
                }
            });
};

module.exports= Tuteur;
