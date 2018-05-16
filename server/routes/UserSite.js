var router = require('express').Router();
var TYPES = require('tedious').TYPES;

router.get('/', function (req, res) {
    req.sql("SELECT * FROM userSite for json path")
        .into(res, '[]');
});


router.get('/:id', function (req, res) {
    req.sql("SELECT * FROM userSite WHERE id = @id for json path, without_array_wrapper")
        .param('id', req.params.id, TYPES.Int)
        .into(res, '{}');
});


router.post('/', function (req, res) {
    req.sql("exec create_user @username, @name, @lastname, @id_role")
        .param('username', req.body.username, TYPES.VarChar)
        .param('name', req.body.name, TYPES.VarChar)
        .param('lastname', req.body.name, TYPES.VarChar)
        .param('id_role', req.body.name, TYPES.Int)
        .exec(res);
});


router.put('/', function (req, res) {
    req.sql("exec update_user @user_id, @username, @name, @lastname, @id_role")
        .param('user_id', req.body.user_id, TYPES.Int)
        .param('username', req.body.username, TYPES.VarChar)
        .param('name', req.body.name, TYPES.VarChar)
        .param('lastname', req.body.lastname, TYPES.VarChar)
        .exec(res);
});

router.delete('/:user_id', function (req, res) {    
    req.sql("exec delete_user @user_id")
        .param('user_id', req.params.user_id, TYPES.Int)
        .exec(res);
});

module.exports = router;