const middleware = (req, res, next) => {
    console.log('this is a middleware page');
    next()
}


module.exports = middleware;