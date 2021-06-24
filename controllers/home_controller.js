module.exports.home_action = function(req,res){
    return res.render('home', {
        title: 'Home'
    });
};