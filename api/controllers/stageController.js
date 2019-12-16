'use strict';

var Stage = require('../models/StageModel.js');

exports.list_all_stages = function(req, res) {
  Stage.getAllStage(function(err, stages) {

    if (err)
      res.send(err);
    res.send(stages);
  });
};
