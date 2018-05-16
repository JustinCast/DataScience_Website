var router = require('express').Router();
var TYPES = require('tedious').TYPES;


router.get('/', function (req, res) {

    req.sql("select * from feedback for json path")
        .into(res, '[]');

});


router.get('/:id', function (req, res) {
    
    req.sql("select * from feedback where id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');

});


router.post('/', function (req, res) {
    
    req.sql("exec createFeedBack @feedback")
        .param('feedback', req.body, TYPES.NVarChar)
        .exec(res);

});


router.put('/:id', function (req, res) {
    
    req.sql("exec updateFeedback @id, @feedback")
        .param('id', req.params.id, TYPES.Int)
        .param('feedback', req.body, TYPES.NVarChar)
        .exec(res);

});

router.delete('/:id', function (req, res) {
    
    req.sql("delete from feedback where id = @id")
        .param('id', req.params.id, TYPES.Int)
        .exec(res);

});

module.exports = router;