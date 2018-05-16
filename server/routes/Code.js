var router = require('express').Router();
var TYPES = require('tedious').TYPES;


router.get('/', function (req, res) {
    req.sql("SELECT * FROM code for json path")
        .into(res, '[]');
});


router.get('/:id', function (req, res) {
    req.sql("SELECT * FROM code WHERE id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');
});


router.post('/', function (req, res) {
    req.sql("exec create_code @title, @notes, @body, @upload_user_id")
        .param('title', req.body.title, TYPES.VarChar)
        .param('notes', req.body.notes, TYPES.Text)
        .param('body', req.body.body, TYPES.Text)
        .param('upload_user_id', req.body, TYPES.Int)
        .exec(res);
});


router.put('/', function (req, res) {
    req.sql("exec update_code @code_id, @title, @notes, @body, @upload_user_id")
    .param('code_id', req.body.code_id, TYPES.Int)
    .param('title', req.body.title, TYPES.VarChar)
    .param('notes', req.body.notes, TYPES.Text)
    .param('body', req.body.body, TYPES.Text)
    .param('upload_user_id', req.body, TYPES.Int)
    .exec(res);
});

router.delete('/:code_id', function (req, res) {
    req.sql("exec delete_code @code_id")
        .param('code_id', req.params.code_id, TYPES.Int)
        .exec(res);
});

module.exports = router;