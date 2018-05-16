var router = require('express').Router();
var TYPES = require('tedious').TYPES;


router.get('/', function (req, res) {
    req.sql("SELECT * FROM investigation for json path")
        .into(res, '[]');
});


router.get('/:id', function (req, res) {
    req.sql("SELECT * FROM investigation WHERE id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');
});


router.post('/', function (req, res) {
    req.sql("exec create_investigation @inv_name, @inv_description, @inv_start_date, @inv_finish, @inv_project")
        .param('inv_name', req.body.inv_name, TYPES.VarChar)
        .param('inv_description', req.body.inv_description, TYPES.Text)
        .param('inv_start_date', req.body.inv_start_date, TYPES.Date)
        .param('inv_finish', req.body.inv_finish, TYPES.Date)
        .param('inv_project', req.body.inv_project, TYPES.Int)
        .exec(res);
});


router.put('/', function (req, res) {
    req.sql("exec update_investigation @inv_id, @inv_name, @inv_description, @inv_start_date, @inv_finish, @inv_project")
    .param('inv_id', req.body.inv_id, TYPES.Int)
    .param('inv_name', req.body.inv_name, TYPES.VarChar)
    .param('inv_description', req.body.inv_description, TYPES.Text)
    .param('inv_start_date', req.body.inv_start_date, TYPES.Date)
    .param('inv_finish', req.body.inv_finish, TYPES.Date)
    .param('inv_project', req.body.inv_project, TYPES.Int)
    .exec(res);
});

router.delete('/:inv_id', function (req, res) {
    req.sql("exec delete_investigation  @inv_id")
        .param('inv_id', req.params.inv_id, TYPES.Int)
        .exec(res);
});

module.exports = router;