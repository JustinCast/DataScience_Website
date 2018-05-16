var router = require('express').Router();
var TYPES = require('tedious').TYPES;


router.get('/', function (req, res) {

    req.sql("select * from proposal for json path")
        .into(res, '[]');

});


router.get('/:id', function (req, res) {
    
    req.sql("select * from proposal where id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');

});


router.post('/', function (req, res) {
    
    req.sql("exec createProposal @proposal")
        .param('proposal', req.body, TYPES.NVarChar)
        .exec(res);

});


router.put('/:id', function (req, res) {
    
    req.sql("exec updateProposal @id, @proposal")
        .param('id', req.params.id, TYPES.Int)
        .param('proposal', req.body, TYPES.NVarChar)
        .exec(res);

});

router.delete('/:id', function (req, res) {
    
    req.sql("delete from proposal where id = @id")
        .param('id', req.params.id, TYPES.Int)
        .exec(res);

});

module.exports = router;