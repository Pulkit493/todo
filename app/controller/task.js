/**
 * Created by rahul on 11-06-2016.
 */
module.exports = function (app) {
    var User = app.models.User;

// add user method ============================
app.post('/api/task',function(req,res){
    var user  = new User({
        task:req.body.text
    });
    user.save(function(err,user){
        if(err){
            res.json(err);
        }
        res.json(user);
    });
});

// get user by name method ========================
    app.get('/api/task', function(req, res) {

        // use mongoose to get all todos in the database
        User.find(function(err, todos) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(todos); // return all todos in JSON format
        });
    });


// delete user by name method ====================
    app.delete('/api/task/:todo_id', function(req, res) {
        User.remove({
            _id : req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            User.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });


//app.use(express.static(__dirname + '/public'));
// start server on port 80 =====================
};