var router = require('express').Router();
var TYPES = require('tedious').TYPES;


router.get('/', function (req, res) {

    req.sql("select * from code for json path")
        .into(res, '[]');

});


router.get('/:id', function (req, res) {
    
    req.sql("select * from code where id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');

});


router.post('/', function (req, res) {
    
    req.sql("exec createCode @code")
        .param('code', req.body, TYPES.NVarChar)
        .exec(res);

});


router.put('/:id', function (req, res) {
    
    req.sql("exec updateCode @id, @code")
        .param('id', req.params.id, TYPES.Int)
        .param('code', req.body, TYPES.NVarChar)
        .exec(res);

});

router.delete('/:id', function (req, res) {
    
    req.sql("delete from code where id = @id")
        .param('id', req.params.id, TYPES.Int)
        .exec(res);

});

module.exports = router;