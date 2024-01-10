module.exports = (req, res, next) => {
    res.header('Acess-Control-Allow_origin', '*')
    res.header('Acess-Control-Allow-Methos', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}