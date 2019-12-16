'user strict';

//Task object constructor
var Stage = function(stage, idtuteur, idens){
    this.ideleve = stage.ideleve;
    this.niveau = stage.niveau;
    this.annee = stage.annee;
    this.idtuteur = idtuteur;
    this.idens = idens;
    this.datedebut = stage.datedebut;
    this.datefin = stage.datefin;
};


Stage.getAllStage = function (result) {
        var query = "Select * from stage"
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

Stage.createStage = function (newStage, result) {
        db.query("INSERT INTO stage set ?", newStage, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res.insertId);
                }
            });
};

module.exports= Stage;
