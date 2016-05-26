var Item = require('../models/item');

exports.save = function(name, callback, errback) {
    Item.create({ name: name }, function(err, item) {
        if (err) {
            errback(err);
            return;
        }
        callback(item);
    });
};

exports.list = function(callback, errback) {
    Item.find(function(err, items) {
        if (err) {
            errback(err);
            return;
        }
        callback(items);
    });
};

exports.update = function(name, callback, errback) {
    Item.findOneAndUpdate({name: name}, function(err, Item) {
        if (err || !Item) {
            console.error("Could not update", name);
            errback(err);
            return;
        }
        console.log("Updated item", Item.name);
        callback(items);
    });
};

exports.delete = function(id, errback, callback) {
    Item.findByIdAndRemove(id, function(err, item) {
        if (err) {
            errback(err);
            return;
        } else if (err==null && item==null){
            errback(err)
            return;
        }
        callback(item);
    });
};
