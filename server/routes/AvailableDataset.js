var router = require('express').Router();
var TYPES = require('tedious').TYPES;


router.get('/', function (req, res) {
    req.sql("SELECT * FROM available_dataset for json path")
        .into(res, '[]');
});


router.get('/:id', function (req, res) {    
    req.sql("SELECT * FROM available_dataset where id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');
});


router.post('/:reference', function (req, res) {
    req.sql("exec create_available_dataset @reference")
        .param('@reference', req.params.reference, TYPES.Int)
        .exec(res);
});


router.put('/:id_dataset/:reference', function (req, res) {    
    req.sql("exec update_available_dataset @id_dataset, @reference")
        .param('id_dataset', req.params.id, TYPES.Int)
        .param('reference', req.params.reference, TYPES.Int)
        .exec(res);
});

router.delete('/:id_dataset', function (req, res) {    
    req.sql("exec delete_available_dataset @id_dataset")
        .param('id_dataset', req.params.id_dataset, TYPES.Int)
        .exec(res);
});

module.exports = router;