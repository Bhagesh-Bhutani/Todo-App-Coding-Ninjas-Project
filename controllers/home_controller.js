const Task = require('../models/task');

module.exports.home_action = function(req,res){
    Task.find({}, function(err, tasks){
        res.render('home', {
            title: 'TODO App',
            tasks: tasks
        });
    });
};

module.exports.add_task_action = function(req,res){
    Task.create(req.body, function(err, newTask){
        if(err){
            console.log(err);
            return res.status(404).send("<h1>Error while creating document for the Task.</h1>");
        }

        console.log("Created: ", newTask);
        return res.redirect('back');
    });
};

module.exports.delete_task_action = function(req,res){
    Task.deleteMany({
        _id: {
            $in: req.body.checked
        }
    }, function(err, deleted_tasks){
        if(err){
            console.log(err);
            return res.status(404).send("<h1>Error while deleting specified tasks.</h1>");
        }
        console.log("Deleted the following: ", deleted_tasks);
        return res.redirect('back');
    });
};