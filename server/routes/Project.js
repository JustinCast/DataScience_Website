var router = require('express').Router();
var TYPES = require('tedious').TYPES;


router.get('/', function (req, res) {
    req.sql("SELECT * FROM project for json path")
        .into(res, '[]');
});


router.get('/:id', function (req, res) {
    req.sql("SELECT * FROM project where id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');
});


router.post('/', function (req, res) {
    req.sql("exec create_project @start_date, @finish_date")
        .param('start_date', req.body.start_date, TYPES.Date)
        .param('finish_date', req.body.finish_date, TYPES.Date)
        .exec(res);
});


router.put('/:id', function (req, res) {
    req.sql("exec update_project @id_project, @start_date, @finish_date")
    .param('id_project', req.body.id_project, TYPES.Int)
    .param('start_date', req.body.start_date, TYPES.Date)
    .param('finish_date', req.body.finish_date, TYPES.Date)
    .exec(res);
});

router.delete('/:id_project', function (req, res) {
    req.sql("exec delete_project @id_project")
        .param('id_project', req.params.id_project, TYPES.Int)
        .exec(res);
});

module.exports = router;