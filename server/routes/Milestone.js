var router = require('express').Router();
var TYPES = require('tedious').TYPES;


router.get('/', function (req, res) {
    req.sql("SELECT * FROM milestone for json path")
        .into(res, '[]');
});


router.get('/:id', function (req, res) {
    req.sql("SELECT * FROM milestone WHERE id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');
});


router.post('/', function (req, res) {
    req.sql("exec create_milestone @mil_name, @mil_description, @mil_start_date, @mil_finish_date, @tag, @id_member")
        .param('mil_name', req.body.mil_name, TYPES.VarChar)
        .param('mil_description', req.body.description, TYPES.Text)
        .param('mil_start_date', req.body.mil_start_date, TYPES.Date)
        .param('mil_finish_date', req.body.mil_finish_date, TYPES.Date)
        .param('tag', req.body.tag, TYPES.VarChar)
        .param('id_member', req.body.id_member, TYPES.Int)
        .exec(res);
});


router.put('/', function (req, res) {
    req.sql("exec update_milestone @mil_id, @mil_name, @mil_description, @mil_start_date, @mil_finish_date, @tag, @id_member")
    .param('mil_id', req.body.mil_id, TYPES.Int)
    .param('mil_name', req.body.mil_name, TYPES.VarChar)
    .param('mil_description', req.body.description, TYPES.Text)
    .param('mil_start_date', req.body.mil_start_date, TYPES.Date)
    .param('mil_finish_date', req.body.mil_finish_date, TYPES.Date)
    .param('tag', req.body.tag, TYPES.VarChar)
    .param('id_member', req.body.id_member, TYPES.Int)
    .exec(res);
});

router.delete('/:id', function (req, res) {
    req.sql("exec delete_milestone @mil_id")
        .param('mil_id', req.params.mil_id, TYPES.Int)
        .exec(res);
});

module.exports = router;