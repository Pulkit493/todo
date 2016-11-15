/**
 * Created by rahul on 11-06-2016.
 */
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    task: { type: String }
});

exports.UserSchema = module.exports.UserSchema = userSchema;
exports.boot = module.exports.boot = function (app) {
    mongoose.model('User', userSchema);
    return app.models.User = mongoose.model('User');
};