var router = require('express').Router();
var TYPES = require('tedious').TYPES;


router.get('/', function (req, res) {
    req.sql("SELECT * FROM review for json path")
        .into(res, '[]');
});


router.get('/:id', function (req, res) {   
    req.sql("SELECT * FROM review WHERE id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');
});


router.post('/', function (req, res) {   
    req.sql("exec create_review @calification, @description, @id_user, @rev_date, @id_blog")
        .param('calification', req.body.calification, TYPES.Int)
        .param('description', req.body.description, TYPES.Text)
        .param('id_user', req.body.id_user, TYPES.Int)
        .param('rev_date', req.body.rev_date, TYPES.Date)
        .param('id_blog', req.body.rev_date, TYPES.Int)
        .exec(res);
});


router.put('/', function (req, res) {
    req.sql("exec update_review @rev_id, @calification, @description, @id_user, @rev_date, @id_blog")
    .param('rev_id', req.body.rev_id, TYPES.Int)
    .param('calification', req.body.calification, TYPES.Int)
    .param('description', req.body.description, TYPES.Text)
    .param('id_user', req.body.id_user, TYPES.Int)
    .param('rev_date', req.body.rev_date, TYPES.Date)
    .param('id_blog', req.body.rev_date, TYPES.Int)
    .exec(res);
});

router.delete('/:rev_id', function (req, res) {
    req.sql("exec delete_review @rev_id")
        .param('rev_id', req.params.id, TYPES.Int)
        .exec(res);
});

module.exports = router;