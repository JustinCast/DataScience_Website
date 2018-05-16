var router = require('express').Router();
var TYPES = require('tedious').TYPES;


router.get('/', function (req, res) {
    req.sql("SELECT * FROM reference for json path")
        .into(res, '[]');
});


router.get('/:id', function (req, res) {
    req.sql("SELECT * FROM reference WHERE id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');
});


router.post('/', function (req, res) {
    req.sql("exec create_reference @description, @page_id, @code_id, @documents")
        .param('description', req.body.description, TYPES.VarChar)
        .param('page_id', req.body.page_id, TYPES.Int)
        .param('code_id', req.body.code_id, TYPES.Int)
        .param('documents', req.body.documents, TYPES.VarChar)
        .exec(res);
});


router.put('/:id', function (req, res) {
    req.sql("exec update_reference @ref_id, @description, @page_id, @code_id, @documents")
    .param('ref_id', req.body.ref_id, TYPES.Int)
    .param('description', req.body.description, TYPES.VarChar)
    .param('page_id', req.body.page_id, TYPES.Int)
    .param('code_id', req.body.code_id, TYPES.Int)
    .param('documents', req.body.documents, TYPES.VarChar)
    .exec(res);
});

router.delete('/:ref_id', function (req, res) {
    req.sql("exec delete_reference @ref_id")
        .param('ref_id', req.params.ref_id, TYPES.Int)
        .exec(res);
});

module.exports = router;