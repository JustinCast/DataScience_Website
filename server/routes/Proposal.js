var router = require('express').Router();
var TYPES = require('tedious').TYPES;


router.get('/', function (req, res) {
    req.sql("SELECT * FROM proposal for json path")
        .into(res, '[]');
});


router.get('/:id', function (req, res) {
    req.sql("SELECT * FROM proposal WHERE id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');
});


router.post('/', function (req, res) {
    req.sql("exec create_proposal @description, @prop_date, @prop_state, @prop_name, @id_thematic")
        .param('description', req.body.description, TYPES.Text)
        .param('prop_date', req.body.prop_date, TYPES.Date)
        .param('prop_state', req.body.prop_state, TYPES.VarChar)
        .param('prop_name', req.body.prop_name, TYPES.VarChar)
        .param('id_thematic', req.body.id_thematic, TYPES.Int)
        .exec(res); 
});


router.put('/', function (req, res) {
    req.sql("exec update_proposal @prop_id, @description, @prop_date, @prop_state, @prop_name, @id_thematic")
    .param('prop_id', req.body.prop_id, TYPES.Int)
    .param('description', req.body.description, TYPES.Text)
    .param('prop_date', req.body.prop_date, TYPES.Date)
    .param('prop_state', req.body.prop_state, TYPES.VarChar)
    .param('prop_name', req.body.prop_name, TYPES.VarChar)
    .param('id_thematic', req.body.id_thematic, TYPES.Int)
    .exec(res); 
});

router.delete('/:prop_id', function (req, res) {    
    req.sql("exec delete_proposal @prop_id")
        .param('prop_id', req.params.prop_id, TYPES.Int)
        .exec(res);
});

module.exports = router;