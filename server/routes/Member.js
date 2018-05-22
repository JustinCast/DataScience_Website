var router = require('express').Router();
var TYPES = require('tedious').TYPES;


router.get('/', function (req, res) {
    req.sql("SELECT * FROM member for json path")
        .into(res, '[]');
});


router.get('/:id', function (req, res) {
    req.sql("SELECT * FROM member WHERE id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');
});


router.post('/', function (req, res) {
    req.sql("exec createMember @member")
        .param('member', req.body, TYPES.NVarChar)
        .exec(res);
});


router.put('/:id', function (req, res) {
    
    req.sql("exec updateMember @id, @member")
        .param('id', req.params.id, TYPES.Int)
        .param('member', req.body, TYPES.NVarChar)
        .exec(res);

});

router.delete('/:id', function (req, res) {
    
    req.sql("delete from member where id = @id")
        .param('id', req.params.id, TYPES.Int)
        .exec(res);

});

module.exports = router;