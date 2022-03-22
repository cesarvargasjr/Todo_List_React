module.exports = function(req,res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    res.header('Access-Control-Headers', 'Origin, X-Requested-With, Content-Type, X-Requested-With, Content-Type, Accept')
    next()
}