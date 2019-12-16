'user strict';

//Task object constructor
var Entreprise = function(entreprise){
    this.sigle = entreprise.sigle;
    this.nomcomplet = entreprise.nomcomplet;
};

Entreprise.getAllEntreprise = function (fields,result) {
        let fields_search = "*"
        if (fields) {
          fields_search = fields
        }
        var query = "Select "+fields_search+ " from entreprise"
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

Entreprise.getEntrepriseId = function (entreprise, result) {
        db.query("Select * from entreprise where sigle = ? AND nomcomplet = ? ", entreprise, function (err, res) {
                if(err) {
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};

Entreprise.createEntreprise = function (newEntreprise, result) {
        db.query("INSERT INTO entreprise set ?", newEntreprise, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res.insertId);
                }
            });
};
module.exports= Entreprise;
