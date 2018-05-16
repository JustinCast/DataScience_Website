var router = require('express').Router();
var TYPES = require('tedious').TYPES;


router.get('/', function (req, res) {
    req.sql("SELECT * FROM role for json path")
        .into(res, '[]');
});


router.get('/:id', function (req, res) {
    req.sql("SELECT * FROM role WHERE id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');
});


router.post('/', function (req, res) {
    req.sql("exec create_rol @type")
        .param('type', req.body.type, TYPES.NVarChar)
        .exec(res);
});


router.put('/', function (req, res) {
    req.sql("exec update_rol @role_id, @type")
    .param('role_id', req.body.role_id, TYPES.NVarChar)
    .param('type', req.body.type, TYPES.NVarChar)
    .exec(res); 
});

router.delete('/', function (req, res) {
    req.sql("exec delete_rol @role_id")
        .param('role_id', req.params.role_id, TYPES.Int)
        .exec(res);
});

module.exports = router;