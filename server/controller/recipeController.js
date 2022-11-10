/**
 * GET /
 * Homepage
 */ 
exports.homepage = (req,res) =>{
    res.render('index', {title: 'Cooking Blog - Home'});
}
