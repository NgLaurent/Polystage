'use strict';

var Question = require('../models/QuestionModel.js');

exports.getQuestionsByCat = function(req, res) {
  Question.list_QuestionsByCat(req.params.id, function(err,questions){
    if (err)
      res.status(500).send(err);
    if (questions && questions.length){
      let queryTitle = "SELECT name FROM categorie WHERE idcat = ?";
      db.query(queryTitle, [req.params.id], (err, title) => {
          if (err) {
              res.status(500).send(err);
          }
          if (title && title.length){
              res.status(200).send({questions: questions,
                                  title: title[0].name});
          }else{
              res.status(401).send("Pas de titre dans cette catégorie");
          }
      })
    }else {
      res.status(401).send("No questions were found");
    }
  })
}










/*module.exports = {
    QuestionsByCat: (req, res) => {
      var categorie = req.params.id;

      let query = "SELECT * FROM questions WHERE cat = ?";
      let queryTitle = "SELECT name FROM categorie WHERE idcat = ?";

        // execute query
        db.query(query, [categorie], (err, result) => {
            if (err) {
                res.status(500).send(err);
            }
            if (result && result.length){
                db.query(queryTitle, [result[0].cat], (err, title) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    if (result && result.length){
                        res.status(200).send({questions: result,
                                            title: title[0].name});
                    }else{
                        res.status(401).send("Pas de titre dans cette catégorie");
                    }
                })
            }else{
                res.status(401).send("Pas de questions dans cette catégorie");
            }
        });
    },
  }; */
