var router = require('express').Router();
var TYPES = require('tedious').TYPES;


router.get('/', function (req, res) {
    req.sql("SELECT * FROM thematic for json path")
        .into(res, '[]');
});


router.get('/:id', function (req, res) {
    req.sql("SELECT * FROM thematic where id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');
});


router.post('/', function (req, res) {
    req.sql("exec create_thematic @study_area, @thematic_name")
        .param('study_area', req.body.study_area, TYPES.VarChar)
        .param('thematic_name', req.body.thematic_name, TYPES.VarChar)
        .exec(res);
});


router.put('/', function (req, res) {
    req.sql("exec update_thematic @id, @study_area, @thematic_name")
    .param('thematic_id', req.body.thematic_id, TYPES.Int)
    .param('study_area', req.body.study_area, TYPES.VarChar)
    .param('thematic_name', req.body.thematic_name, TYPES.VarChar)
    .exec(res);
});

router.delete('/:thematic_id', function (req, res) {
    req.sql("execdelete_thematic @thematic_id")
        .param('thematic_id', req.params.thematic_id, TYPES.Int)
        .exec(res);
});

module.exports = router;