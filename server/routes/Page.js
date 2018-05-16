var router = require('express').Router();
var TYPES = require('tedious').TYPES;


router.get('/', function (req, res) {
    req.sql("SELECT * FROM page for json path")
        .into(res, '[]');
});


router.get('/:id', function (req, res) {  
    req.sql("SELECT * FROM page where id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');
});


router.post('/', function (req, res) {
    req.sql("exec create_page @title, @link, @description, @upload_id")
        .param('title', req.body.title, TYPES.VarChar)
        .param('link', req.body.link, TYPES.VarChar)
        .param('description', req.body.description, TYPES.Text)
        .param('upload_id', req.body.upload_id, TYPES.Int)
        .exec(res);
});


router.put('/', function (req, res) {
    req.sql("exec update_page @page_id, @title, @link, @description, @upload_id")
    .param('page_id', req.body.page_id, TYPES.Int)
    .param('title', req.body.title, TYPES.VarChar)
    .param('link', req.body.link, TYPES.VarChar)
    .param('description', req.body.description, TYPES.Text)
    .param('upload_id', req.body.upload_id, TYPES.Int)
    .exec(res);
});

router.delete('/:page_id', function (req, res) {
    req.sql("exec delete_page @page_id")
        .param('page_id', req.params.page_id, TYPES.Int)
        .exec(res);
});

module.exports = router;