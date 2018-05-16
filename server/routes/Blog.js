var router = require('express').Router();
var TYPES = require('tedious').TYPES;


router.get('/', function (req, res) {
    req.sql("SELECT * FROM blog for json path")
        .into(res, '[]');
});


router.get('/:id', function (req, res) {    
    req.sql("SELECT * FROM blog where id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');
});


router.post('/:author/:id_thematic', function (req, res) {
    req.sql("exec create_blog @author, @id_thematic")
        .param('author', req.params.author, TYPES.Int)
        .param('id_thematic', req.params.id_thematic, TYPES.Int)
        .exec(res);
});


router.put('/:blog_id/:author/:id_thematic', function (req, res) {
    
    req.sql("exec update_blog @blog_id, @author, @id_thematic")
        .param('blog_id', req.params.blog_id, TYPES.Int)
        .param('author', req.params.author, TYPES.Int)
        .param('id_thematic', req.params.id_thematic, TYPES.Int)
        .exec(res);

});

router.delete('/:blog_id', function (req, res) {    
    req.sql("exec delete_blog @blog_id")
        .param('blog_id', req.params.id, TYPES.Int)
        .exec(res);

});

module.exports = router;