module.exports = (fn) => {
    return (req, res, next) => {
        fn(err, req, res, next).catch(next);
    }
}