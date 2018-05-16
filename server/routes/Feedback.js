var router = require('express').Router();
var TYPES = require('tedious').TYPES;


router.get('/', function (req, res) {
    req.sql("SELECT * FROM feedback for json path")
        .into(res, '[]');
});


router.get('/:id', function (req, res) {   
    req.sql("SELECT * FROM feedback WHERE id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');
});


router.post('/', function (req, res) {   
    req.sql("exec create_feedback @feedb_name, @feedb_date, @feedb_description, @feedb_edit_date")
        .param('feedb_name', req.body.feedb_name, TYPES.VarChar)
        .param('feedb_date', req.body.feedb_date, TYPES.Date)
        .param('feedb_description', req.body.feedb_description, TYPES.Text)
        .param('feedb_edit_date', req.body.feedb_edit_date, TYPES.Date)
        .exec(res);
});


router.put('/:id', function (req, res) {   
    req.sql("exec update_feedback @id, @feedb_name, @feedb_date, @feedb_description, @feedb_edit_date")
    .param('feedb_id', req.body.feedb_id, TYPES.Int)
    .param('feedb_name', req.body.feedb_name, TYPES.VarChar)
    .param('feedb_date', req.body.feedb_date, TYPES.Date)
    .param('feedb_description', req.body.feedb_description, TYPES.Text)
    .param('feedb_edit_date', req.body.feedb_edit_date, TYPES.Date)
    .exec(res);
});

router.delete('/:feedb_id', function (req, res) {
    req.sql("exec delete_feedback @feedb_id")
        .param('feedb_id', req.params.feedb_id, TYPES.Int)
        .exec(res);
});

module.exports = router;